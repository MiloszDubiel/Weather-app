import React, { useEffect, useState } from "react";
import { WiCloud, WiStrongWind, WiRaindrop, WiBarometer, WiDaySunny, WiDayCloudy, WiDayRain, WiDaySnow, WiDayThunderstorm } from 'react-icons/wi';

const NextDays = ({ data }) =>{
    let [weathers, setWeathers] = useState('')
    let [ firistDay, ...nextDays] = data
    
       useEffect(()=>{
            nextDays = data.map((element, index)=>{
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
        setWeathers(nextDays)
       },[data])     
            
       return weathers
    
}
export default NextDays