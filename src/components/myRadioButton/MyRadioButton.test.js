import React from "react";
import "../../setupTests";
import MyRadioButton from "./MyRadioButton";
import { shallow, mount} from "enzyme";

var mockClick = jest.fn();
const props = {
  getRestaurant: mockClick,
  id: "11",
  val: "value",
  name: "name",
};

describe("MyRadioButton Test", () => {

  var comp;
  beforeEach(()=>{
    comp = shallow(
      <MyRadioButton
        getRestaurant={props.getRestaurant}
        id={props.id}
        val={props.val}
        name={props.name}
      />
    );
  });

  test("should render properly", () => {
    expect(comp).toMatchSnapshot();
  });
    
});