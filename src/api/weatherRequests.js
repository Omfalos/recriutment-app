import axios from "axios";

const API_KEY = "";

export const getWeatherForInput = ({ city, country }) =>
  axios
    .get(`https://url?&appId=${API_KEY}`, {
      headers: {
        Accept: "application/json"
      }
    })
    .then(res => res.data)
    .catch(error => {
      throw error;
    });

export const getWeatherForLocation = ({ lat, long }) =>
  axios
    .get(`https://url?&appId=${API_KEY}`, {
      headers: {
        Accept: "application/json"
      }
    })
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
