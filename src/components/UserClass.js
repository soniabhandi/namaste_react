import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
      count2: 4,
      userInfo: {
        name: "dummy",
        url: "hhtps.gummy.com",
        public_repos: "0",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/soniabhandi");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }
  render() {
    const { name, url, public_repos } = this.state.userInfo;
    return (
      <>
        <div className="user-card">
          <h1>Name:{name}</h1>
          <h1>Location:{url}</h1>
          <h1>Repos:{public_repos}</h1>
          <h3>Count : {this.state.count}</h3>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 2,
              });
            }}
          >
            Count
          </button>
        </div>
      </>
    );
  }
}

export default UserClass;
