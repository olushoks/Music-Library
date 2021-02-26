import React, { Component } from "react";
import "./moreActions.css";

class MoreAction extends Component {
  constructor(props) {
    super(props);
    this.state = { action: "" };
  }

  actionToPerform = (e) => {
    this.setState({ action: e.target.value });
  };

  // Generate form based on action choose by user
  generateActionForm = () => {
    let { action } = this.state;
    if (action === "get") {
      console.log(`Clicked ${action}`);
      console.log(`Clicked ${this.state.action}`);
      return (
        <form>
          <label>Enter Song ID</label>
          <input type="text" name="id"></input>
        </form>
      );
    }

    if (action === "add") {
      console.log(`Clicked ${action}`);
      console.log(`Clicked ${this.state.action}`);
      return <form></form>;
    }

    if (action === "edit") {
      console.log(`Clicked ${action}`);
      console.log(`Clicked ${this.state.action}`);
      return null;
    }

    if (action === "delete") {
      console.log(`Clicked ${action}`);
      console.log(`Clicked ${this.state.action}`);
      return null;
    }
  };

  // MORE ACTION BUTTONS
  actionButtons = () => {
    return (
      <div>
        <button value="get" onClick={this.actionToPerform}>
          Get Song By ID
        </button>
        <button value="add" onClick={this.actionToPerform}>
          ADD NEW SONG
        </button>
        <button value="edit" onClick={this.actionToPerform}>
          EDIT SONG
        </button>
        <button value="delete" onClick={this.actionToPerform}>
          DELETE SONG
        </button>
      </div>
    );
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
