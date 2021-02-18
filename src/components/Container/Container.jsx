import React, { Component } from "react";
import Axios from "axios";
import ListviewHeaderEl from "../ListviewHeaderEl/ListviewHeaderEl";
import ListviewRowEl from "../ListviewRowEl/ListviewRowEl";
import RipJumbotron from "../RipJumbotron/RipJumbotron";
import SearchForm from "../SearchForm/SearchForm";

class Container extends Component {
  state = {
    sims: [],
    simsSorted: [],
    simsFiltered: [],
    direction: 1,
  };

  componentDidMount() {
    return Axios.get("https://randomuser.me/api/?results=25&nat=us")
      .then((response) => {
        // if successful
        console.log(response);
        this.setState({ sims: response.data.results });
        this.setState({ simsFiltered: this.state.sims });
        console.log(this.state);
      })
      .catch((err) => {
        // error handling
        console.log(err);
      });
  }

  handleInputChange = (e) => {
    const filterBuffer = e.target.value;
    const filteredSimsBuffer = this.state.sims.filter((simInstance) => {
      return simInstance.name.last
        .toLowerCase()
        .includes(filterBuffer.toLowerCase());
    });
    this.setState({ simsFiltered: filteredSimsBuffer });
  };

  handleBtnClick = (e) => {
    console.log("Sorting");
    const compareForSort = (a, b) => {
      const lastA = a.name.last.toUpperCase();
      const lastB = b.name.last.toUpperCase();
      let sortDirection = 1;
      let setDirection = this.state.direction * -1;
      this.setState({ direction: setDirection });

      if (lastA > lastB) {
        sortDirection = 1 * setDirection;
      } else if (lastA < lastB) {
        sortDirection = -1 * setDirection;
      }
      return sortDirection;
    };

    const simsSortedBuffer = this.state.simsFiltered.sort(compareForSort);
    this.setState({ simsFiltered: simsSortedBuffer });
  };

  render() {
    return (
      <div>
        <RipJumbotron />
        <SearchForm onChange={this.handleInputChange} />
        <table className="table">
          <ListviewHeaderEl handleBtnClick={this.handleBtnClick} />
          <tbody>
            {this.state.simsFiltered.map((simInstance, index) => {
              return <ListviewRowEl {...simInstance} key={index} />;
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Container;
