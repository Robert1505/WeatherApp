import React from 'react';
import './app.style.scss';
import TextLine from '../textLine/textLine.component';
import Grades from '../grades/grades.component';
import WeatherDetails from '../weather-details/weather-details.component';


class App extends React.Component{
    getData = () => {
        fetch('api.openweathermap.org/data/2.5/weather?q=Paris&appid=fb17237a9576d0bf07e422e276842f84')
        .then(response => response.json())
        .then(data => console.log(data));


    }
    render(){
        return(
            <div className = "weatherApp"> 
                <div className = "title">
                   <TextLine text = "Hong Kong" />
                </div>
                <div className = "timezone">
                    <TextLine  text = 'Monday 1:20am'/>
                </div>  
                <div>
                     <WeatherDetails detail = "clear" icon = "fa fa-moon-o"/>   
                </div>
                <div className = 'medtemp'>
                     <Grades temp = '23°C'/>
                </div>
                <div className = 'gradesDegree'>
                     <Grades temp = '21°C'/>
                </div>
                <div className = 'gradesDegree'>
                     <Grades temp = '25°C'/>
                </div>
                <div>
                   <TextLine text = 'Wind Speed'/>
                </div>
                <div>
                    <WeatherDetails detail = "21ms" icon = "fa fa-thermometer-full"/>
                </div> 
            </div>
        );
    }
}

export default App;