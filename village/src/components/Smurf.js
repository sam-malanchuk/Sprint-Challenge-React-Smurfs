import React from 'react';
import './Smurf.css';
import Circle from './Circle';

const Smurf = props => {
  return (
    <div className="Smurf">
      <Circle {...props} />
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

