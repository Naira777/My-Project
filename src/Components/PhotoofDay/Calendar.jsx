import React from 'react';
import { Calendar, Alert } from 'antd';
import moment from 'moment';
import s from './Calendar.module.css';
import { connect } from 'react-redux';
import {setDay} from './../../Redux/nasa-reducer';

class Cal extends React.Component {
    constructor(props){

        super(props)
    }
  state = {
    value: moment(),
    selectedValue: moment(),
  };


  componentDidMount () {




  }
  onSelect = value => {
    this.setState({
      value,
      selectedValue: value,
    
    });
    this.props.setDay(value.format('YYYY-MM-DD'));
  };

  onPanelChange = value => {
    this.setState({ value });
 this.props.setDay(value.format('YYYY-MM-DD'));
  };

  render() {
    const { value, selectedValue } = this.state;

    return (
    
      <>
        <div className= {s.alert}> <Alert
         message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`} /> </div>
        
       <div className={s.cal}> <Calendar value={value} onSelect={this.onSelect} onPanelChange={this.onPanelChange} /></div>
      </>
    );
  }
}

const mapStateToProps = (state)=> {


}

export default connect(mapStateToProps, { setDay } )( Cal);
