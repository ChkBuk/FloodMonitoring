import React,{useEffect,useState}  from 'react';
import {Bar,Line} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
import axios from 'axios';

const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Measure',
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [10, 20, 30, 40, 56]
    }
  ]
}

class App extends React.Component {
  state = { result: null };

  render() {
    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Flood measure during last 24 hours',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
       
      </div>
    );
  }
}

export default App;