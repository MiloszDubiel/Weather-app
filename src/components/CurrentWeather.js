import React from "react";
import { WiCloud, WiStrongWind, WiRaindrop, WiBarometer, WiDaySunny, WiDayCloudy, WiDayRain, WiDaySnow, WiDayThunderstorm } from 'react-icons/wi';
const CurrentWeather = ({element, city_name }) =>{
  let img = require(`../Icons/${element.weather.icon}.png`)
    return(
        <div className="row justify-content-center" style={{color: 'black'}}>
        <div className="col-md-6">
          <div className="card weather-card text-center p-4">
            <div className="weather-icon mb-3">
              <img src={img} />
            </div>
            <h2 className="city-name">{city_name}</h2>
            <p className="temp">{element.temp}°C</p>
            <p className="description">{element.weather.description}</p>
            <hr />
            <div className="row details text-center">
              <div className="col-4">
                <WiStrongWind size={30} />
                <p>Wind</p>
                <p>{element.wind_spd} km/h</p>
              </div>
              <div className="col-4">
                <WiRaindrop size={30} />
                <p>Humidity</p>
                <p>{element.rh}%</p>
              </div>
              <div className="col-4">
                <WiBarometer size={30} />
                <p>Pressure</p>
                <p>{element.pres} hPa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CurrentWeather