import React from 'react';

const Circle = props => {
    const colors = ['purple', 'pink', 'yellow', 'green', 'blue'];
    const newColor = () => {
        const num = Math.floor(Math.random() * 5);
        return colors[num];
    }
    return (
        <div className={`circleI ${newColor()}`}>
            {props.name.charAt(0).toUpperCase()}
        </div>
    );
};
    
export default Circle;
    
    