import React, { useState } from "react";
import "./moreActionForms.css";

const AddEditForm = ({
  response,
  // handleChange,
  // handleSubmit,
  action,
  songToEdit,
  submitForm,
  closeForm,
}) => {
  const [songInfo, setSongInfo] = useState({
    ...songToEdit,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSongInfo({ ...songInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(songInfo);
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <p className="">{response}</p>
      <h4>
        {action} Song
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
          value={songInfo.title}
          onChange={handleChange}
        ></input>
      </label>
      <label className="more-label">
        Album
        <input
          className="more-input"
          type="text"
          name="album"
          value={songInfo.album}
          onChange={handleChange}
        ></input>
      </label>
      <label className="more-label">
        Artist
        <input
          className="more-input"
          type="text"
          name="artist"
          value={songInfo.artist}
          onChange={handleChange}
        ></input>
      </label>
      <label className="more-label">
        Genre
        <input
          className="more-input"
          type="text"
          name="genre"
          value={songInfo.genre}
          onChange={handleChange}
        ></input>
      </label>
      <label className="more-label">
        Release Date
        <input
          className="more-input"
          type="text"
          name="releaseDate"
          value={songInfo.releaseDate}
          onChange={handleChange}
        ></input>
      </label>
      <input className="submit" type="submit" value="submit"></input>
    </form>
  );
};

export default AddEditForm;
