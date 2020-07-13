import React from 'react';
import './app.style.scss';
import TextLine from '../textLine/textLine.component';

class App extends React.Component{
    render(){
        return(
            <div className = "weatherApp"> 
                <TextLine value = 'Hong Kong' />
                <TextLine value = 'Monday 1:20am'/>
            </div>
        );
    }
}

export default App;