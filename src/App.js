import React from 'react';

const weatherApi = {
  key: '7feef82f33ada5fa579adcdac7155beb',
  base: 'https://api.openweathermap.org/data/2.5/',
} 

function App() {

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

  return (
    <div className="App cold">
      <main>
        <div className='search-box'>
          <input 
            type='text'
            className='search-bar'
            placeholder='Search...'
          />
        </div>
        <div className='location-box'>
          <div className='location'>New York City, US</div>
          <div className='date'>{dateBuilder(new Date())}</div>

        </div>
        <div className='weather-box'>
          <div className='temp'>
            15 c
          </div>
          <div className='weather'>Sunny</div>
        </div>
      </main>
    </div>
  );  
}

export default App;
