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
        if(this.state.dataIsLoaded){
           temp = this.state.loadedData.main.temp;
           city = this.state.loadedData.name;
        }
        return(
            <div className = "weatherApp"> 
                <div className = "title">
                   <TextLine text = {city}/>
                </div>
                <div className = "timezone">
                    <TextLine  text = 'Monday 1:20am'/>
                </div>  
                <div className = "detail">
                     <WeatherDetails detail = " Clear" icon = "fa fa-moon-o"/>   
                </div>
                <div className = "container">
                    <div className = 'medtemp'>
                        <Grades temp = {temp}/>
                    </div>
                    <div className = "container2">
                        <div className = 'gradesDegree'>
                            <Grades temp = '21°C'/>
                        </div>
                        <div className = 'gradesDegree'>
                            <Grades temp = '25°C'/>
                        </div>
                    </div>
                </div>
                <div className = "windSpeed">
                   <TextLine text = 'Wind Speed'/>
                </div>
                <div className = "detail">
                    <WeatherDetails detail = " 21 m/s" icon = "fa fa-snowflake-o"/>
                </div> 
            </div>
        );
    }
}

export default App;