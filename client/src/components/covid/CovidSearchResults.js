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
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
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
    console.log(this.state.result);
    return (
            <CovidCard
              heading= "Search by US State">
              <CovidSearchForm
                value={this.state.searchCovid}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
              <CovidDetail
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
