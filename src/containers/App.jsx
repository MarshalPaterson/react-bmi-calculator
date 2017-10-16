import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import theme from "../material_ui_raw_theme_file";
import * as BmiActions from "../actions/";
import RaisedButton from "../components/RaisedButton";
import TextField from "../components/TextField";
import AppBar from "../components/AppBar";
import RadioButtonGroup from "../components/RadioButtonGroup";
import DialogBox from "../components/DialogBox";

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={theme}>
          <div>
            <AppBar />
            <div className="container">
              <p>
                Body mass index (BMI) is a guide to help people estimate their
                total body fat as a proportion of their total body weight.
              </p>
              <RadioButtonGroup />
              <TextField hintText="Height (cm)" type="height" />
              <TextField hintText="Weight (kg)" type="weight" />
              <DialogBox />
            </div>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
