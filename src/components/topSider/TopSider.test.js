import React from "react";
import "../../setupTests";
import TopSider from "./TopSider";
import {shallow} from "enzyme";

const props = {
  getRestaurant: jest.fn(),
  filterRestaurant: jest.fn(),
  disableSlider: true
};

describe("TopSider test", () => {
  test("should render properly", () => {
    const comp = shallow(
      <TopSider
        getRestaurant={props.getRestaurant}
        filterRestaurant={props.filterRestaurant}
        disableSlider={props.disableSlider}
      />
    );

    expect(comp).toMatchSnapshot();
  });
});
