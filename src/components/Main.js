import React, { useEffect, useState} from "react";
import NextDays from "./NextDays";
import { WiCloud, WiStrongWind, WiRaindrop, WiBarometer, WiDaySunny, WiDayCloudy, WiDayRain, WiDaySnow, WiDayThunderstorm } from 'react-icons/wi';
import CurrentWeather from "./CurrentWeather";

async function getLocation(location) {
  const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${location}&key=7f6c7e266ee846a7b38fcaf3c7a4587d`)
  return await response.json()
}

const Main = props => {
  let searchBar
  let [weather, setWeather] = useState('')

  async function findCity() {
    let response = await getLocation(searchBar.value)
    setWeather(<CurrentWeather key={response.count} element={response.data[0]} />)
  }     

  useEffect(()=>{
    let response = getLocation('Rzeszow')
    response.then(response =>{
      let currentWeather = response.data.map((element, index)=>{
        return <CurrentWeather key={index} element={element} />
      })
      setWeather(currentWeather)
    })
  },[])

  return (
    <div className="container">
      {/* Nagłówek */}
      <header className="text-center mb-5">
        <h1 className="display-4">Weather App</h1>
        <p className="lead">Current weather for your location</p>
      </header>

      {/* Pasek wyszukiwania */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type name of the city..."
              aria-label="Type name of the city..."
              ref={(el)=> searchBar = el}
            />
            <button className="btn btn-secondary" type="button" onClick={findCity}>Search</button>
          </div>
        </div>
      </div>
        {weather}
      {/* Prognoza na następne 5 dni */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-10">
          <div className="row">
            <NextDays/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;