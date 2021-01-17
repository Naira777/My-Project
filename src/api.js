
import * as axios from 'axios';



const instanceforaztro = axios.create ({ 


    
    baseURL: 'https://aztro.sameerkumar.website'
 


});

const instance = axios.create ({ 


    
    baseURL: 'https://api.nasa.gov/planetary/apod',
    headers: {

       "API-KEY": "WpLoa1jcg8MdhMrIfup0CYk45GsdhRQLlbcjVa3r"
    }


});


const instanceforweather = axios.create ({ 

    baseURL: 'https://api.weatherapi.com/v1',
    headers: {
       
       "API-KEY": "5e702696db01489eaa2124026202008"
    }


});

export const nasaAPI = { 


    getPhotoOfTheDay (date)  {
    
    
        return instance.get(`?date=${date}&api_key=WpLoa1jcg8MdhMrIfup0CYk45GsdhRQLlbcjVa3r`)
    
       .then(response =>

         {
             return response.data;
    
          });  

}
}
export const weatherAPI = { 


    getWeather (cityName)  {
    
    
        return instanceforweather.get(`/current.json?key=5e702696db01489eaa2124026202008&q=${cityName}`)
    
       .then(response =>

         {
            return response.data;
    
       }); 


},

 getAstro(cityName) {

const today= new Date();
        return instanceforweather.get(`/astronomy.json?key=5e702696db01489eaa2124026202008&q=${cityName}&dt=${today}`)
    
       .then(response =>

         {
            return response.data;
    
       }); 


    
}



}

export const aztroAPI = { 

getSignAztro(name) {
   const URL= 'https://aztro.sameerkumar.website';
 return   fetch(URL, {
        method: 'POST'
    }).then(response => response.json());
          // return instanceforaztro.post(`/?sign=${name}&day=tomorrow`);
        
    
    
        
    }

}