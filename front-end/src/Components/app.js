import React from "react";
import LandingPage from "./LandingPage/landingPage";
import GetAllSongs from "./SongFetcher/songFetch";
import MoreAction from "./MoreActions/moreActions";
import FilterSongs from "./SongFilter/songFilter";

function App() {
  return (
    <div>
      <LandingPage />
      <MoreAction />
      {/* <FilterSongs
        selectOptions={headers}
        onFilterChange={handleChangeFilterCriteria}
        onTextChange={handleChangeFilterText}
        filter={filterTable}
        clearFilter={clearFilter}
      /> */}
      <GetAllSongs />
    </div>
  );
}

export default App;
