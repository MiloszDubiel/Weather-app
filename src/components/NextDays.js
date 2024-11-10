import React, { useEffect, useState } from "react";
const NextDays = ({ data }) =>{
    let [weathers, setWeathers] = useState('')
    let [ , ...nextDays] = data
       useEffect(()=>{
           let weather = nextDays.map((element, index)=>{
                let date = new Date(element.datetime)
                const days = ['Sunday', 'Monday', 'Tuesday', 'Wendesday', 'Thursday', 'Friday', 'Saturday'] 
                let img = require(`../Icons/${element.weather.icon}.png`)
            return(
                <div className="col text-center" key={index}>
                    <p>{element.datetime}</p>
                    <b>{days[date.getDay()]}</b>
                    <p>{element.data}</p>
                    <img src={img} style={{height: '50px'}}/>
                    <p>{element.temp}°C</p>
                    <p>{element.wind_spd} km/h</p>
                </div>
            )
        })
        setWeathers(weather)
       },[data])     
       return weathers
}
export default NextDays