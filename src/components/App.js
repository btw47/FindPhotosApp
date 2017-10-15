import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import InputBar from "./InputBar";
// import Image from "./Image";
import Gallery from "./Gallery";
import * as actions from "../actions";
import "./css/style.css";

class App extends Component {
  render() {
    console.log("APP PROPS", this.props);
    return (
      <div className="App">
        <h4 style={{ "text-align": "center" }}>Find your image here!</h4>
        <InputBar fetchData={this.props.fetchData} />
        {/* <Image imageList={this.props.state.fetchData} /> */}
        <Gallery imageList={this.props.state.fetchData} />
      </div>
    );
  }
}

const MapStateToProps = state => ({
  state: state,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(MapStateToProps, mapDispatchToProps)(App);
