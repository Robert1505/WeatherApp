import React from 'react';
import './grades.style.scss';

class Grades extends React.Component{
    render(){
        return(
            <div>
                {this.props.temp}°C
            </div>
        );
    }
}

export default Grades;