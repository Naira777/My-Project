import React from 'react';
import s from './aztro.module.css';
import { connect } from 'react-redux';
import { getName } from '../../Redux/selector-aztro';
import { aztroAPI } from '../../api';
import {Slider}  from 'antd'

class Aztro extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          json: {}
        }
    }



    componentDidMount () {

        const URL = `https://aztro.sameerkumar.website/?sign=${this.props.name}&day=today`;
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({json}); });
    }

    render() {
        return (
          <div className={s.aztro}>
              <div className= {s.title}> Your sign: {this.props.name}  </div>
              Current Date: {this.state.json.current_date} <br />
              Compatibility: {this.state.json.compatibility} <br />
              Lucky Number: {this.state.json.lucky_number} <br />
              Lucky Time: {this.state.json.lucky_time} <br />
              Color: {this.state.json.color} <br />
              Date Range: {this.state.json.date_range} <br />
              Mood: {this.state.json.mood} <br />
              Description: {this.state.json.description} <br />
             
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
    name: getName(state)
    
    };
};
        
export default connect (mapStateToProps)(Aztro);
    
