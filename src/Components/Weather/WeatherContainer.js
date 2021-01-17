import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import DisplayWeather from "./DisplayWeather";
import WeatherReduxForm from "./WeatherForm";
import { getWeatherForCity } from "../../Redux/weather-reducer";

const WeatherContainer = React.memo((props) => {
const [editMode, setEditeMode] = useState(true);
const [City, setCity] = useState();



   const onSubmit = (formData) => {
   const City1= formData.searchedCity;
    setCity(City1);
    }
    


    const dispatch= useDispatch();

    useEffect(() => {
    
    dispatch(getWeatherForCity(City))
    .then(() => {
      setEditeMode(false)}
    ); 
    
      }, [City]);
   
    


  return (
    <>
      <div>{editMode &&  <WeatherReduxForm onSubmit={onSubmit} />}</div>


     <div>
        {!editMode  && (
          <DisplayWeather />
        )}
      </div>
    </>
  )
});

export default WeatherContainer;
