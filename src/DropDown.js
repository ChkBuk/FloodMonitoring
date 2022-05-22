import React from 'react'
import axios from 'axios';
export const Dropdown = (props) => (
  <div className="form-group">
    <select
      className="form-control"
      name="{props.name}"
      onChange={props.onChange}
    >
      <option defaultValue>Select</option>

      
      {props.options.map((item, index) => (
        <option key={index} value={item.RLOIid}>
          {item.label}
        </option>
      ))}
    </select>
  </div>
)

export default class MyDropdownList extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [],
      chosenValue: '',
    }
  }

  componentDidMount() {
    // fetch('http://universities.hipolabs.com/search?country=United+Kingdom')//http://universities.hipolabs.com/search?country=United+Kingdom
    //   .then((response) => response.json())
    //   .then((item) => this.setState({ list: item }));

    axios.get('https://environment.data.gov.uk/flood-monitoring/id/stations').then(res =>  {
    console.log(res);
    res.data.items.forEach((item, index) => {
        if (index < 7) {
            //res.data.items[index].label;
            this.setState({ list: res.data.items});
        }

    })
  //  this.setState({ type: e.target.value });
  // loading = true;
});
  }

  onDropdownChange = (e) => {
      console.log(e.target.value);
      this.props.changeLink(e.target.value);
    this.setState({ chosenValue: e.target.value })
  }

  render() {
    return (
      <div>
        <h2>React Bootstrap Dropdown Select Box Example</h2>

        <Dropdown
          name={this.state.name}
          options={this.state.list}
          onChange={this.onDropdownChange}
        />
      </div>
    )
  }
}