import './styles';

import React from 'react';
import {textColor} from './styles';

var App = React.createClass({

  render() {
    return (
      <div>
        <h1 style={{color:textColor}}>Types of Cake</h1>
        <ul>
          <li>Chocolate</li>
          <li>Carrot</li>
          <li>Red Velvet</li>
          <li>Pound</li>
        </ul>
      </div>
    );
  },

});


React.render(<App/>, document.querySelector('#main'));
