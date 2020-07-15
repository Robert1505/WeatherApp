import React from 'react';
import './weather-details.style.scss';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

class WeatherDetails extends React.Component{
    render(){
        return(
            <div>
                <i className= {this.props.icon} aria-hidden="true"></i>
                {this.props.detail}
            </div>
        );
    }
}

export default WeatherDetails;