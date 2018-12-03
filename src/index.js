import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import createReducer from './createReducer';
import './styles.css';

const initialState = { count: 0 };

const reducer = createReducer(initialState, {
  reset: () => initialState,
  increment: state => ({ count: state.count + 1 }),
  decrement: state => ({ count: state.count - 1 })
});

function Counter({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, { count: initialCount });
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Counter initialCount={0} />, rootElement);
