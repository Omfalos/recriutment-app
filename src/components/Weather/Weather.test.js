import React from "react";
import { shallow } from "enzyme";
import Weather from "./index";

it("should return null if city is undefined", () => {
  const wrapper = shallow(<Weather city={undefined} />);
  expect(wrapper.html()).toEqual(null);
});

it("should return null if list is undefined", () => {
  const wrapper = shallow(
    <Weather city={{ name: "Kielce", country: "PL" }} list={undefined} />
  );
  expect(wrapper.html()).toEqual(null);
});
