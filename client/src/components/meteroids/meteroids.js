import React from 'react';

import { ListItem, List } from "../list";


class Meteroid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      apiKey:`${process.env.REACT_APP_METEORS}`,
      apiResults: [],
      todayDate: new Date().toISOString().slice(0, 10),
    }
  }
  componentDidMount() {
    this.loadData()
  }
  loadData() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${this.state.todayDate}&end_date=${this.state.todayDate}&api_key=${this.state.apiKey}`, requestOptions)
      .then(response => response.text())
      .then(result => this.setState({ apiResults: JSON.parse(result) }))
      .then(result => {
        var apiData = this.state.apiResults.near_earth_objects[this.state.todayDate.toString()]
        let finalData = []

        for (var i = 0; i < 5; i++) {

          let meteroids =

          {
            'id': i + 1,
            Name: ` ` + apiData[i].name,
            'Hazardous': ` ` + apiData[i].is_potentially_hazardous_asteroid,
            'MilesDiameter': ` ` + apiData[i].estimated_diameter.miles.estimated_diameter_max.toFixed(2),
            'MissEarth': ` ` + Number(apiData[i].close_approach_data[0].miss_distance.miles).toFixed(2).toLocaleString('en'),
            'VelocityMPH': ` ` + Number(apiData[i].close_approach_data[0].relative_velocity.miles_per_hour).toFixed(2)
          }
          finalData.push(meteroids)

        }
        this.setState({
          apiResults: finalData

        })
        // console.log("this.state.apiResults", this.state.apiResults)
      })
      .catch(error => console.log('error', error));
  }

  render() {
    return (
      <div>
        {/* { <p>{JSON.stringify(this.state.apiResults.Name)}</p>} */}
        {this.state.apiResults.length ? (
        <List>

          <h3 className="mb-3 mt-3" ><img src={process.env.PUBLIC_URL + '/assets/images/comet.png'}  alt = 'meteroid'/> Near Earth Events - Today </h3>
          {this.state.apiResults.map(result => (
      <ListItem key={result.id}>
              Meteor Name:{result.Name} - Danger to Earth: {result.Hazardous.toUpperCase()} - Diameter: {result.MilesDiameter} Miles - Avoided Earth by: {result.MissEarth} Miles - Speed: {result.VelocityMPH} MPH
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>Nothin happenin in space...</h3>
      )}
      </div>
    );
  }
}



export default Meteroid;
