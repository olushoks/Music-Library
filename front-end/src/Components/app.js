import React, { useState, useEffect } from "react";
import axios from "axios";
import LandingPage from "./LandingPage/landingPage";
import DisplaySongs from "./DisplaySongs/DisplaySongs";
import MoreAction from "./MoreActions/moreActions";
import FilterSongs from "./SongFilter/songFilter";

function App() {
  const [songsData, setSongsData] = useState([]);
  const [currentlyDisplayed, setCurrentlyDisplayed] = useState([]);
  const [alert, setAlert] = useState("");
  // const [filteredTable, setFilteredTable] = useState([]);

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

  // CHECK IF SONGSDATA IS EMPTY AND DISPLAY INFO TO USER
  useEffect(() => {
    if (songsData.length === 0) {
      setAlert("No Songs in the Library at this time");
    }

    let clearInfo = setTimeout(() => {
      setAlert("");
    }, 3000);

    return () => clearTimeout(clearInfo);
  }, [songsData]);

  // CHECK IF FILTER RETURNS NO RESULT AND DISPLAY INFO TO USER
  useEffect(() => {
    if (currentlyDisplayed.length === 0) {
      setAlert("No Matching result. Please refine your search");
    }

    let clearInfo = setTimeout(() => {
      setAlert("");
    }, 3000);

    return () => clearTimeout(clearInfo);
  }, [currentlyDisplayed]);

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

  // // Filter Button Click
  const filterTable = (filterCriteria, filterText) => {
    // e.preventDefault();

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
        song[filterCriteria].includes(filterText)
      );
      setCurrentlyDisplayed(updatedSongsTable);
    }
  };

  return (
    <div>
      <LandingPage />
      {/* <MoreAction /> */}
      <FilterSongs selectOptions={songsData[0]} filterTable={filterTable} />
      <DisplaySongs
        songsData={currentlyDisplayed}
        deleteSong={deleteSong}
        alert={alert}
      />
    </div>
  );
}

export default App;
