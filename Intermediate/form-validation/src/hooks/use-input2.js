// Own code

import { useState } from 'react';

const useInput2 = (validation) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValidInput = validation(enteredValue);
  const hasError = !isValidInput && isTouched;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const valueOnBlurHandler = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValidInput,
    hasError,
    valueChangeHandler,
    valueOnBlurHandler,
    reset,
  };
};

export default useInput2;
