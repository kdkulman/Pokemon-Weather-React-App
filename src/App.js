import React, { useState } from 'react';

const weatherApi = {
  key: '7feef82f33ada5fa579adcdac7155beb',
  base: 'https://api.openweathermap.org/data/2.5/',
} 

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter"){
      fetch(`${weatherApi.base}weather?q=${query}&units=imperial&APPID=${weatherApi.key}`)
      .then(res => res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result);
      });
    }
  }

  const dateBuilder = (d) => {
    let months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug",
                  "Sept", "Oct", "Nov", "Dec"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
                "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  let wallpaper = 'App cold';
  if (typeof weather.main == 'undefined') {
    wallpaper = 'App cold';
  } else if (Math.round(weather.main.temp) >= 80) {
    wallpaper = 'App hot';
  } else if (Math.round(weather.main.temp) >= 50)  {
    wallpaper = 'App warm';
  } else {
    wallpaper = 'App cold';
  }

  return (
    <div className={wallpaper}>
      <main>
        <div className='search-box'>
          <input 
            type='text'
            className='search-bar'
            placeholder='Search a city name'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress= {search}
          />
        </div>
        {(typeof weather.main != 'undefined') ? ( 
          <div>
            <div className='location-box'>
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>
            <div className='weather-box'>
              <div className='temp'>
                {Math.round(weather.main.temp)}°F
              </div>
              <div className='weather'>{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );  

}

// function rain() {
//   return (
//     <body class="back-row-toggle splat-toggle">
//       <div class="rain front-row"></div>
//       <div class="rain back-row"></div>
//       <div class="toggles">
//         <div class="splat-toggle toggle active">SPLAT</div>
//         <div class="back-row-toggle toggle active">BACK<br />ROW</div>
//         <div class="single-toggle toggle">SINGLE</div>
//       </div>
//     </body>
//   );
//}

export default App;
