import API from "../../utils/API";
import React from 'react';

class Disasters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disasters: []
    };
  }

  componentDidMount() {
    API.getDisasters()
      .then(res => this.setState({ disasters: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.disasters.map((disaster, index) => (
          <ul key={index}>
            {index}. {disaster.title} coordinates: {disaster.geometry[0].toFixed(2)}(lat), {disaster.geometry[1].toFixed(2)}(lon) date: {disaster.date} category: {disaster.category}
          </ul>
        ))}
      </div>
    );
  }
}

export default Disasters;
