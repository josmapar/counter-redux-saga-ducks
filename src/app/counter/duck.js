//Actions
const INCREMENT = 'app/counter/INCREMENT';
const DECREMENT = 'app/counter/DECREMENT';

//Initial State
const InitialState = {
  counter: 0
};

//Reducer
export default function reducer(state = InitialState, action = {}) {
  switch(action.type) {
    case INCREMENT: return {...state, counter: state.counter + 1};
    case DECREMENT: return {...state, counter: state.counter>0?state.counter - 1:0};
    default: return state;
  }
}

//Action Creators

export function counterIncrementAction() {
  return {
    type: INCREMENT
  };
}

export function counterDecrementAction() {
  return {
    type: DECREMENT
  };
}
