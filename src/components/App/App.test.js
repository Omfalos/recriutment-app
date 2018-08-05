import React from "react";
import { mount, shallow } from "enzyme";
import { PropagateLoader } from "react-spinners";

import App from "./App";
import Weather from "../Weather";

it("should render PropagateLoader when loading prop is truth", () => {
  const wrapper = shallow(<App loading={true} />);
  const loader = wrapper.find(PropagateLoader);
  expect(loader.length).toEqual(1);
});

it("should render an error message when error prop is truth", () => {
  const wrapper = shallow(<App error={true} />);
  const errorMessage = wrapper
    .find("p")
    .at(1)
    .text();
  expect(errorMessage).toEqual(
    "Sorry, something went wrong... Please try again later"
  );
});
