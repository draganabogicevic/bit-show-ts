import axios from "axios";
import { ShowDataTypes, ShowDataType, ShowCrewType } from "../types/types";

const apiClient = axios.create({
  baseURL: "http://api.tvmaze.com/shows",
  
});

const findAll = async () => {
  const response = await apiClient.get<ShowDataTypes[]>("http://api.tvmaze.com/shows");
  return response.data;
}

const findSelected = async (path: string) => {
  const response = await apiClient.get<ShowDataType>(`http://api.tvmaze.com/shows${path}`);
  return response.data;
}

const findSelectedCrew = async (path: string) => {
  const response = await apiClient.get<ShowCrewType[]>(`http://api.tvmaze.com/shows${path}`);
  return response.data;
}

const Service = {
  findAll,
  findSelected,
  findSelectedCrew
}

export default Service;