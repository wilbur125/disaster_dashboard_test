import React, { Component } from 'react';
import API from '../../utils/API';
import CovidCard from './CovidCard';
import CovidDetail from './CovidDetail';
import CovidSearchForm from './CovidSearchForm';
import CovidChartCases from './CovidChartCases';
import CovidChartDeaths from './CovidChartDeaths';


class CovidSearchResults extends Component {
  state = {
    result: [],
    searchCovid: ""
  };

  componentDidMount() {
    this.searchCovid("WA");
  }

  searchCovid = queryCovid => {
    API.getCovidByState(queryCovid)
    .then(res => {
      const data = [];
      for (let i = 0; i < 5; i++) {
        if (res.data[i]) {
          data.push(res.data[i])
        } else {
          data.push(
            {
              new_case: 0,
              new_death: 0
            }
          )
        }
      }
    this.setState({ result: data })})
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value.trim().toUpperCase();
    const name = event.target.name;
    const stateAbbv = {
      "AL": "Alabama",
      "AK": "Alaska",
      "AS": "American Samoa",
      "AZ": "Arizona",
      "AR": "Arkansas",
      "CA": "California",
      "CO": "Colorado",
      "CT": "Connecticut",
      "DE": "Delaware",
      "DC": "District Of Columbia",
      "FM": "Federated States Of Micronesia",
      "FL": "Florida",
      "GA": "Georgia",
      "GU": "Guam",
      "HI": "Hawaii",
      "ID": "Idaho",
      "IL": "Illinois",
      "IN": "Indiana",
      "IA": "Iowa",
      "KS": "Kansas",
      "KY": "Kentucky",
      "LA": "Louisiana",
      "ME": "Maine",
      "MH": "Marshall Islands",
      "MD": "Maryland",
      "MA": "Massachusetts",
      "MI": "Michigan",
      "MN": "Minnesota",
      "MS": "Mississippi",
      "MO": "Missouri",
      "MT": "Montana",
      "NE": "Nebraska",
      "NV": "Nevada",
      "NH": "New Hampshire",
      "NJ": "New Jersey",
      "NM": "New Mexico",
      "NY": "New York",
      "NC": "North Carolina",
      "ND": "North Dakota",
      "MP": "Northern Mariana Islands",
      "OH": "Ohio",
      "OK": "Oklahoma",
      "OR": "Oregon",
      "PW": "Palau",
      "PA": "Pennsylvania",
      "PR": "Puerto Rico",
      "RI": "Rhode Island",
      "SC": "South Carolina",
      "SD": "South Dakota",
      "TN": "Tennessee",
      "TX": "Texas",
      "UT": "Utah",
      "VT": "Vermont",
      "VI": "Virgin Islands",
      "VA": "Virginia",
      "WA": "Washington",
      "WV": "West Virginia",
      "WI": "Wisconsin",
      "WY": "Wyoming"
    };
    this.setState({
      [name]: value,
      stateFullName: stateAbbv[value]
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchCovid(this.state.searchCovid);
  };

  render() {
    if (this.state.result.length === 0 ) {
      return null;
    }

    return (
            <CovidCard
              heading= "Search by US State">
              <CovidSearchForm
                value={this.state.searchCovid}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
              <CovidDetail
                stateFullName={this.state.stateFullName}
                newCases={this.state.result[4].new_case}
                newDeaths={this.state.result[4].new_death}
              />
              <CovidChartCases
                newCasesOne={this.state.result[0].new_case}
                newCasesTwo={this.state.result[1].new_case}
                newCasesThree={this.state.result[2].new_case}
                newCasesFour={this.state.result[3].new_case}
                newCasesFive={this.state.result[4].new_case}

              />
              <CovidChartDeaths
                newDeathsOne={this.state.result[0].new_death}
                newDeathsTwo={this.state.result[1].new_death}
                newDeathsThree={this.state.result[2].new_death}
                newDeathsFour={this.state.result[3].new_death}
                newDeathsFive={this.state.result[4].new_death}
              />
            </CovidCard>
    );
  }
}

export default CovidSearchResults;
