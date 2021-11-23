import http from "../http-common";
import DataTypes from "../types/types";


const getAll = () => {
  return http.get<DataTypes[]>("http://api.tvmaze.com/shows");
}
const DataService = {
  getAll
};


export default DataService;