// Prof Code

import { useState } from 'react';

const useInput = (validValue) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setisTouched] = useState(false);

  const valueIsValid = validValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const valueOnBlurHandler = (e) => {
    setisTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setisTouched(false);
  };

  return {
    value: enteredValue,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    valueOnBlurHandler,
    reset,
  };
};

export default useInput;
