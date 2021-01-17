import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import thunkMiddleware  from 'redux-thunk';
import nasaReducer from './nasa-reducer';
import { reducer as formReducer } from 'redux-form';
import weatherReducer from "./weather-reducer";
import aztroReducer from "./aztro-reducer";

const reducers = combineReducers({

form: formReducer,
nasaPage: nasaReducer,
weatherPage: weatherReducer,
aztroPage: aztroReducer

});


 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));

//let store = createStore (reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;