import React, { useState, useEffect } from "react";
import axios from "axios";
import LandingPage from "./LandingPage/landingPage";
import DisplaySongs from "./DisplaySongs/DisplaySongs";
import AddEditForm from "./MoreActions/AddEditForm";
import FilterSongs from "./SongFilter/songFilter";
import handleAlert from "../hadleAlert";

function App() {
  const [songsData, setSongsData] = useState([]);
  const [currentlyDisplayed, setCurrentlyDisplayed] = useState([]);
  const [song, setSong] = useState(null);
  const [action, setAction] = useState(false);
  const [showAddEditForm, setShowAddEditForm] = useState(false);
  const [alert, setAlert] = useState("");

  // FETCH SONG FROM API
  const fetch = async () => {
    await axios
      // .get("http://www.devcodecampmusiclibrary.com/api/music")
      .get("http://localhost:5000/api/songs/get")
      .then(({ data }) => {
        setSongsData(data);
        setCurrentlyDisplayed(data);
      });
  };

  // CALL FETCH ON INITIAL RENDER
  useEffect(() => {
    fetch();
  }, []);

  // CHECK IF FILTER RETURNS NO RESULT AND DISPLAY INFO TO USER
  useEffect(() => {
    if (currentlyDisplayed.length === 0) {
      handleAlert(setAlert, "No Matching result. Please refine your search");
    }
  }, [currentlyDisplayed]);

  // CHECK IF SONGSDATA IS EMPTY AND DISPLAY INFO TO USER
  useEffect(() => {
    if (songsData.length === 0) {
      handleAlert(setAlert, "No Songs in the Library at this time.");
    }
  }, [songsData]);

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
  const addSong = (song) => {
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

            return [song, ...updated];
          });
        });

      // setTimeout(() => {
      //   setShowAddEditForm(false);
      // }, 4000);
    }

    if (action === "Add") {
      await axios
        .post(`http://localhost:5000/api/songs/add`, song)
        .then(({ data }) => {
          setSongsData(data);

          setCurrentlyDisplayed([song, ...currentlyDisplayed]);
        });

      // setTimeout(() => {
      //   setShowAddEditForm(false);
      // }, 4000);
    }
  };

  // CLOSE ADD/EDIT FORM
  const closeForm = () => {
    setShowAddEditForm(false);
  };
  // // FILTER CURRENTLY DISPLAYED TABLE
  const filterTable = (filterCriteria, filterText) => {
    filterText = filterText.toLowerCase();

    filterCriteria =
      filterCriteria === "Release Date" ? "releaseDate" : filterCriteria;

    if (filterCriteria === undefined) {
      console.log("Choose an option to filter by!");
    }
    if (filterText === undefined) {
      console.log("Enter some text!");
    }

    if (filterCriteria && filterText) {
      const updatedSongsTable = songsData.filter((song) =>
        song[filterCriteria].toLowerCase().includes(filterText)
      );
      setCurrentlyDisplayed(updatedSongsTable);
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
