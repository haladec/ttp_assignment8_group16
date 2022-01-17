import React, { Component } from "react";
import Table from "./components/Table";
import {  Button, NavDropdown} from "react-bootstrap";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white",
      rows: [0],
      columns: [0],
      isDragged: false,
    };
    this.handleAddRow = this.handleAddRow.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.currentColor = React.createRef();

  }

 
  handleAddRow = () => {
    this.setState((state) => {
      const rows = state.rows.concat(state.rows.length);
      return {
        color: state.color,
        rows: rows,
        columns: state.columns,
        
      };
    });
  };

  handleAddColumn = () => {
    this.setState((state) => {
      const columns = state.columns.concat(state.columns.length);
      return {
        color: state.color,
        rows: state.rows,
        columns: columns,
      };
    });
  }

  handleRemoveRow = () => {
    this.setState((state) => {
      const rows = state.rows.slice(0, state.rows.length - 1);
      return {
        color: state.color,
        rows: rows,
        columns: state.columns,
      };
    });
  }

  handleRemoveColumn = () => {
    this.setState((state) => {
      const columns = state.columns.slice(0, state.columns.length - 1);
      return {
        color: state.color,
        rows: state.rows,
        columns: columns,
      };
    });
  };

  handleChangeColor = (color) => {
    this.setState({color: color});
  };

  
  componentDidMount() {
    
  }


  render() {
    return (
      <>
        <header className="App-header">
          <Button className="btn-color" onClick={this.handleAddColumn}>Add Column</Button>
          <Button className="btn-color" onClick={this.handleRemoveColumn}>Remove Column</Button>    
          <Button className="btn-color" onClick={this.handleAddRow}>Add Row</Button>
          <Button className="btn-color" onClick={this.handleRemoveRow}>Remove Row</Button>

          <NavDropdown title="Dropdown" id="nav-dropdown" onSelect={this.handleChangeColor}>
            <NavDropdown.Item eventKey="blue">Blue</NavDropdown.Item>
            <NavDropdown.Item eventKey="red">Red</NavDropdown.Item>
            <NavDropdown.Item eventKey="white">white</NavDropdown.Item>
          </NavDropdown>
        </header>
        <div className="table">
          <Table color={this.state.color} rows={this.state.rows} columns={this.state.columns} />
        </div>
      </>
    );
  }
}

export default App;