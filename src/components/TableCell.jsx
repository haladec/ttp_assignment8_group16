import React, { Component } from "react";
import '../Style.css'

class TableCell extends Component {
    render() {
        console.log("table cell" + this.props.color)
        return(
            <td className="cell"
            onClick={(e) => e.target.className = this.props.color}
            >
            </td>
        );
    }
}

export default TableCell;