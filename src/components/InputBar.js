import React, { Component } from "react";
import axios from "axios";

//Utilizing Unsplash API
//API key: 0d453770-b166-11e7-8507-afeb7af3ef02

export default class InputBar extends Component {
  inputStyle = {
    "text-align": "center",
  };

  handleSubmit = event => {
    if (event.which === 13) {
      const inputValue = event.target.value;
      console.log(inputValue);
      this.refs.InputBar.value = "";
      const props = this.props;

      const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      const apiSrc = `https://api.unsplash.com/search/photos?page=${getRandomInt(
        0,
        10
      )}&per_page=50&query=${inputValue}`;

      axios
        .get(apiSrc, {
          headers: {
            Authorization:
              "Client-ID b87f19604d590b80c86f2e8f33712c7da0d71de998f3ab6f4ec25641b6cc3f3b",
          },
        })
        .then(function(payload) {
          console.log(payload);
          props.fetchData(payload);
        });
    }
  };

  render() {
    console.log("INPUTBAR PROPS", this.props);
    return (
      <div className="class-name" style={this.inputStyle}>
        <input
          type="text"
          style={this.inputStyle}
          ref="InputBar"
          placeholder="Search"
          onKeyDown={event => this.handleSubmit(event)}
        />
      </div>
    );
  }
}
