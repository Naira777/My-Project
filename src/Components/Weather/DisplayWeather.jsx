import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getcityName, getCountry, getTemp, getDescription, getWindspeed, getSunrise, getSunset, getHumidity, getIcon, getMoonrise, getMoonset, getLocaltime } from '../../Redux/selectors-weather';


const DisplayWeather = () => {

const cityName= useSelector(getcityName);
const country= useSelector(getCountry);
const temp= useSelector(getTemp);
const description= useSelector(getDescription);
const windspeed= useSelector(getWindspeed);
const humidity= useSelector(getHumidity);
const icon=useSelector(getIcon);
const sunrise= useSelector(getSunrise);
const sunset= useSelector(getSunset);
const moonrise= useSelector(getMoonrise);
const moonset=useSelector(getMoonset);
const localtime=useSelector(getLocaltime);

return (<div>


<table class="table table-dark">
    <thead>
      <tr>
          <th>Country</th>
          <th>{country}</th>
              </tr>
    </thead>
    <tbody>
      <tr>
        <td>City</td>
   <td>{cityName}</td>
       </tr>
     <tr>
        <td>Temperature</td>
         <td>{temp}°C</td>
       </tr>
      <tr>
        <td>Description</td>
<td>{description}<img src={icon} /></td>
       </tr>

       <tr>
        <td>Humidity</td>
   <td>{humidity}%</td>
       </tr>

        <tr>
        <td>Wind speed</td>
      <td>{windspeed} kph</td>
       </tr>
   
     <tr>
        <td>Sunrise</td>
      <td>{sunrise}</td>
       </tr>
       

 <tr>
        <td>Sunset</td>
      <td>{sunset}</td>
       </tr>
 <tr>
        <td>Moonrise</td>
      <td>{moonrise}</td>
       </tr>

 <tr>
        <td>Moonset</td>
      <td>{moonset} </td>
       </tr>

 <tr>
        <td>Local Time</td>
      <td>{localtime} </td>
       </tr>


    </tbody>
  </table>




    </div>)
}


export default DisplayWeather;