import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import TestingUseEffect from "./TestingUseEffect";
class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("parent Constructor");
  }
  componentDidMount() {
    // console.log("parent component did mount");
  }
  render() {
    return (
      <>
        <h2>About Class component</h2>
        <TestingUseEffect />
        <User name="Monika Pant(Functional)" />
        <UserClass name="Monika Pant(Class)" />
      </>
    );
  }
}
export default About;
