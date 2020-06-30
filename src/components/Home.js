import React, { Component } from "react";
import Jumbotron from "./common/Jumbotron";
import Card from "./common/Card";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/post", {
      method: "GET",
    })
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result.data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading ...</div>;
    } else {
      return (
        <div>
          <Jumbotron />
          <div className="container">
            <div className="row">
              {data.map((data) => {
                return <Card title={data.title} content={data.content} />;
              })}
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Home;
