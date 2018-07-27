import axios from "axios";

const API_KEY = "82c44e4cb0a950728e7ddf1e1d0eb9db";

export const getWeatherForInput = ({ city, countryCode }) =>
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&units=metric&?&appid=${API_KEY}`,
      {
        headers: {
          Accept: "application/json"
        }
      }
    )
    .then(res => res.data)
    .catch(error => {
      throw error;
    });

export const getWeatherForLocation = ({ lat, long }) =>
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${API_KEY}`,
      {
        headers: {
          Accept: "application/json"
        }
      }
    )
    .then(res => res.data)
    .catch(error => {
      throw error;
    });
