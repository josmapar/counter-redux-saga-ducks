import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { counterIncrementAction, counterDecrementAction } from './duck/index';
import CounterComponent from './CounterComponent';

class CounterContainer extends Component {
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement() {
    this.props.dispatch(counterIncrementAction());
  }

  handleDecrement() {
    this.props.dispatch(counterDecrementAction());
  }

  render() {
    const { counter, isLoading } = this.props;
    return (
      <div>
        <h1>Counter Redux</h1>
        <CounterComponent  
          counter={counter}
          isLoading={isLoading}
          onHandleIncrement={this.handleIncrement}
          onHandleDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

CounterContainer.propTypes = {
  counter: PropTypes.number,
  isLoading: PropTypes.bool,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ counter }) => ({
   counter: counter.counter, //modulo.estado
   isLoading: counter.isLoading
});

export default connect(mapStateToProps)(CounterContainer);
