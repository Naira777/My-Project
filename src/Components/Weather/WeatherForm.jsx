import React from "react";
import { Input } from "././../FormsControls/FormsControls";
import { reduxForm, Field } from "redux-form";
import s from '../PhotoofDay/DisplayPhoto.module.css';

const WeatherForm = (props) => {
  return (
    <div>
      <label>
        <h3 className= {s.textcolor}> Enter City Name </h3>
      </label>
   
      <form class="form-inline" onSubmit={props.handleSubmit}>
        <Field
          component={Input}
          name={"searchedCity"}
          type={"search"}
          placeholder={"Enter City Name"}
          aria-label="Search"
          class="form-control mr-sm-2"
        />

        <button class="btn btn-outline-success" type="submit">
          Get Weather
        </button>
      </form>
    </div>
  );
};
const WeatherReduxForm = reduxForm({ form: "getweather" })(WeatherForm);

export default WeatherReduxForm;