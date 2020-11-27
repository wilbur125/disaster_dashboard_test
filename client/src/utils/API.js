import axios from "axios";

export default {
  getDisasters: function() {
    return axios.get("/api/disasters");
  },

  getReadyKitByUser: function(username) {
    return axios.get("/api/readyKit/search/" + username);
  },

  getCovidByState: function(queryCovid) {

    const prevDate = new Date();
    prevDate.setDate(prevDate.getDate() - 1);
    const yyyy = prevDate.getFullYear();
    const mm = prevDate.getMonth() + 1;
    const dd = prevDate.getDate();
    const dateAsOf = yyyy + "-" + mm + "-" + dd;


    return axios.get("https://data.cdc.gov/resource/9mfq-cb36.json?submission_date=" + dateAsOf + "T00:00:00.000&state=" + queryCovid);
  },

  updateReadyKitByUser: function(username, data) {
    return axios.put("/api/readykit/update/" + username, data);
  }
};
