import React from "react";
import "./moreActionForms.css";

function GenerateActionForm(props) {
  let action = props.action;
  if (action === "get") {
    return <GetSongByID />;
    // GetSongByID();
  }
  if (action === "post") {
    return <AddSong />;
    // AddSong();
  }
  if (action === "put") {
    return <EditSong />;
    // EditSong();
  }
  if (action === "delete") {
    return <DeleteSong />;
    // DeleteSong();
  }
}

function GetSongByID(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Enter Song ID:
        <input type="text" name="id" onChange={props.handleChange}></input>
      </label>
      <input type="submit" value="submit"></input>
    </form>
  );
}

function AddSong(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Song Title:
        <input type="text" name="title" onChange={props.handleChange}></input>
      </label>
      <label>
        Album:
        <input type="text" name="album" onChange={props.handleChange}></input>
      </label>
      <label>
        Artist:
        <input type="text" name="artist" onChange={props.handleChange}></input>
      </label>
      <label>
        Genre:
        <input type="text" name="genre" onChange={props.handleChange}></input>
      </label>
      <label>
        Release Date:
        <input
          type="text"
          name="releaseDate"
          onChange={props.handleChange}
        ></input>
      </label>
      <input type="submit" value="submit"></input>
    </form>
  );
}

function EditSong(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Song ID:
        <input type="text" name="id" onChange={props.handleChange}></input>
      </label>
      <label>
        Song Title:
        <input type="text" name="title" onChange={props.handleChange}></input>
      </label>
      <label>
        Album:
        <input type="text" name="album" onChange={props.handleChange}></input>
      </label>
      <label>
        Artist:
        <input type="text" name="artist" onChange={props.handleChange}></input>
      </label>
      <label>
        Genre:
        <input type="text" name="genre" onChange={props.handleChange}></input>
      </label>
      <label>
        Release Date:
        <input
          type="text"
          name="releaseDate"
          onChange={props.handleChange}
        ></input>
      </label>
      <input type="submit" value="submit"></input>
    </form>
  );
}

function DeleteSong(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>
        Enter Song ID
        <input type="text" name="id" onChange={props.handleChange}></input>
      </label>
      <input type="submit" value="submit"></input>
    </form>
  );
}

export default GenerateActionForm;
