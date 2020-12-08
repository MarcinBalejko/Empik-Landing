import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Map from "./Map";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}) => {
  return shallow(<Map {...props} />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`${val}`);
};

describe("Map component", () => {
  test("renders map container", () => {
    const wrapper = setup();
    expect(wrapper.find(".mapdiv").length).toBe(1);
  });

  test("renders map svg", () => {
    const wrapper = setup();
    const mapSvg = findByTestAttr(wrapper, "svg");
    expect(mapSvg.length).toBe(1);
  });
});
