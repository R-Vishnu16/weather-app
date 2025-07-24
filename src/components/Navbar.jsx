import React, { useState } from 'react';

export const Navbar = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState('');

  const handleClick = () => {
    if (searchCity.trim()) {
      onSearch(searchCity);
      setSearchCity('');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded px-2 py-3">
      <div className="container-fluid d-flex position-relative align-items-center">
        <h4 className="text-white mb-0">🌦️ Weather</h4>
        <div className="position-absolute top-50 start-50 translate-middle d-flex">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Enter city..."
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
          <button className="btn btn-outline-primary" 
          onClick={handleClick}>
            Search
          </button>
        </div>
        <div>
          <button className='btn btn-secondary me-5'>📌 Current Location</button>
        </div>
      </div>
    </nav>
  );
};
