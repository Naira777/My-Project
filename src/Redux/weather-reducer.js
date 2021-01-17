import { weatherAPI } from "../api";

const SAVE_CITY_WEATHER= "SAVE_CITY_WEATHER";
const SAVE_CITY_ASTRO= "SAVE_CITY_ASTRO";

const initialState = {
 
  cityName: "",
  country: "",
  temp: 0,
  description: "",
  humidity: 0,
  windspeed: 0,
 icon: "",
 sunrise: "",
 sunset: "",
 moonrise: "",
 moonset: "",
 localtime: ""
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    

     case SAVE_CITY_WEATHER: {
      return { ...state,
         cityName: action.data.location.name,
         country: action.data.location.country,
         temp: action.data.current.temp_c,
          humidity: action.data.current.humidity,
          windspeed: action.data.current.wind_kph,       
         description: action.data.current.condition.text,
                icon: action.data.current.condition.icon
                
        }
      }
        case SAVE_CITY_ASTRO: {

          return { ...state,
               sunrise: action.dataastro.astronomy.astro.sunrise,
                sunset: action.dataastro.astronomy.astro.sunset,
                moonrise: action.dataastro.astronomy.astro.moonrise,
                moonset: action.dataastro.astronomy.astro.moonset,
                localtime:  action.dataastro.location.localtime,
          }

        
    }

    default:
      return state;
  }
};





export const setDataWeather= (data) => {
  return { type: SAVE_CITY_WEATHER, data};
};

export const setDataAstro= (dataastro) => {
  return { type: SAVE_CITY_ASTRO, dataastro};
};

export const getWeatherForCity = (name) => async (dispatch) => {
  const data = await weatherAPI.getWeather(name);
  dispatch(setDataWeather(data));
  const dataastro= await weatherAPI.getAstro(name);
  dispatch(setDataAstro(dataastro));

   
};

export default weatherReducer;