import { connect } from "react-redux";
import Weather from "../components/Weather";

const ConnectedWeather = connect(({ weather }) => ({
  ...weather.data
}))(Weather);

export default ConnectedWeather;
