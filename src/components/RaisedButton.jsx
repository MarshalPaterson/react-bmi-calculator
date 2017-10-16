import React from "react";
import ReactDOM from "react-dom";
import RaisedButtons from "material-ui/RaisedButton";

export default class RaisedButton extends React.Component {
  render() {
    return (
      <div>
        <RaisedButtons className="fullwidth" label={this.props.label}  primary={this.props.primary} fullWidth={this.props.fullWidth}  />
      </div>
    );
  }
}
