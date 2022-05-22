
import React , {useState} from 'react';
import MyDropdownList from './DropDown';
import MyLineChart from './LineChart'
import axios from 'axios';
import { BrowserRouter, Routes, Route} from "react-router-dom";

// function  App () {
//   const [state, setState] = useState();

//   console.log(state);
//   var onDropdownChange = (e) => {
//     console.log(e);
//     const url = 'https://environment.data.gov.uk/flood-monitoring/id/stations/1491TH/readings?today';
//         axios.get(url).then(res => {
//             res.data.items.forEach((item, index) => {
//                 if (index < 7) {
//                     data[index].FL = res.data.items[index].value * 200;
//                 }

//             })

//         });
  
// }
//     return (
//       <div>
//        <p>count: {state}</p>
//        <MyLineChart data={data}/>
//         <MyDropdownList  changeLink={onDropdownChange.bind(this)} />
//       </div>
//     )
// }



const data = [
  {
      name: '1:20AM', WL: 4000, FL: 500
  },
  {
      name: '2:20AM', WL: 4000, FL: 1200
  },
  {
      name: '3:20AM', WL: 4000, FL: 3300
  },
  {
      name: '4:20AM', WL: 4000, FL: 200
  },
  {
      name: '5:20AM', WL: 4000, FL: 800
  },
  {
      name: '6:20AM', WL: 2390, FL: 2400
  },
  {
      name: '7:20AM', WL: 3490, FL: 1600
  },
];

class App extends React.Component {

  state = {
    type: "Line"
  }

  handleChange = (e) => {
    this.setState({type: e.target.value})
  }
   onDropdownChange = (e) => {
    console.log(e);
        const url = 'https://environment.data.gov.uk/flood-monitoring/id/stations/1491TH/readings?today';
            axios.get(url).then(res => {
                res.data.items.forEach((item, index) => {
                    if (index < 7) {
                        data[index].FL = res.data.items[index].value * 200;
                    }
    
                })
            });
   }
  fetchChart = () => {
    const {type} = this.state
    switch(type){
      case "Line": return <MyLineChart data={data}/>
      case "Bar": return <MyLineChart data={data}/>
      default: return <MyLineChart data={data}/>
    }
  }
  render(){
    return (
      <div>
        <select onChange={this.handleChange}>
          <option>Line</option>
          <option>Bar</option>
          <option>Stacked</option>
        </select>
      {this.fetchChart()}
      <MyDropdownList  changeLink={this.onDropdownChange.bind(this)} />
      </div>
    )
  }
}
export default App;