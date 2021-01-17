const SAVE_NAME = "SAVE_NAME";

const initialState = {
 
 name: "aries"
 
};

const aztroReducer = (state = initialState, action) => {
  switch (action.type) {
    

     case SAVE_NAME: {
      return { ...state,
          name: action.name };
    }

    default:
      return state;
  }
};

export const setName = (name) => {
    return { type: SAVE_NAME, name };
  };


  export default aztroReducer;
  