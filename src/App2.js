import React,{useEffect,useState} from 'react';
import {Bar,Chart,Line} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
import axios from 'axios';

var test = document.getElementById('searchbar')==null?'':'';




const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: test.value,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [10, 20, 30, 40, 56]
    }
  ]
}

function updateChart(){
  var updateValues = [test.value];
 
}
function addData(chart, label, data) {
  chart.data.labels.push(label);
  chart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
  });
  chart.update();
}

export default function FloodMonApp () {
   //state = { result: null };
   const url = 'https://environment.data.gov.uk/flood-monitoring/id/stations/1491TH/readings?today'
   const [interest, setInterest] = useState('Flood');
   const [response, setResponse] = useState(null);
 
   useEffect(() => {
      // If you want do do some other action after
      // the response is set do it here. This useEffect will only fire
      // when response changes.
   }, [response]); // Makes the useEffect dependent on response.

   function callRestAPI() {
    var lineChart = document.getElementById('lineChart');
    state.datasets.label='Charith';
    console.log('Line chart: ',lineChart);
      axios.get(url).then(res => {
         // Handle Your response here.
         // Likely you may want to set some state
         //console.log(res.data.items[0].value);
         console.log(res.data.items[0].value);
         console.log(interest);

         setResponse(res);
      });
   };

   function HandleChange(event) {
      setInterest(event.target.value);
   };
   
   return (
      <div className="maincontainer">
         <input
           id="searchbar"
           type="text"
           placeholder="Type an interest ..."
           value={interest}
           onChange={HandleChange}
         />
         <button
           onClick={() => callRestAPI(interest)}  
           className="searchbutton"
           // You may want to disable your button until interest is set
           disabled={interest === null}
         >
           Search
         </button>
         <Line id="lineChart"
          data={state}
          options={{
            responsive: true,
            maintainAspectRatio: true,
            
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
};

