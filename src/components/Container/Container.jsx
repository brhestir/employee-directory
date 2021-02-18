import React, { Component } from "react";
import Axios from "axios";

class Container extends Component {
  state = {
    sims: [],
  };

  componentDidMount() {
    return Axios.get("https://randomuser.me/api/?results=5")
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

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sims.map((simInstance, index) => {
              <tr>
                <th scope="row">1</th>
                <td>{simInstance.name.first}</td>
                <td>{simInstance.name.last}</td>
                <td>{simInstance.email}</td>
              </tr>;
            })}
          </tbody>
        </table>
        <p>{this.state.users}</p>
      </div>
    );
  }
}

export default Container;
