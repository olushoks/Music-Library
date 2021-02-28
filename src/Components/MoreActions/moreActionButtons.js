import React from "react";
import "./moreActionButtons.css";

// MORE ACTION BUTTONS
function ActionButtons(props) {
  return (
    <div>
      <button value="get" onClick={props.actionToPerform}>
        Get Song By ID
      </button>
      <button value="post" onClick={props.actionToPerform}>
        Add New Song
      </button>
      <button value="put" onClick={props.actionToPerform}>
        Edit Song
      </button>
      <button value="delete" onClick={props.actionToPerform}>
        Delete Song
      </button>
    </div>
  );
}

export default ActionButtons;
