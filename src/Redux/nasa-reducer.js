import { nasaAPI } from "../api";
import produce from 'immer';

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



/*const project = (state: TProject, action: TProjectAction): TProject => {
  return produce(state, (draft: TProject) => {
    switch (action.type) {
      case 'FETCH_PROJECT_DATA':
        draft.data = action.value
        break
      case 'CHANGE_ACTIVE_LAYER':
        draft.activeLayerId = action.value
        break
        if (draft.data) {
          draft.data.projectData.currentScreenIndex = action.value
        }
        break
      case 'CHANGE_LAYER_COORDS':
        p.changeLayerCoordsProducer(action)(draft)
        break
*/


const nasaReducer = (state = initialState, action) => {

  return produce (state, (draft) => {

  switch (action.type) {
    

     case SAVE_DATA_SUCCESS: 

      draft.photo.url = action.data.url;
      draft.photo.title=action.data.title;
      draft.photo.explanation= action.data.explanation;
  
    break
    case SAVE_DAY: 

    draft.day= action.day;
    break

    case SAVE_ERROR: 

     draft.error= action.error;
    break

  }

  })

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

