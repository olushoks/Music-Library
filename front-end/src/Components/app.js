import React, { useState, useEffect } from "react";
import axios from "axios";
import LandingPage from "./LandingPage/landingPage";
import DisplaySongs from "./DisplaySongs/DisplaySongs";
import AddEditForm from "./MoreActions/AddEditForm";
import FilterSongs from "./SongFilter/songFilter";

function App() {
  const [songsData, setSongsData] = useState([]);
  const [currentlyDisplayed, setCurrentlyDisplayed] = useState([]);
  const [action, setAction] = useState(false);
  const [alert, setAlert] = useState("");
  const [songToEdit, setSongToEdit] = useState(null);

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

  const handleAlert = (msg) => {
    setAlert(msg);

    let clearInfo = setTimeout(() => {
      setAlert("");
    }, 5000);

    return () => clearTimeout(clearInfo);
  };

  // CHECK IF FILTER RETURNS NO RESULT AND DISPLAY INFO TO USER
  useEffect(() => {
    if (currentlyDisplayed.length === 0) {
      handleAlert("No Matching result. Please refine your search");
    }
  }, [currentlyDisplayed]);

  // CHECK IF SONGSDATA IS EMPTY AND DISPLAY INFO TO USER
  useEffect(() => {
    if (songsData.length === 0) {
      handleAlert("No Songs in the Library at this time.");
    }
  }, [songsData]);

  // DELETE SONG
  const deleteSong = (id) => {
    //REMOVE FROM UII
    const newSongsTable = songsData.filter((song) => song.id !== id);
    setSongsData(newSongsTable);

    //REMOVE FROM DB
    axios
      .delete(`http://localhost:5000/api/songs/delete/${id}`)
      .then(({ data }) => {
        setSongsData(data);
      });
  };

  // DISPLAY EDIT FORM
  const editSong = (song) => {
    setAction("Edit");
    setSongToEdit(song);
  };

  // SUBMIT FORM
  const submitForm = (song) => {
    if (action === "Edit") {
      axios
        .put(`http://localhost:5000/api/songs/edit/${song.id}`, song)
        .then((res) => {
          const responseMessage = `Song has been succesfully edited`;
        })
        .catch(() => {
          const responseMessage = `One or  more invalid input. Try Again!`;
        });
    }
  };

  // CLOSE ADD/EDIT FORM
  const closeForm = () => {
    setAction(false);
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
      {action && (
        <AddEditForm
          action={action}
          closeForm={closeForm}
          songToEdit={songToEdit}
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
        alert={alert}
      />
    </div>
  );
}

export default App;
