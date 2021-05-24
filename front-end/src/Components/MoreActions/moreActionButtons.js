import React from "react";
import "./moreActionButtons.css";

// MORE ACTION BUTTONS
function ActionButtons(props) {
  return (
    <div className="button-center">
      {/* <button className="button" value="get" onClick={props.actionToPerform}>
        Get Song By ID
      </button> */}
      <button className="button" value="post" onClick={props.actionToPerform}>
        Add New Song
      </button>
      <button className="button" value="put" onClick={props.actionToPerform}>
        Edit Song
      </button>
      <button className="button" value="delete" onClick={props.actionToPerform}>
        Delete Song
      </button>
    </div>
  );
}

export default ActionButtons;