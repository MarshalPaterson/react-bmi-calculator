import React from "react";
import { connect } from "react-redux";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

class DialogBox extends React.Component {
  state = {
    open: false,
    selected: [-1]
  };

  handleOpen = () => {
    this.setState({ open: true });
    this.calcBmi(this.props.ContactInfo.Height, this.props.ContactInfo.Weight);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  calcBmi = (height, weight) => {
    debugger;
    let h = height / 100;
    let bmi = (weight / (h * h)).toFixed(2);
    this.props.onBmi(bmi);

    if (bmi <= 18.5) {
      this.state.selected[0] = 0;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      this.state.selected[0] = 1;
    } else if (bmi >= 25 && bmi <= 29.9) {
      this.state.selected[0] = 2;
    } else if (bmi >= 30) {
      this.state.selected[0] = 3;
    }
  };

  isSelected = index => {
    try {
      return this.state.selected.indexOf(index) !== -1;
    } catch (e) {}
  };

  handleRowSelection = selectedRows => {
    this.setState({
      selected: selectedRows
    });
  };

  render() {
    const actions = [
      <FlatButton label="OK" primary={true} onClick={this.handleClose} />
    ];

    return (
      <div>
        <RaisedButton
          label="Calculate"
          primary={true}
          fullWidth={true}
          onClick={this.handleOpen}
        />
        <Dialog
          title="The results"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <h2 className="noPadding">{this.props.ContactInfo.Bmi}</h2>
          <div>
            These are the same for men and women of all ages and body types:
          </div>
          <Table onRowSelection={this.handleRowSelection}>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>BMI</TableHeaderColumn>
                <TableHeaderColumn> Weight Status</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow selected={this.isSelected(0)}>
                <TableRowColumn>Below 18.5</TableRowColumn>
                <TableRowColumn>Underweight</TableRowColumn>
              </TableRow>
              <TableRow selected={this.isSelected(1)}>
                <TableRowColumn>18.5 – 24.9</TableRowColumn>
                <TableRowColumn>Normal</TableRowColumn>
              </TableRow>
              <TableRow selected={this.isSelected(2)}>
                <TableRowColumn>25.0 – 29.9</TableRowColumn>
                <TableRowColumn>Overweight</TableRowColumn>
              </TableRow>
              <TableRow selected={this.isSelected(3)}>
                <TableRowColumn>30.0 and above</TableRowColumn>
                <TableRowColumn>Obese</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ContactInfo: state.ContactInfo
  };
};

const mapDispatchToProps = dispatch => ({
  onHeight: Height => {
    dispatch({ type: "Height", Height });
  },
  onWeight: Weight => {
    dispatch({ type: "Weight", Weight });
  },
  onBmi: Bmi => {
    dispatch({ type: "Bmi", Bmi });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox);
