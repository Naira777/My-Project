import { nasaAPI } from "../api";

const SAVE_DATA_SUCCESS = "SAVE_DATA_SUCCESS";
const SAVE_DAY = "SAVE_DAY";
const SAVE_ERROR = "SAVE_ERROR";

const initialState = {
 
  photo: {

 url: "",
 title: "",
 explanation: ""

  },

  day: "",
 error: false
};




const nasaReducer = (state = initialState, action) => {
 
  switch (action.type) {
    

     case SAVE_DATA_SUCCESS: {
      return { ...state,
          photo: { ...state.photo, url: action.data.url, title: action.data.title, explanation: action.data.explanation} };
    
      }
    
    case SAVE_DAY: {

      return {...state,
      day: action.day
      };
    }
case SAVE_ERROR: {

      return {...state,
      error: action.error
      };
    }
    default:
      return state;
  }

 

};


export const setDay = (day) => {
  return { type: SAVE_DAY, day };
};

export const setError= (error) => {
  return { type: SAVE_ERROR, error };
};

export const setData = (data) => {
  return { type: SAVE_DATA_SUCCESS, data };
};

export const getPhotoFromNasa = (date) => async (dispatch) => {
try{  const data = await nasaAPI.getPhotoOfTheDay(date);
   dispatch(setData(data));
   dispatch(setError(false));
 
}
catch(err){


  dispatch(setError(true));
  alert('Please enter valid date!');

}

};
export default nasaReducer;