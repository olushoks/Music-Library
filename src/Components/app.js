import React from "react";
import LandingPage from "./LandingPage/landingPage";
import GetAllSongs from "./SongFetcher/songFetch";

function App() {
  return (
    <div>
      <LandingPage />
      <GetAllSongs />
    </div>
  );
}

export default App;
