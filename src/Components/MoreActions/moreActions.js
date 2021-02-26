import React, { Component } from "react";
import "./moreActions.css";

class MoreAction extends Component {
  constructor(props) {
    super(props);
    this.state = { action: undefined };
  }

  getAction = (evt) => {
    this.setState({ action: evt.target.value });
    alert(`You want to ${this.state.action}`);
    console.log(`${evt.target.value}`);
  };

  render() {
    return (
      <div>
        <form onChange={this.getAction}>
          <label>
            Get Song By ID
            <input
              type="radio"
              name="action"
              value="get"
              //   onClick={this.getAction}
            ></input>
          </label>
          <label>
            Add New Song
            <input
              type="radio"
              name="action"
              value="add"
              //   onClick={this.getAction}
            ></input>
          </label>
          <label>
            Edit Song Detail
            <input
              type="radio"
              name="action"
              value="edit"
              //   onClick={this.getAction}
            ></input>
          </label>
          <label>
            Delete Song
            <input
              type="radio"
              name="action"
              value="delete"
              //   onClick={this.getAction}
            ></input>
          </label>
        </form>
      </div>
    );
  }
}

export default MoreAction;
