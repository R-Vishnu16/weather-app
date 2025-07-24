import React from 'react';

const TodayWeather = ({ data }) => {
  if (!data || !data.main || !data.weather || !data.sys) return null;

  const currentDate = new Date().toDateString();
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (<>
    <div className="container mt-4">
      <div className="card p-4 bg-light border-1 shadow-sm"
      style={{width:"423px"}}>
        <div className="d-flex align-items-center mb-3">
          <h5 className="fw-bold pe-5">📍 {data.name}, {data.sys.country}</h5>
          <span>🗓️ {currentDate}</span>
        </div>

        <div className="d-flex  align-items-center mb-3 ">
          <h1 className="display-4 fw-semibold pe-5">{Math.round(data.main.temp)}°C</h1>

        <img
            src={iconUrl}
            alt="img"
            style={{
                filter: 'drop-shadow(0 0 2px black)',  
                width: '100px',
                height: '100px',
            }}
        />
        </div>
        <div>
            <p className='h5'>{data.weather[0].description} </p>
        </div>
        <div className="mb-2"><strong>Feels like:</strong> {Math.round(data.main.feels_like)}°C</div>
        <div className="mb-2">
          <strong>High:</strong> {Math.round(data.main.temp_max)}°C 🔺 &nbsp;&nbsp;
          <strong>Low:</strong> {Math.round(data.main.temp_min)}°C 🔻
        </div>

      </div>
    </div>

    <div className="container mt-2 d-flex">
      <div className="card px-2 pt-3 bg-light border-1 shadow-sm me-2" 
      style={{width:"136px"}}>
        <p>💧Humidity</p>
        <p className='ps-4'>{data.main.humidity}%</p>
        </div>
        <div className="card ps-4 pt-3 bg-light border-1 shadow-sm me-2" 
        style={{width:"136px"}}>
        <p>💨 Wind</p>
        <p>{data.wind.speed} km/h</p>
        </div>
        <div className="card ps-4 pt-3 bg-light border-1 shadow-sm me-2" 
        style={{width:"136px"}}>
        <p>Pressure</p>
        <p>{data.main.pressure} hPa</p>
        </div>
        <div className="card ps-4 pt-3 bg-light border-1 shadow-sm" 
        style={{width:"500px"}}>
        </div>
      </div>
      <div className="container mt-2 mb-3 d-flex">
      <div className="card px-3 pt-1 bg-light border-1 shadow-lg " 
      style={{width:"423px", height:"100px"}}>
        5 days Forecast
        </div>
      </div>

    </>
  );
};

export default TodayWeather;
