// Own code by using useReducer

import { useReducer } from 'react';

const initialState = {
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'CHANGE') {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === 'BLUR') {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  if (action.type === 'RESET') {
    return {
      value: '',
      isTouched: false,
    };
  }
  return initialState;
};

const useInput2 = (validation) => {
  const [inputState, despatch] = useReducer(inputStateReducer, initialState);

  const isValidInput = validation(inputState.value);
  const hasError = !isValidInput && inputState.isTouched;

  const valueChangeHandler = (e) => {
    despatch({ type: 'CHANGE', value: e.target.value });
  };

  const valueOnBlurHandler = (e) => {
    despatch({ type: 'BLUR' });
  };

  const reset = () => {
    despatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValidInput,
    hasError,
    valueChangeHandler,
    valueOnBlurHandler,
    reset,
  };
};

export default useInput2;
