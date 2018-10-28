import React from "react";
import "../../setupTests";
import RightSider from "./RightSider";
import { shallow } from "enzyme";

const testDetail = {
  "restaurant": {
    "name": "name",
    "thumb": "",
    "location": {
      "address": "11 adelaide road, adelaide"
    },
    "user_rating": {
      "aggregate_rating": "4.0"
    },
    "cuisine": "Coffee and Tea",
    "price_range": 2,
    "average_cost_for_two": 30
  }
};
const props = {
  data: testDetail
}

describe("RightSider Test", () => {
  var comp;
  beforeEach(()=>{
    comp = shallow(
      <RightSider detail={props.data} />
    );
  });

  test("should render correctly", () => {
    expect(comp).toMatchSnapshot();
    expect(comp.find(".restaurant-name").text()).toBe("name");
    
  })
  
});



