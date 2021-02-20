import React from "react";
// import "bootsrap/dist/css/bootstrap.css";
// import { Router } from "@reach/router";
import "./landingPage.css";

function LandingPage() {
  /*
  const landing = (
    <div className="landing">
      <div className="landing-text-block">
        <h1>SONGSPEDIA</h1>
        <h3>...you search, ...we find, ...its all about music!</h3>
        <button className="btn" onClick={() => loadHome()}>
          Continue
        </button>
      </div>
    </div>
  );

  function loadHome() {
    return (
      <header className="home">
        <div className="home-text-block">
          <h1>SONGSPEDIA</h1>
          <h3>...you search, ...we find, ...its all about music!</h3>
        </div>
      </header>
    );
  }
  */

  const landing = (
    <header className="home">
      <div className="home-text-block">
        <h1>SONGSPEDIA</h1>
        <h3>...you search, ...we find, ...its all about music!</h3>
      </div>
    </header>
  );
  return landing;
}

export default LandingPage;
