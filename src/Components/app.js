import React from "react";
import LandingPage from "./LandingPage/landingPage";
import GetAllSongs from "./SongFetcher/songFetch";
import MoreAction from "./MoreActions/moreActions";

function App() {
  return (
    <div>
      <LandingPage />
      <MoreAction />
      <GetAllSongs />
    </div>
  );
}

export default App;
