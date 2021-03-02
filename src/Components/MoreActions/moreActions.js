import React, { Component } from "react";
import axios from "axios";
import ActionButton from "./moreActionButtons";
//import GenerateActionForm from "./moreActionForms";
import "./moreActions.css";

class MoreAction extends Component {
  constructor(props) {
    super(props);
    this.state = {
      action: "",
      properties: {},
      responseType: "",
      responseMessage: "",
      form: "",
    };
  }

  // Get HTTP Request to perform and store in state
  actionToPerform = (e) => {
    this.setState({ action: e.target.value });
    this.setState({ properties: {}, form: "" });
  };

  closeForm = () => {
    this.setState({ form: "close-form" });
  };

  // Condiitionally generate form based on action choosen by user
  generateActionForm = () => {
    let { action, form } = this.state;
    // String to hold dynamic styles for form
    const formStyle = `more-form ${form}`;

    if (action === "post") {
      return (
        <form className={formStyle} onSubmit={this.handleSubmit}>
          <p className={this.state.responseType}>
            {this.state.responseMessage}
          </p>
          <h4>
            Add Song
            <i
              className="close-form-button fas fa-times-circle"
              onClick={this.closeForm}
            ></i>
          </h4>

          <label className="more-label">
            Song Title
            <input
              className="more-input"
              type="text"
              name="title"
              onChange={this.handleChange}
            ></input>
          </label>
          <label className="more-label">
            Album
            <input
              className="more-input"
              type="text"
              name="album"
              onChange={this.handleChange}
            ></input>
          </label>
          <label className="more-label">
            Artist
            <input
              className="more-input"
              type="text"
              name="artist"
              onChange={this.handleChange}
            ></input>
          </label>
          <label className="more-label">
            Genre
            <input
              className="more-input"
              type="text"
              name="genre"
              onChange={this.handleChange}
            ></input>
          </label>
          <label className="more-label">
            Release Date
            <input
              className="more-input"
              type="text"
              name="releaseDate"
              onChange={this.handleChange}
            ></input>
          </label>
          <input className="submit" type="submit" value="submit"></input>
        </form>
      );
    }

    if (action === "put") {
      return (
        <form className={formStyle} onSubmit={this.handleSubmit}>
          <p className={this.state.responseType}>
            {this.state.responseMessage}
          </p>
          <h4>
            Edit Song
            <i
              className="close-form-button fas fa-times-circle"
              onClick={this.closeForm}
            ></i>
          </h4>
          <label className="more-label">
            Song ID
            <input
              className="more-input"
              type="text"
              name="id"
              onChange={this.handleChange}
            ></input>
          </label>
          <label className="more-label">
            Song Title
            <input
              className="more-input"
              type="text"
              name="title"
              onChange={this.handleChange}
            ></input>
          </label>
          <label className="more-label">
            Album
            <input
              className="more-input"
              type="text"
              name="album"
              onChange={this.handleChange}
            ></input>
          </label>
          <label className="more-label">
            Artist
            <input
              className="more-input"
              type="text"
              name="artist"
              onChange={this.handleChange}
            ></input>
          </label>
          <label className="more-label">
            Genre
            <input
              className="more-input"
              type="text"
              name="genre"
              onChange={this.handleChange}
            ></input>
          </label>
          <label className="more-label">
            Release Date
            <input
              className="more-input"
              type="text"
              name="releaseDate"
              onChange={this.handleChange}
            ></input>
          </label>
          <input className="submit" type="submit" value="submit"></input>
        </form>
      );
    }

    if (action === "delete") {
      return (
        <form className={formStyle} onSubmit={this.handleSubmit}>
          <p className={this.state.responseType}>
            {this.state.responseMessage}
          </p>
          <h4>
            Delete Song
            <i
              className="close-form-button fas fa-times-circle"
              onClick={this.closeForm}
            ></i>
          </h4>
          <label className="more-label">
            Enter Song ID
            <input
              className="more-input"
              type="text"
              name="id"
              onChange={this.handleChange}
            ></input>
          </label>
          <input className="submit" type="submit" value="submit"></input>
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
    let props = this.state.properties;
    const action = this.state.action;

    // Get all properties in states property object except ID
    const properties = {};
    for (let prop in props) {
      if (prop !== "id") {
        properties[prop] = props[prop];
      }
    }

    if (action === "post") {
      axios
        .post(`http://localhost:5000/api/songs/add`, properties)
        .then((res) => {
          const responseMessage = `Song has been succesfully added to database`;
          this.setState({ responseType: `success` });
          this.setState({ responseMessage });
        })
        .catch(() => {
          const responseMessage = `One or  more invalid input. Try Again!`;
          this.setState({ responseType: `error` });
          this.setState({ responseMessage });
        });
    }
    if (action === "put") {
      axios
        .put(`http://localhost:5000/api/songs/edit/${id}`, properties)
        .then((res) => {
          const responseMessage = `Song has been succesfully edited`;
          this.setState({ responseType: `success` });
          this.setState({ responseMessage });
        })
        .catch(() => {
          const responseMessage = `One or  more invalid input. Try Again!`;
          this.setState({ responseType: `error` });
          this.setState({ responseMessage });
        });
    }
    if (action === "delete") {
      axios
        .delete(`http://localhost:5000/api/songs/delete/${id}`)
        .then((res) => {
          const responseMessage = `Song has been succesfully deleted from the database`;
          this.setState({ responseType: `success` });
          this.setState({ responseMessage });
        })
        .catch(() => {
          const responseMessage = `Invalid input. Try Again!`;
          this.setState({ responseType: `error` });
          this.setState({ responseMessage });
        });
    }
    // CLEAR FORM
    props = {};
    this.setState({ properties: props });
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
