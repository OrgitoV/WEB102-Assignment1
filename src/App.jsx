import React, { useState } from 'react';
import './App.css';
import bobaSpots from './locations.js';
import Borough from './Borough.jsx';
import ManhattanPic from './assets/borough_pictures/manhattan_picture.jpg';
import QueensPic from './assets/borough_pictures/queens_picture.jpg';
import BrooklynPic from './assets/borough_pictures/brooklyn_picture.jpg';
import BronxPic from './assets/borough_pictures/bronx_picture.jpg';

const title = "Boba Spots in the 4 Boroughs";

function WaveTitle() {
  return (
    <h1 className="pageTitle">
      {title.split("").map((char, i) => (
        <span className="wave-letter" style={{ animationDelay: `${i * 0.08}s` }} key={i}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}

const App = () => {
  const [selectedBorough, setSelectedBorough] = useState(null);

  const handleExplore = (borough) => {
    setSelectedBorough(borough);
  };

  return (
    <div className="App">
      <WaveTitle/>
      <div className="boroughs">
        <Borough name="Manhattan" image={ManhattanPic} onExplore={() => handleExplore("Manhattan")} />
        <Borough name="Queens" image={QueensPic} onExplore={() => handleExplore("Queens")} />
        <Borough name="Brooklyn" image={BrooklynPic} onExplore={() => handleExplore("Brooklyn")} />
        <Borough name="Bronx" image={BronxPic} onExplore={() => handleExplore("Bronx")} />
      </div>
      {selectedBorough && (
        <div className="bobaCards">
          {bobaSpots[selectedBorough].map((spot, idx) => (
            <div key={idx} className="location-card">
              <img src={spot.image} alt={`image of ${spot.name}`} />
              <div className = "location-info">
                <div id = "left-side-info">
                  <h2>{spot.name}</h2>
                  <p>{spot.address}</p>
                </div>
                <div id = "right-side-info">
                  <p>Rating: {spot.stars} ⭐</p>
                  <a onClick={() => window.open(spot.directions, "_blank")}>
                    <button className="directions-button">Directions</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App
