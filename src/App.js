
import React , {useEffect,useState} from 'react';
import MyDropdownList from './DropDown';
import MyLineChart from './LineChart'
import axios from 'axios';
import { BrowserRouter, Routes, Route} from "react-router-dom";

//  Method 1

// function  App () {
//  // const [state, setState] = useState();
//  //const [data, setData] = useState({});
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
//         //this.setData(e);
// }
//     return (
//       <div>
     
//        <MyLineChart data={data}/>
//         <MyDropdownList  changeLink={onDropdownChange.bind(this)} />
//       </div>
//     )
// }



const data = [
  {
      name: '',  FL: 0
  },

];


//  Method 2


// class App extends React.Component {

//   state = {
//     type: "Line"
//   }

//   handleChange = (e) => {
//     this.setState({type: e.target.value})
//   }
//    onDropdownChange = (e) => {
//     console.log(e);
//         const url = 'https://environment.data.gov.uk/flood-monitoring/id/stations/1491TH/readings?today';
//             axios.get(url).then(res => {
//                 res.data.items.forEach((item, index) => {
//                     if (index < 7) {
//                         data[index].FL = res.data.items[index].value * 200;
//                     }
    
//                 })
//             });
//    }
//   fetchChart = () => {
//     const {type} = this.state
//     switch(type){
//       case "Line": return <MyLineChart data={data}/>
//       case "Bar": return <MyLineChart data={data}/>
//       default: return <MyLineChart data={data}/>
//     }
//   }
//   render(){
//     return (
//       <div>
//         <select onChange={this.handleChange}>
//           <option>Line</option>
//           <option>Bar</option>
//           <option>Stacked</option>
//         </select>
//       {this.fetchChart()}
//       <MyDropdownList  changeLink={this.onDropdownChange.bind(this)} />
//       </div>
//     )
//   }
// }
// export default App;



//  Method 3


const color = ["#8884d8", "#82ca9d", "orange", "pink"]

class App extends React.Component {

  state = {
    type: "Line",
    data:data
  }

  handleChange = (e) => {
    this.setState({type: e.target.value})
  }
 
  onDropdownChange =  (e)  => {
    console.log(e);
        const url = 'https://environment.data.gov.uk/flood-monitoring/id/stations/'+e+'/readings?today';
           axios.get(url).then(res => {
            var newArray = this.state.data.slice();    
                res.data.items.forEach((item, index) => {
                   // if (index < 2000) {
                       //data[index].name = res.data.items[index].dateTime;
                       // data[index].FL = res.data.items[index].value * 200;
                       
                        newArray.push( {name:res.data.items[index].dateTime,FL:res.data.items[index].value})
                       
                        
                       // newArray.push(res.data.items[index].dateTime,res.data.items[index].value,res.data.items[index].value);   
                       
                   // }
                   
                })
                this.setState({data:newArray})
      });
      this.setState({type: e, data:data});
   }

  fetchChart = () => {
    const {type,data} = this.state
    switch(data){
      case "Line": return <MyLineChart data={data} key={type}/>
      default: return <MyLineChart data={data} key={type}/>
    }
  }


  render(){
    return (
      <div>
        
        <MyDropdownList  changeLink={this.onDropdownChange.bind(this)} />
        <select onChange={this.handleChange}>
          <option>Line</option>
          <option>Bar</option>
          <option>Stacked</option>
        </select>
        {this.fetchChart()}

      </div>
    )
  }
}


export default App;