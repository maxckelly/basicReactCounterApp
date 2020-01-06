import React from 'react';
import Counter from './counter.js';

import './someContainer.css';

class SomeContainer extends React.Component {
  render() {
    return (
      <div className="arbitrary-inner-block">
        <Counter 
          count={this.props.count}
          increment={this.props.increment}
          decrement={this.props.decrement}
        />
      </div>
    )
  }
}

export default SomeContainer;