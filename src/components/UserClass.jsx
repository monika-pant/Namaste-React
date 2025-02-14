import react from "react";
import { USER_DATA_API } from "../utils/constants";

class UserClass extends react.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      //   count: 1,
      userInfo: {
        name: "Dummy",
        bio: "developer....",
        avator_url: "dummy image url",
        location: "dummy",
      },
    };
  }
  async componentDidMount() {
    console.log("child component mounting");
    //make API calls inside this life cycle hook as the compoenet is rendered and now we make an API call
    // and load the data indise the compoenent
    const data = await fetch(USER_DATA_API);
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("component did update called", prevProps, prevState);
  }
  componentWillUnmount() {
    console.log("Component will unmount");
  }
  render() {
    const { name, avatar_url, bio, location } = this.state.userInfo;

    return (
      <>
        <div className="user-info">
          {/* <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Set Count
          </button>
          <span>count is {this.state.count}</span> */}
          <img src={avatar_url} />
          <h2>Name: {name}</h2>
          <h3>Bio:</h3>
          <p>{bio}</p>
          <h3>Location: {location}</h3>
          <h4>email: monikapant.1feb@gmail.com</h4>
        </div>
      </>
    );
  }
}
export default UserClass;
