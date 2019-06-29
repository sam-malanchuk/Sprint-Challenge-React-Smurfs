import React, { Component } from 'react';
import './Smurfs.css';

import Smurf from './Smurf';

class Smurfs extends Component {
  // working on a feature to display different color circles
  // changeColors = () => {
  //   console.log("we in change colors");
  //   return null;
  // }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map((smurf, index) => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={index}
              />
            );
          })}
          
          {/* {this.changeColors()} */}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
