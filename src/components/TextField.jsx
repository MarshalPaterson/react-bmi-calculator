import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import TextField from "material-ui/TextField";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import { bindActionCreators } from "redux";
import * as BmiActions from "../actions/";
import * as types from '../constants/ActionTypes';

class TextFields extends Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount () {
  }
  handleChange(e) {
      if(this.props.type === 'height') {
        this.props.onHeight(e.target.value);
      } else  if(this.props.type === 'weight') {
        this.props.onWeight(e.target.value);
      }
  }
  render() {
    return (
      <div>
        <TextField type={this.props.type} hintText={this.props.hintText}  onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

TextFields.propTypes = {
}

const mapStateToProps = state => {
  return {
   ContactInfo: state.ContactInfo
  };
}

const mapDispatchToProps = dispatch => ({
  onHeight: (Height) => {
    dispatch({ type: 'Height', Height });
  },
  onWeight: (Weight) => {
    dispatch({ type: 'Weight', Weight });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TextFields)