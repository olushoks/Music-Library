import React, { Component } from "react";
import "./moreActions.css";

class MoreAction extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getAction = (evt) => {
    // this.setState({ action: evt.target.value });
    const action = evt.target.value;
    // alert(`You want to ${action}`);
    console.log(`${action}`);
    this.displayActionForm(action);
  };

  displayActionForm = (action) => {
    if (action === "get") {
      return (
        <form>
          <label>Get Song By ID:</label>
          <input type="number"></input>
        </form>
      );
    }

    if (action === "add") {
      return null;
    }

    if (action === "edit") {
      return null;
    }

    if (action === "delete") {
      return null;
    }
  };

  // Radio Button Formm
  actionButtons = () => {
    return (
      <div>
        <button value="get" onClick={this.displayActionForm}>
          Get Song By ID
        </button>
        <button value="add" onClick={this.displayActionForm}>
          ADD NEW SONG
        </button>
        <button value="edit" onClick={this.displayActionForm}>
          EDIT SONG
        </button>
        <button value="delete" onClick={this.displayActionForm}>
          DELETE SONG
        </button>
      </div>
      /*
      <form onChange={this.getAction}>
        <label>
          <input type="radio" name="action" value="get"></input>
          Get Song By ID
        </label>
        <label>
          <input type="radio" name="action" value="add"></input>
          Add New Song
        </label>
        <label>
          <input type="radio" name="action" value="edit"></input>
          Edit Song Detail
        </label>
        <label>
          <input type="radio" name="action" value="delete"></input>
          Delete Song
        </label>
      </form>
      */
    );
  };

  render() {
    return <div>{this.actionButtons()}</div>;
  }
}

export default MoreAction;
