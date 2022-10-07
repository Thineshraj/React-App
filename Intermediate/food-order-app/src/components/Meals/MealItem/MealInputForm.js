import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealInputForm.module.css';

const MealInputForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const formSubmitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          step: '1',
          defaultValue: '1',
          min: '1',
          max: '5',
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Enter the amount between 1 to 5</p>}
    </form>
  );
};

export default MealInputForm;
