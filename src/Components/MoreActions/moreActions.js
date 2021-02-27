import React, { Component } from "react";
import axios from "axios";
import ActionButton from "./moreActionButtons";
import "./moreActions.css";

class MoreAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "",
      properties: {},
    };
  }

  // Get HTTP Request to perform and store in state
  actionToPerform = (e) => {
    this.setState({ action: e.target.value });
  };

  // Condiitionally generate form based on action choosen by user
  generateActionForm = () => {
    let { action } = this.state;
    if (action === "get") {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Song ID:
            <input type="text" name="id" onChange={this.handleChange}></input>
          </label>
          <input type="submit" value="submit"></input>
        </form>
      );
    }

    if (action === "post") {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Song Title:
            <input
              type="text"
              name="title"
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Album:
            <input
              type="text"
              name="album"
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Artist:
            <input
              type="text"
              name="artist"
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Genre:
            <input
              type="text"
              name="genre"
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Release Date:
            <input
              type="text"
              name="releaseDate"
              onChange={this.handleChange}
            ></input>
          </label>
          <input type="submit" value="submit"></input>
        </form>
      );
    }

    if (action === "put") {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Song ID:
            <input type="text" name="id" onChange={this.handleChange}></input>
          </label>
          <label>
            Song Title:
            <input
              type="text"
              name="title"
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Album:
            <input
              type="text"
              name="album"
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Artist:
            <input
              type="text"
              name="artist"
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Genre:
            <input
              type="text"
              name="genre"
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            Release Date:
            <input
              type="text"
              name="releaseDate"
              onChange={this.handleChange}
            ></input>
          </label>
          <input type="submit" value="submit"></input>
        </form>
      );
    }

    if (action === "delete") {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter Song ID
            <input type="text" name="id" onChange={this.handleChange}></input>
          </label>
          <input type="submit" value="submit"></input>
        </form>
      );
    }
  };

  handleChange = (e) => {
    // assign property name and value to state properties object
    let properties = this.state.properties;
    properties[e.target.name] = e.target.value;

    this.setState({ properties });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.state.properties;
    const props = this.state.properties;
    const action = this.state.action;

    // Get all properties in states property object except ID
    const properties = {};
    for (let prop in props) {
      if (prop !== "id") {
        properties[prop] = props[prop];
      }
    }
    if (action === "get") {
      axios
        .get(`http://localhost:5000/api/songs/get/${id}`)
        .then((res) => {
          const response = res.data;
          console.log(response);
          console.log(res);
        })
        .catch(`Error!`);
      // console.log(this.state);
    }
    if (action === "post") {
      axios
        .post(`http://localhost:5000/api/songs/add`, properties)
        .then((res) => {
          const response = res.data;
          console.log(response);
          console.log(res);
        })
        .catch(`Error!`);
      console.log(this.state);
    }
    if (action === "put") {
      axios
        .put(`http://localhost:5000/api/songs/edit/${id}`, properties)
        .then((res) => {
          // const response = res.data;
          // console.log(response);
          console.log(properties);
        })
        .catch(`Error!`);
      console.log(this.state);
    }
    if (action === "delete") {
      axios
        .delete(`http://localhost:5000/api/songs/delete/${id}`)
        .then((res) => {
          const response = res.data;
          console.log(response);
          console.log(res);
        })
        .catch(`Error!`);
      console.log(this.state);
    }
  };

  render() {
    return (
      <div>
        <ActionButton actionToPerform={this.actionToPerform} />
        {this.generateActionForm()}
      </div>
    );
  }
}

export default MoreAction;
