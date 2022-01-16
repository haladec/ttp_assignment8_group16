import React, { Component } from "react";
import TableCell from "./TableCell";

class TableRow extends Component {
  render() {
    console.log("Table " + this.props.color)
    const columns = () =>
      this.props.columns.map((column, index) => {
        console.log(column.toString(10) + "" + index);
        return (
          <TableCell
            key={index.toString(10) + this.props.row}
            value={index.toString(10) + this.props.row}
            color={this.props.color}

          />
        );
      });
    return <tr>{columns()}</tr>;
  }
}
export default TableRow;