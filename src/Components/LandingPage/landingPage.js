import React from "react";
import "./landingPage.css";

function LandingPage() {
  const landing = (
    <header className="home">
      <div className="home-text-block">
        <h1>
          <i className="fas fa-music music-icon"></i>SONGSPEDIA
          <i className="fas fa-music music-icon"></i>
        </h1>
        <h3>...you search, ...we find, ...its all about music!</h3>
      </div>
    </header>
  );
  return landing;
}

export default LandingPage;
