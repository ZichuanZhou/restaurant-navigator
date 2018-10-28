import React from "react";
import "../../setupTests";
import MySlider from "./MySlider";
import { shallow } from "enzyme";

const props = {
  filterRestaurant: jest.fn(),
  disableSlider: true,
  name: "rating",
  rangeFrom: "#",
  rangeTo: "#####",
  min: "1",
  max: "5"
};

describe("MySlider Test", () => {

  var comp;
  beforeEach(()=>{
    comp = shallow(
      <MySlider
        filterRestaurant={props.filterRestaurant}
        disableSlider={props.disableSlider}
        name={props.name}
        rangeFrom={props.rangeFrom}
        rangeTo={props.rangeTo}
        min={props.min}
        max={props.max}
      />
    );
  });

  test("should render properly", () => {
    expect(comp).toMatchSnapshot();
  });

  test("should contains right values", () => {
    expect(comp.find(".slider-title").text()).toBe(props.name);
    expect(comp.find("span").first().text()).toBe(props.rangeFrom);
    expect(comp.find("span").at(1).text()).toBe(props.rangeTo);
  });
});
