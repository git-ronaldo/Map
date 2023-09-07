import React, { useState } from 'react';
import DistanceCalculator from './DistanceCalculator'

function App() {
  let [distance, setDistance] = useState(null);
  let handleDistanceChange = (newDistance) => setDistance(newDistance);
  let [city1, setCity1] = useState('');
  let [city2, setCity2] = useState('');

  return (
    <div
      style={{
        backgroundImage: "url('https://images.designtrends.com/wp-content/uploads/2015/12/04062932/World-map-vectors1.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "md",
          margin: "0 auto",
          marginTop: "8px",
          backgroundColor: "white",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
          borderRadius: "md",
          padding: "8px",
        }}
      >
        <h1 style={{ color: "black", marginBottom: "8px" }}>Distance Between Two Cities</h1>
       <DistanceCalculator/>
        {distance !== null && (
          <p style={{ fontWeight: "bold", color: "#e53e3e", marginTop: "8px" }}>
            The distance between the {city1} and {city2} is {distance} km.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
