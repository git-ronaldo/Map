import React, { useState } from 'react';

let DistanceCalculator = () => {
  let [city1, setCity1] = useState('');
  let [city2, setCity2] = useState('');
  let  [distance, setDistance] = useState(null);
  let  [error, setError] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  let  handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    let bingMapsApiKey = "At0f7dw9H62jf_IFEb15zjn0RSIiUJK6uKGX_68gjYEKw4MY8iRexyajfJD99BMc";
    let url = `https://dev.virtualearth.net/REST/v1/Routes/Driving?wp.0=${city1}&wp.1=${city2}&key=${bingMapsApiKey}`;

    try {
      let response = await fetch(url);
      let data = await response.json();

      if (data.resourceSets[0].resources.length > 0) {
        setDistance(data.resourceSets[0].resources[0].travelDistance);
        setError(null);
      } else {
        setDistance(null);
        setError("Unable to calculate distance.");
      }
    } catch (error) {
      setDistance(null);
      setError("Error fetching distance data.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", marginTop: "8px" }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter City 1"
          value={city1}
          onChange={(e) => setCity1(e.target.value)}
          style={{ marginBottom: "4px" }}
        />
        <input
          type="text"
          placeholder="Enter City 2"
          value={city2}
          onChange={(e) => setCity2(e.target.value)}
          style={{ marginBottom: "4px" }}
        />
        <button type="submit" style={{ backgroundColor: "blue", color: "white", marginBottom: "4px" }} disabled={isLoading}>
          {isLoading ? 'Calculating...' : 'Calculate Distance'}
        </button>
      </form>
      {distance && <p>Distance between {city1} and {city2}: {distance} km</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default DistanceCalculator;
