import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayPhoto from "./DisplayPhoto";
import { getPhotoFromNasa } from '../../Redux/nasa-reducer';
import PhotoDayReduxForm from "./PhotoDayForm";
import Cal  from './Calendar';
import s from './Calendar.module.css';
import {getDay, getError} from './../../Redux/selectors-nasa';

const PhotoContainer = React.memo((props) => {
const [editMode, setEditeMode] = useState(true);
const [Day, setDay] = useState();
const Error= useSelector(getError);
const day= useSelector(getDay);


    const onSubmit = (formData) => {
    const Day1= formData.searchedDay;
    if ( typeof Day1 == typeof Date() ){
      setDay(Day1);

    }else 
    {
      setDay(day);
     
        
    }

    }

    const dispatch= useDispatch();

    useEffect(() => {
    
    if(Day != null){  
    dispatch(getPhotoFromNasa(Day))
    .then(() => {
      setEditeMode(false)}

    ); }}, [Day]);
   
    


  return (
    <>
      <div>{editMode &&  <PhotoDayReduxForm onSubmit={onSubmit} /> }</div>

   <div className= {s.cal}>{editMode && <Cal />}</div>

   {Error && editMode && <div class="alert alert-success alert-dismissible">
  <button type="button"  class="close" data-dismiss="alert">&times;</button>
  <strong>Attention!</strong> Please Enter Date!!!
</div> }
 


      <div>
        {!editMode  && (
          <DisplayPhoto />
        )}
      </div>
    </>
  );
});

export default PhotoContainer;
