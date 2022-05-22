import React,{useState} from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import MyDropdownList from './DropDown';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';


const url = 'https://environment.data.gov.uk/flood-monitoring/id/stations/1491TH/readings?today';
const loading = false;

var getLineChart = () => {
    var  data = [
          {
              name: '1:20AM', WL: 4000, FL: 1000
          },
          {
              name: '2:20AM', WL: 3000, FL: 1200
          },
          {
              name: '3:20AM', WL: 2000, FL: 3300
          },
          {
              name: '4:20AM', WL: 2780, FL: 200
          },
          {
              name: '5:20AM', WL: 1890, FL: 800
          },
          {
              name: '6:20AM', WL: 2390, FL: 2400
          },
          {
              name: '7:20AM', WL: 3490, FL: 1600
          },
      ];
      var color = ["#8884d8", "#82ca9d", "orange", "pink"]
      const keysArr = Object.keys(data[0]).slice(1);
      const lineArr = [];
      keysArr.forEach((item, index) => {
          lineArr.push(<Line type="monotone" dataKey={item} stroke={color[index]} />)
      })
      return lineArr;
  }

  var modifyFormatter = (value, name, props) => {
      const nameJSX = <span><span style={{
          display: "inline-block",
          marginRight: "5px",
          borderRadius: "10px",
          width: "10px",
          height: "10px",
          backgroundColor: props.color
      }}></span>{name} : {value}</span>
      return [nameJSX];
  }

 function MyLineChart(prop) {
   const [data, setData] = useState(null);
   var onDropdownChange = (e) => {
    this.setData(data);
   }
        return (
          
            <div>
              
                {
                    <LineChart
                        width={500}
                        height={300}
                        data={prop.data}
                        margin={{
                            top: 5, right: 30, left: 20, bottom: 5,
                        }}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} vertical={false} />
                        <XAxis dataKey={Object.keys(prop.data[0])[0]} />
                        <YAxis />
                        <Tooltip formatter={modifyFormatter} />
                        <Legend />
                        {getLineChart()}

                    </LineChart> 
                  
                    }
                    
            </div>

        );
   
}
export default MyLineChart;