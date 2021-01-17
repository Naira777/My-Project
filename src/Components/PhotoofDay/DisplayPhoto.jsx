import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getNasaPhoto, getTitleOfNasaPhoto, getExplanation, getError } from '../../Redux/selectors-nasa';

import ReactPlayer from "react-player";
import s from "./DisplayPhoto.module.css";


const DisplayPhoto = () => {
  const Photo = useSelector(getNasaPhoto);
  const TitleOfPhoto = useSelector(getTitleOfNasaPhoto);
  const Explanation= useSelector(getExplanation);
  const Error= useSelector(getError);

  return (
    <>
   {!Error && <div className={s.all}>
      <div className={s.title}>
      <div className={s.title1}> This is the Astronomy Picture of the Day </div>
      <div className={s.title2}>  {TitleOfPhoto}</div>
      </div>
  <div className={s.textcolor}>{Explanation}</div>
     

           <img src={Photo} class="mx-auto d-block" />

          

      <ReactPlayer
        url={Photo}
      />

       
      </div>}
      {Error && <div className={s.error}>{"Please Enter Valid Date!"}</div>}
    </>
  );
};

export default DisplayPhoto;
