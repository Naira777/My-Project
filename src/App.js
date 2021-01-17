import React from 'react';

import './App.css';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import store from './Redux/redux';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import PhotoContainer from '../src/Components/PhotoofDay/PhotoContainer';

import WeatherContainer from './Components/Weather/WeatherContainer';
import earth from '../src/Photo/earth.jpg';
import Aztro from './Components/Aztro/aztro';
import AztroContainer from './Components/Aztro/AztroContainer';
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";

class App extends React.Component {
 
    

  render() {

    return (    
      <div className="app-wrapper">
       
      <Header />
        <Navbar />
        
        <div class="app-wrapper-content">

       <div className="asfoto">
         <Route path="/astronomypictureoftheday" render={() => <PhotoContainer />} />
  <Route path="/weatherofCity" render={() => <WeatherContainer />} />
  <Route path="/aztro" render={() => <AztroContainer />} />
</div>

          
  
          <div > 
         <img src={earth} className="foto" />
         </div>

            
        </div>
      </div>
      
    );
  }
}





const SamuraiJSApp = (props) => {


  return (
    <HashRouter basename={process.env.PUBLIC_URL} >
     <Provider store={store}>
        <App />
     </Provider>
    </HashRouter>
  );
};
export default SamuraiJSApp;











