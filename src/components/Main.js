import React, { useEffect, useState} from "react";
import NextDays from "./NextDays";
import CurrentWeather from "./CurrentWeather";

async function getLocation(location) {
  const response = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=7f6c7e266ee846a7b38fcaf3c7a4587d`)
  return await response.json()
}

const Main = props => {
 
  let [weather, setWeather] = useState('')
  let [nextDays, setNextDays] = useState('')

  async function findCity() {
    let searchBar = document.querySelector('#search')
    let response = await getLocation(searchBar.value)
    setWeather(<CurrentWeather key={response.count} element={response.data[0]} city_name={response.city_name}/>)
    setNextDays(<NextDays data={response.data}/>)
  }     

  useEffect(()=>{
    let response = getLocation('Rzeszow')
    let current = []
    response.then(response =>{
      console.log(response)
      current.push(response.data[0])
      let currentWeather = current.map((element, index)=>{
        return <CurrentWeather key={index} element={element} icon={element.weather.icon} city_name={response.city_name} />
      })
      setWeather(currentWeather)
      setNextDays(<NextDays data={response.data}/>)
    })    
  },[])

  return (
    <div className="container">
      <header className="text-center mb-5">
        <h1 className="display-4">Weather App</h1>
        <p className="lead">Current weather for your location</p>
      </header>
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Type name of the city..."
              aria-label="Type name of the city..."
              id='search'
            />
            <button className="btn btn-secondary" type="button" onClick={findCity}>Search</button>
          </div>
        </div>
      </div>
        {weather}

      <div className="row justify-content-center mt-5">
        <div className="col-md-10">
          <div className="row">
           {nextDays}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;