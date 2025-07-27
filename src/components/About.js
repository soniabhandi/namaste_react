import React from "react";
import UserClass from "./UserClass";
import User from "./User";

const About = () => {
  return (
    <div>
      About
      <User name={"sonia function"} location={"mumbai"} gender="female" />
      <UserClass name={"sonia function"} location={"mumbai"} gender="female" />
    </div>
  );
};

export default About;
