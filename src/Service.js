import axios from "axios";

const APIKEY = "0a262f95e0d253743e0e1822b1872cb0";

function getData (state){
    console.log();
    const data = 
    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${state}&appid=${APIKEY}`)
    .then((res)=>{
        return res.data;
    })
    .catch((err)=>{
        alert(state !== ''?`No state is there with name ${state}`:`Pls enter a state name`);
        return Promise.reject(err);
    })
    return data;
}

export default getData;
