import './Weathercard.css';
import { useState } from 'react';

export default function Weathercard({changeState, stateconfirm, weather, cloud, humidity, wind, temp, maxTemp, minTemp, country, time, img,iconid}){
    const [state,setState] = useState(""); 

    const changeinInput = (event) => {
        setState(event.target.value);
    }


    return(
        <div className='main-container'>
        <div className='container-card1'>
            <img className="bg-image" src={img} alt='weather-image'/>
            <h2 className='h2-title'>WeatherApp</h2>
            <div className='container-card3'>
                <h1 className='temp-show'>{temp}<sup className='sup1'>0</sup></h1>
                <h3 className='state-show'>{stateconfirm},{country}<span className='time-span'>{time}</span></h3>
                <div className='main-show'><img className="icon-image" src={`https://openweathermap.org/img/wn/${iconid}@2x.png`} alt={iconid}/><span className='weather-icon-span'>{weather}</span></div>
            </div>
        </div>
        <div className='container-card2'>
            <input className='input-form' type="text" onChange={changeinInput} placeholder='Enter State/Town'/>
            <button className='search-button' onClick={()=>changeState(state)}>Search</button>
            <hr/>
            <h3 className='h3-heading'>Weather Details</h3>
            <ul>
                <li>Cloud<span className='span1'>{cloud}%</span></li>
                <li>Humidity<span className='span2'>{humidity}%</span></li>
                <li>Wind<span className='span3'>{wind}m/sec</span></li>
                <li>MinTemp<span className='span4'>{minTemp}<sup className='sup2'>0</sup> C</span></li>
                <li>MaxTemp<span className='span5'>{maxTemp}<sup className='sup2'>0</sup> C</span></li>
            </ul>              
         </div>
    </div>
    )
}