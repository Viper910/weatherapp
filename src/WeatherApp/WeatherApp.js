import './WeatherApp.css';
import  snowimg from '../Images/Snow.jpg';
import  rainimg from '../Images/Rainy.jpg';
import  clearimg from '../Images/Clear.jpg';
import  cloudimg from '../Images/Clouds.jpg';
import  mistimg from '../Images/Mist.jpg';
import { useEffect, useState } from 'react';
import getData from '../Service';
import Weathercard from '../WeatherCard/Weathercard';

const kToC = (K) => Math.round(K - 273.15);

const unixTimeConverter = (unixTime) => {
    const date = new Date(unixTime*1000);
    return date.toLocaleTimeString().slice(0,4) +date.toLocaleTimeString().slice(7,10)+' , '+date.toDateString();
}

const weatherCheck = (weather) => {
    if(weather==='Rain'){
        return rainimg;
    }
    else if(weather==='Snow'){
        return snowimg;
    }
    else if(weather==='Clouds'){
        return cloudimg;
    }
    else if(weather==='Mist'){
        return mistimg;
    }
    else{
        return clearimg;
    }
}

export default function WeatherApp(){
    const [confirmstate ,setConfirmState] = useState("Bhubaneswar");
    const [weatherdata,setWeatherData] = useState([]);
    useEffect(()=>{
        getData(confirmstate)
        .then((data)=>setWeatherData(data)
        );
    },[confirmstate]);
  
    return(
        <>
       {weatherdata.length!==0?<Weathercard changeState={confirmstate => setConfirmState(confirmstate)}
            weather={weatherdata.weather[0].main} stateconfirm={weatherdata.name} temp={kToC(weatherdata.main.temp)}
                wind={weatherdata.wind.speed} cloud={weatherdata.clouds.all} humidity={weatherdata.main.humidity}
                maxTemp={kToC(weatherdata.main.temp_max)} minTemp={kToC(weatherdata.main.temp_min)} country={weatherdata.sys.country}
                time={unixTimeConverter(weatherdata.dt)} img={weatherCheck(weatherdata.weather[0].main)}
                iconid={weatherdata.weather[0].icon}
            />:<Weathercard changeState={confirmstate => setConfirmState(confirmstate)}/>}
       </>
    )
}