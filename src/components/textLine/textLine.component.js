import React from 'react';
import './textLine.style.scss';

class TextLine extends React.Component{
    render(){
        return(
            <div>
                {this.props.text2}
                {this.props.space}
                {this.props.text}
                {this.props.minutes}
            </div>
        );
    }
}

export default TextLine;