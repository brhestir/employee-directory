import React, { Component } from "react";
import Axios from "axios";
import ListviewHeaderEl from "../ListviewHeaderEl/ListviewHeaderEl";
import ListviewRowEl from "../ListviewRowEl/ListviewRowEl";
import RipJumbotron from "../RipJumbotron/RipJumbotron";

class Container extends Component {
  state = {
    sims: [],
    simsSorted: [],
  };

  componentDidMount() {
    return Axios.get("https://randomuser.me/api/?results=10&nat=us")
      .then((response) => {
        // if successful
        console.log(response);
        this.setState({ sims: response.data.results });
        console.log(this.state);
      })
      .catch((err) => {
        // error handling
        console.log(err);
      });
  }

  handleBtnClick = (e) => {
    console.log("clicked");
  };

  compare = (a, b) => {};

  render() {
    return (
      <div>
        <RipJumbotron />
        <table className="table">
          <ListviewHeaderEl handleBtnClick={this.handleBtnClick} />
          <tbody>
            {this.state.sims.map((simInstance, index) => {
              return (
                <ListviewRowEl {...simInstance} key={index} index={index} />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Container;
