import React from "react";
import { Input } from "../FormsControls/FormsControls";
import { reduxForm, Field } from "redux-form";
import s from './DisplayPhoto.module.css'

const PhotoDayForm = (props) => {
  return (
    <div>
      <label className={s.textcolor}>
        <div className={s.title1}> Get astronomy photo of the day </div>
      </label>
   
      <form class="form-inline" onSubmit={props.handleSubmit}>
        <Field
          component={Input}
          name={"searchedDay"}
          type={"search"}
          placeholder={"YYYY-MM-DD"}
          aria-label="Search"
          class="form-control mr-ms-2"
        />

        <button class="btn btn-outline-success" type="submit">
          Get Astronomy Picture
        </button>
      </form>
    </div>
  );
};
const PhotoDayReduxForm = reduxForm({ form: "getpicture" })(PhotoDayForm);

export default PhotoDayReduxForm;