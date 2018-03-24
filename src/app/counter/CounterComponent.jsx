import React from 'react';
import PropTypes from 'prop-types';

const CounterComponent = ({counter, onHandleIncrement, onHandleDecrement}) => (
  <div>
    <p>{counter}</p>
    <div>
      <button onClick={onHandleIncrement.bind(this)}>Increment</button>
      <button onClick={onHandleDecrement.bind(this)}>Decrement</button>
    </div>
  </div>
);

CounterComponent.propTypes = {
  counter: PropTypes.number.isRequired,
  onHandleIncrement: PropTypes.func.isRequired,
  onHandleDecrement: PropTypes.func.isRequired
};

export default CounterComponent;
