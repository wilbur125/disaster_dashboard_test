import axios from "axios";

export default {
  getDisasters: function() {
    return axios.get("/api/disasters");
  },

  getReadyKitByUser: function(username) {
    return axios.get("/api/readyKit/search/" + username);
  },

  getCovidByState: function(queryCovid) {

    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 5);
    const yyyyS = startDate.getFullYear();
    const mmS = startDate.getMonth() + 1;
    const ddS = startDate.getDate();
    const queryStartDate = yyyyS + "-" + mmS + "-" + ddS;

    const endDate = new Date();
    endDate.setDate(endDate.getDate() - 1);
    const yyyyE = endDate.getFullYear();
    const mmE = endDate.getMonth() + 1;
    const ddE = endDate.getDate();
    const queryEndDate = yyyyE + "-" + mmE + "-" + ddE;


    return axios.get("https://data.cdc.gov/resource/9mfq-cb36.json?$where=submission_date between '" + queryStartDate + "T00:00:00.000' and '" + queryEndDate + "T00:00:00.000'&state=" + queryCovid);
  },

  updateReadyKitByUser: function(username, data) {
    return axios.put("/api/readykit/update/" + username, data);
  }
};
