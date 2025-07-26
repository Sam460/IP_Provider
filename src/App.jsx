// App.js

import { useEffect, useState } from 'react';
import Axios from 'axios';
import Map from './components/Map';
import './App.css';

function App() {
  // Initial state
  const [ipDetails, setIpDetails] = useState([]);
  const [lat, setLat] = useState(22.5726); // Default: Kolkata
  const [lon, setLon] = useState(88.3832);

  // Get IP and location info on mount
  useEffect(() => {
    Axios.get('https://ipapi.co/json/')
      .then((res) => {
        setIpDetails(res.data);
        setLat(res.data.latitude);
        setLon(res.data.longitude);
      })
      .catch((err) => {
        console.error('Failed to fetch IP details:', err);
      });
  }, []);

  return (
    <>
      <h1 className="heading">IP Address Finder</h1>

      <div className="App">
        <div className="left">
          <h2>What is my IPv4 address?</h2>
          <h1 id="ip">{ipDetails.ip}</h1>

          <h2>Approximate location:</h2>
          <p>
            {ipDetails.city}, {ipDetails.region}, {ipDetails.country_name}.
          </p>

          <h2>Internet Service Provider (ISP):</h2>
          <p>{ipDetails.org}</p>
        </div>

        <Map lat={lat} lon={lon} />
      </div>
    </>
  );
}

export default App;
