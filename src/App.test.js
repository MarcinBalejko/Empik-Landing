import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<App {...props} />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`${val}`);
};

describe("App component", () => {
  test("renders Header component", () => {
    const wrapper = setup();
    const headerComponent = findByTestAttr(wrapper, "Header");
    expect(headerComponent.length).toBe(1);
  });

  test("renders Map component", () => {
    const wrapper = setup();
    const mapComponent = findByTestAttr(wrapper, "Map");
    expect(mapComponent.length).toBe(1);
  });
});
