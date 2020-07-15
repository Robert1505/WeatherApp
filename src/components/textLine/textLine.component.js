import React from 'react';
import './textLine.style.scss';

class TextLine extends React.Component{
    render(){
        return(
            <div>
                {this.props.text}
            </div>
        );
    }
}

export default TextLine;