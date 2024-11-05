import React from "react";
import { WiCloud, WiStrongWind, WiRaindrop, WiBarometer, WiDaySunny, WiDayCloudy, WiDayRain, WiDaySnow, WiDayThunderstorm } from 'react-icons/wi';

const NextDays = props =>{
    return(
        <div className="col text-center">
            <p>Piątek</p>
            <WiDaySnow size={50} color="#90A4AE" />
            <p>10°C</p>
      </div>
    )
}

export default NextDays