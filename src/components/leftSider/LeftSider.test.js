import React from "react";
import "../../setupTests";
import LeftSider from "./LeftSider";
import { shallow } from "enzyme";

const testData = [
  { 
    "restaurant": {
      "name": "name1"
    }
  },
  { 
    "restaurant": {
      "name": "name2"
    }
  },
  { 
    "restaurant": {
      "name": "name3"
    }
  },
];

const mockClilck = jest.fn();
const props = {
  clickHandler: mockClilck,
  data: testData
};

describe("LeftSider Test", () => {
  var comp;
  beforeEach(()=>{
    comp = shallow(
      <LeftSider
        clickHandler={props.clickHandler}
        data={props.data}
      />
    );
  });

  test("should mapping and render correctly", () => {
    expect(comp).toMatchSnapshot();
    expect(comp.find(".left-side-li").at(0).text()).toBe("name1");
    expect(comp.find(".left-side-li").at(2).text()).toBe("name3");
  });

  test("should handle click", () => {
    comp.find(".left-side-li").at(0).simulate("click");
    expect(mockClilck).toBeCalled();
  })
    
});

