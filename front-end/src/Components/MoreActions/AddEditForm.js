import React, { useState } from "react";
import handleAlert from "../../hadleAlert";
import "./AddEditForm.css";

const AddEditForm = ({ action, song, submitForm, closeForm }) => {
  const [songInfo, setSongInfo] = useState({
    ...song,
  });
  const [alert, setAlert] = useState("");
  const [successErrorMsg, setSuccessErrorMsg] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSongInfo({ ...songInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    const { title, album, artist, genre, releaseDate } = songInfo;
    e.preventDefault();
    if (!title || !album || !artist || !genre || !releaseDate) {
      setSuccessErrorMsg("error");
      handleAlert(setAlert, "Empty values not allowed");
    } else {
      submitForm(songInfo);
      setSuccessErrorMsg("success");
      handleAlert(
        setAlert,
        `Song succesfully ${action === "Edit" ? "edited" : "added"}`
      );
      setSongInfo({
        title: "",
        album: "",
        artist: "",
        genre: "",
        releaseDate: "",
      });
    }
  };

  return (
    <div className="form-overlay">
      <form className="more-form" onSubmit={handleSubmit}>
        <i
          className="close-form-button fas fa-times-circle"
          onClick={closeForm}
        ></i>
        <h4>{action} Song</h4>
        <div className="input-section">
          {alert && (
            <p
              className={`${
                alert && successErrorMsg === "success" ? "success" : "error"
              }`}
            >
              {alert}
            </p>
          )}
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
        </div>
      </form>
    </div>
  );
};

export default AddEditForm;
