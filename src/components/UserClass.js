import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
      count2: 4,
    };
  }
  render() {
    const { name, location, gender } = this.props;
    return (
      <>
        <h1>Name:{name}</h1>
        <h1>Location:{location}</h1>
        <h1>Gender:{gender}</h1>
        <h3>Count : {this.state.count}</h3>
      </>
    );
  }
}

export default UserClass;
