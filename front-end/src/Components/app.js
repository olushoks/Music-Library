import React, { useState, useEffect } from "react";
import axios from "axios";
import LandingPage from "./LandingPage/landingPage";
import DisplaySongs from "./DisplaySongs/DisplaySongs";
import AddEditForm from "./MoreActions/AddEditForm";
import FilterSongs from "./SongFilter/songFilter";
import handleAlert from "../hadleAlert";

function App() {
  const [songsData, setSongsData] = useState([]);
  const [currentlyDisplayed, setCurrentlyDisplayed] = useState(null);
  const [song, setSong] = useState(null);
  const [action, setAction] = useState("");
  const [showAddEditForm, setShowAddEditForm] = useState(false);
  const [alert, setAlert] = useState("");

  // FETCH SONG FROM API
  const fetch = async () => {
    await axios.get("http://localhost:5000/api/songs/get").then(({ data }) => {
      setSongsData(data);
      data.length === 0
        ? setCurrentlyDisplayed(null)
        : setCurrentlyDisplayed(data);
    });
  };

  // CALL FETCH ON INITIAL RENDER
  useEffect(() => {
    fetch();
  }, []);

  // CHECK IF FILTER RETURNS NO RESULT AND DISPLAY INFO TO USER
  useEffect(() => {
    if (!currentlyDisplayed) {
      handleAlert(setAlert, "No Songs in the Library at this time");
    }
  }, []);

  useEffect(() => {
    if (action && showAddEditForm) {
      let autoCloseForm = setTimeout(() => {
        setShowAddEditForm(false);
        setAction("");
        setSong(null);
      }, 4000);

      return () => clearTimeout(autoCloseForm);
    }
  }, [currentlyDisplayed]);

  // DELETE SONG
  const deleteSong = (id) => {
    //REMOVE FROM UII
    const newSongsTable = currentlyDisplayed.filter((song) => song.id !== id);
    setCurrentlyDisplayed(newSongsTable);

    //REMOVE FROM DB
    axios
      .delete(`http://localhost:5000/api/songs/delete/${id}`)
      .then(({ data }) => {
        setSongsData(data);
      });
  };

  const editSong = (songToEdit) => {
    setAction("Edit");
    setShowAddEditForm(true);
    setSong(songToEdit);
  };

  // DISPLAY FORM TO ADD SONG
  const addSong = () => {
    setAction("Add");
    setShowAddEditForm(true);
    setSong({
      id: songsData.length + 1,
      title: "",
      album: "",
      artist: "",
      genre: "",
      releaseDate: "",
    });
  };

  // SUBMIT FORM
  const submitForm = async (song) => {
    if (action === "Edit") {
      await axios
        .put(`http://localhost:5000/api/songs/edit/${song.id}`, song)
        .then(({ data }) => {
          setSongsData(data);

          setCurrentlyDisplayed((current) => {
            const updated = current.filter((el) => el.id !== song.id);
            setSong(song);
            return [song, ...updated];
          });
        });
    }

    if (action === "Add") {
      await axios
        .post(`http://localhost:5000/api/songs/add`, song)
        .then(({ data }) => {
          setSongsData(data);
          setCurrentlyDisplayed((currentTable) => {
            if (!currentTable) {
              return [song];
            } else if (currentTable.length > 0) {
              return [song, ...currentlyDisplayed];
            }
          });
        });
    }
  };

  // CLOSE ADD/EDIT FORM
  const closeForm = () => {
    setShowAddEditForm(false);
    setAction("");
  };

  // // FILTER CURRENTLY DISPLAYED TABLE
  const filterTable = (filterCriteria, filterText) => {
    filterText = filterText.toLowerCase();

    filterCriteria =
      filterCriteria === "Release Date" ? "releaseDate" : filterCriteria;

    if (filterCriteria && filterText) {
      const updatedSongsTable = songsData.filter((song) =>
        song[filterCriteria].toLowerCase().includes(filterText)
      );
      setCurrentlyDisplayed(updatedSongsTable);
      if (updatedSongsTable.length === 0) {
        handleAlert(setAlert, "No Matching result. Please refine your search");
      }
    }
  };

  // CLEAR ALL FILTER
  const clearFilter = () => {
    setCurrentlyDisplayed(songsData);
  };

  return (
    <div>
      <LandingPage />
      {showAddEditForm && (
        <AddEditForm
          action={action}
          closeForm={closeForm}
          song={song}
          submitForm={submitForm}
        />
      )}
      <FilterSongs
        selectOptions={songsData[0]}
        filterTable={filterTable}
        clearFilter={clearFilter}
      />
      <DisplaySongs
        songsData={currentlyDisplayed}
        deleteSong={deleteSong}
        editSong={editSong}
        addSong={addSong}
        alert={alert}
      />
    </div>
  );
}

export default App;
