import React, { useState, useEffect } from "react";
import axios from "axios";
import LandingPage from "./LandingPage/landingPage";
import DisplaySongs from "./DisplaySongs/DisplaySongs";
import MoreAction from "./MoreActions/moreActions";
import FilterSongs from "./SongFilter/songFilter";

function App() {
  const [songsData, setSongsData] = useState([]);

  // FETCH SONG FROM API
  const fetch = async () => {
    await axios
      // .get("http://www.devcodecampmusiclibrary.com/api/music")
      .get("http://localhost:5000/api/songs/get")
      .then(({ data }) => {
        setSongsData(data);
      });
  };

  // DELETE SONG
  const deleteSong = (id) => {
    //REMOVE FROM UII
    const newSongsTable = songsData.filter((song) => song.id !== id);
    setSongsData(newSongsTable);

    // //REMOVE FROM DB
    axios
      .delete(`http://localhost:5000/api/songs/delete/${id}`)
      .then(({ data }) => {
        setSongsData(data);
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <LandingPage />
      {/* <MoreAction /> */}
      {/* <FilterSongs
        selectOptions={headers}
        onFilterChange={handleChangeFilterCriteria}
        onTextChange={handleChangeFilterText}
        filter={filterTable}
        clearFilter={clearFilter}
      /> */}
      <DisplaySongs songsData={songsData} deleteSong={deleteSong} />
    </div>
  );
}

export default App;
