import React from 'react';
import './app.style.scss';
import TextLine from '../textLine/textLine.component';
import Grades from '../grades/grades.component';
import WeatherDetails from '../weather-details/weather-details.component';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dataIsLoaded : false,
            loadedData : null
        };
    }
    getData = () => {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=fb17237a9576d0bf07e422e276842f84&units=metric')
        .then((response) => response.json())
        .then((data) => this.setState({dataIsLoaded : true, loadedData : data}));
    }
    componentDidMount = () => {
        this.getData();
    }
    render(){
        let temp = 0;
        let city = "";
        let tempmax = 0;
        let tempmin = 0;
        let description = "";
        let windspeed = 0;
        let unixTimestamp = 0;
        if(this.state.dataIsLoaded){
           temp = this.state.loadedData.main.temp;
           city = this.state.loadedData.name;
           tempmax = this.state.loadedData.main.temp_max;
           tempmin = this.state.loadedData.main.temp_min;
           description = this.state.loadedData.weather.description;
           windspeed = this.state.loadedData.wind.speed;
           unixTimestamp = this.state.loadedData.timezone;
        }
        let milliseconds = unixTimestamp * 1000;
        let dateObject = new Date(milliseconds);
        let humanDateFormat = dateObject.toLocaleString();
        return(
            <div className = "weatherApp"> 
                <div className = "title">
                   <TextLine text = {city}/>
                </div>
                <div className = "timezone">
                    <TextLine  text2 = {dateObject.toLocaleString("en-US", {weekday: "short"})} space = " " text = {dateObject.toLocaleString("en-US", {hour: "numeric"})}/>
                </div>  
                <div className = "detail">
                     <WeatherDetails icon = "fa fa-moon-o" detail = {description}/>   
                </div>
                <div className = "container">
                    <div className = 'medtemp'>
                        <Grades temp = {Math.round(temp)}/>
                    </div>
                    <div className = "container2">
                        <div className = 'gradesDegree'>
                            <Grades temp = {Math.round(tempmin)}/>
                        </div>
                        <div className = 'gradesDegree'>
                            <Grades temp = {Math.round(tempmax)}/>
                        </div>
                    </div>
                </div>
                <div className = "windSpeed">
                   <TextLine text = "Wind Speed"/>
                </div>
                <div className = "detail">
                    <WeatherDetails detail = {windspeed} icon = "fa fa-snowflake-o" space = " " marime = " m/s"/>
                </div> 
            </div>
        );
    }
}

export default App;