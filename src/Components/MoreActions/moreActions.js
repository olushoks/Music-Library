import React, { Component } from "react";
import axios from "axios";
import "./moreActions.css";

class MoreAction extends Component {
  constructor(props) {
    super(props);
    this.state = { action: "", properties: {} };
    // this.state = {
    //   action: "",
    //   properties: {
    //     id: "",
    //     title: "",
    //     album: "",
    //     artist: "",
    //     genre: "",
    //     releaseDate: "",
    //   },
    // };
  }

  // MORE ACTION BUTTONS
  actionButtons = () => {
    return (
      <div>
        <button value="get" onClick={this.actionToPerform}>
          Get Song By ID
        </button>
        <button value="post" onClick={this.actionToPerform}>
          Add New Song
        </button>
        <button value="put" onClick={this.actionToPerform}>
          Edit Song
        </button>
        <button value="delete" onClick={this.actionToPerform}>
          Delete Song
        </button>
      </div>
    );
  };

  // Get HTTP Request to perform and store in state
  actionToPerform = (e) => {
    this.setState({ action: e.target.value });
  };

  // Condiitionally generate form based on action choosen by user
  generateActionForm = () => {
    let { action } = this.state;
    if (action === "get") {
      return (
        <form>
          <label>Enter Song ID</label>
          <input type="text" name="id"></input>
          <input type="submit" value="submit"></input>
        </form>
      );
    }

    if (action === "post") {
      return (
        <form>
          <label>
            Song Title:
            <input type="text" name="title"></input>
          </label>
          <label>
            Album:
            <input type="text" name="album"></input>
          </label>
          <label>
            Artist:
            <input type="text" name="artist"></input>
          </label>
          <label>
            Genre:
            <input type="text" name="genre"></input>
          </label>
          <label>Release Date:</label>
          <input type="text" name="releaseDate"></input>
          <input type="submit" value="submit"></input>
        </form>
      );
    }

    if (action === "put") {
      return (
        <form>
          <label>
            Song ID:
            <input type="text" name="title"></input>
          </label>
          <label>
            Song Title:
            <input type="text" name="title"></input>
          </label>
          <label>
            Album:
            <input type="text" name="album"></input>
          </label>
          <label>
            Artist:
            <input type="text" name="artist"></input>
          </label>
          <label>
            Genre:
            <input type="text" name="genre"></input>
          </label>
          <label>
            Release Date:
            <input type="text" name="releaseDate"></input>
            <input type="submit" value="submit"></input>
          </label>
        </form>
      );
    }

    if (action === "delete") {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>Enter Song ID</label>
          <input type="text" name="id" onChange={this.handleChange}></input>
          <input type="submit" value="submit"></input>
        </form>
      );
    }
  };

  handleChange = (e) => {
    // assign property name and value to state properties object
    let property = e.target.name;
    let propertyValue = e.target.value;
    let properties = {};
    properties[property] = propertyValue;
    this.setState({ properties });
    // console.log(this.state.properties);
    // this.setState({ properties: { [property]: propertyValue } });
    // console.log(this.state.properties);
    // console.log(propertyValue);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.action === "get") {
      axios.delete(`http://localhost:3000/api/songs/delete/{}`);
    }
    if (this.state.action === "post") {
    }
    if (this.state.action === "put") {
    }
    if (this.state.action === "delete") {
      console.log(this.state.properties.id);
      console.log(this.state.properties);
    }
  };

  render() {
    return (
      <div>
        {this.actionButtons()}
        {this.generateActionForm()}
      </div>
    );
  }
}

export default MoreAction;
