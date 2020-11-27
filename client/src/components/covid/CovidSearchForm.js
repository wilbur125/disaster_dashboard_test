import React from "react";

function CovidSearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <input
          value={props.value}
          onChange={props.handleInputChange}
          name="searchCovid"
          type="text"
          className="form-control"
          placeholder="Type the abbreviation for the state"
          id="searchCovid"
        />
        <button onClick={props.handleFormSubmit} className="covid-btn">
          Search
        </button>
      </div>
    </form>
  );
}

export default CovidSearchForm;
