import React from 'react';
import { connect } from 'react-redux';
import { getName } from '../../Redux/selector-aztro';
import {setName}  from './../../Redux/aztro-reducer';
import s from '../Aztro/aztro.module.css';


class Aztro1 extends React.Component {
  constructor(props) {
    super(props);
   
  }


getInfo = (e)=> {
e.preventDefault();
const name = e.target.value;
this.props.setName(name);
this.props.changeEditMode();
}

render(){ 
  return <>
  <div className={s.aztro }> 
  
  <div className={s.title}>Choose your sign </div>
 
  </div>

 <div class="d-flex flex-nowrap">

<input type="button" class="btn btn-success "  value="Aries"  onClick={this.getInfo}  /> <br/>
<div>     
"          "

</div>
<input type="button"  class="btn btn-success"  value="Taurus" onClick={this.getInfo} name="taurus" /><br/>
<div>     
"          "

</div>
<input type="button" class="btn btn-success" value="Gemini" onClick={this.getInfo } name="gemini" /><br/>
<div>     
"          "

</div>
<input type="button" class="btn btn-success" value= "Cancer" onClick={this.getInfo } name="cancer"/><br/>
<div>     
"          "

</div>
<input type="button" class="btn btn-success" value= "Leo" onClick={this.getInfo } name="leo" /><br/>
<div>     
"          "

</div>
<input type="button" class="btn btn-success" value= "Virgo" onClick={this.getInfo } name="virgo" /><br/>
<div>     
"          "

</div>


</div>
<div>     
"                         "

"                    "

</div>



<div class="d-flex flex-nowrap">
<input type="button" class="btn btn-success" value= "Libra" onClick={this.getInfo } name="libra" /><br/>
<div>     
"          "

</div>



<input type="button" class="btn btn-success" value= "Scorpio" onClick={this.getInfo } name="scorpio" /><br/>
<div>     
"          "

</div>



<input type="button" class="btn btn-success" value= "Sagittarius" onClick={this.getInfo } name="sagittarius" /><br/>
<div>     
"          "

</div>
<input type="button" class="btn btn-success" value= "Capricorn" onClick={this.getInfo } name="capricorn" /><br/>
<div>     
"          "

</div>
<input type="button" class="btn btn-success" value= "Aquarius" onClick={this.getInfo } name="aquarius" /><br/>
<div>     
"          "

</div>
<input type="button" class="btn btn-success" value= "Pisces" onClick={this.getInfo } name="pisces" /><br/>

</div>
</>

}


}

const mapStateToProps = (state) => {
return{
name: getName(state)

};
};
const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    },
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(Aztro1);





