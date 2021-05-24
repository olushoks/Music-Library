import React from "react";
import "./moreActionForms.css";

function AddSong({ response, handleChange, handleSubmit, closeForm }) {
  return (
    <form className="" onSubmit={handleSubmit}>
      <p className="">{response}</p>
      <h4>
        Add Song
        <i
          className="close-form-button fas fa-times-circle"
          onClick={closeForm}
        ></i>
      </h4>

      <label className="more-label">
        Song Title
        <input
          className="more-input"
          type="text"
          name="title"
          onChange={handleChange}
        ></input>
      </label>
      <label className="more-label">
        Album
        <input
          className="more-input"
          type="text"
          name="album"
          onChange={handleChange}
        ></input>
      </label>
      <label className="more-label">
        Artist
        <input
          className="more-input"
          type="text"
          name="artist"
          onChange={handleChange}
        ></input>
      </label>
      <label className="more-label">
        Genre
        <input
          className="more-input"
          type="text"
          name="genre"
          onChange={handleChange}
        ></input>
      </label>
      <label className="more-label">
        Release Date
        <input
          className="more-input"
          type="text"
          name="releaseDate"
          onChange={handleChange}
        ></input>
      </label>
      <input className="submit" type="submit" value="submit"></input>
    </form>
  );
}

function EditSong({ response, handleChange, handleSubmit, closeForm }) {
  return (
    <form className="" onSubmit={handleSubmit}>
      <p className="">{response}</p>
      <h4>
        Edit Song
        <i
          className="close-form-button fas fa-times-circle"
          onClick={closeForm}
        ></i>
      </h4>
      <label className="more-label">
        Song ID
        <input
          className="more-input"
          type="text"
          name="id"
          onChange={handleChange}
        ></input>
      </label>
      <label className="more-label">
        Song Title
        <input
          className="more-input"
          type="text"
          name="title"
          onChange={handleChange}
        ></input>
      </label>
      <label className="more-label">
        Album
        <input
          className="more-input"
          type="text"
          name="album"
          onChange={handleChange}
        ></input>
      </label>
      <label className="more-label">
        Artist
        <input
          className="more-input"
          type="text"
          name="artist"
          onChange={handleChange}
        ></input>
      </label>
      <label className="more-label">
        Genre
        <input
          className="more-input"
          type="text"
          name="genre"
          onChange={handleChange}
        ></input>
      </label>
      <label className="more-label">
        Release Date
        <input
          className="more-input"
          type="text"
          name="releaseDate"
          onChange={handleChange}
        ></input>
      </label>
      <input className="submit" type="submit" value="submit"></input>
    </form>
  );
}

export { AddSong, EditSong };
