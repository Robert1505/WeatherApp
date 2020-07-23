import React from 'react';
import './button.style.scss';

class Button extends React.Component{
    render(){
        return(
            <button onClick = {this.props.onButtonClick}>
                {this.props.city}
            </button>
        );
    }
}

export default Button;