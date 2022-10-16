import { useRef, useState } from 'react';
import classes from './CheckoutForm.module.css';

const CheckoutForm = (props) => {
  const [formValidity, setFormValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const isEmpty = (value) => value.trim() === '';
    const isValidLength = (value) => value.trim() < 4;

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameisValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const postalCodeIsValid = !isValidLength(enteredPostalCode);
    const cityIsValid = !isEmpty(enteredCity);

    setFormValidity({
      name: nameisValid,
      street: streetIsValid,
      postalCode: postalCodeIsValid,
      city: cityIsValid,
    });

    const formIsValid =
      nameisValid && streetIsValid && postalCodeIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
  };

  const nameControlClass = `${classes.control} ${
    !formValidity.name ? classes.invalid : ''
  }`;
  const streetControlClass = `${classes.control} ${
    !formValidity.street ? classes.invalid : ''
  }`;
  const postalCodeControlClass = `${classes.control} ${
    !formValidity.postalCode ? classes.invalid : ''
  }`;
  const cityControlClass = `${classes.control} ${
    !formValidity.city ? classes.invalid : ''
  }`;

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={nameControlClass}>
        <label htmlFor='name'>Your Name</label>
        <input id='name' type='text' ref={nameInputRef} />
        {!formValidity.name && (
          <p className={classes['error-text']}>Please enter your name</p>
        )}
      </div>
      <div className={streetControlClass}>
        <label htmlFor='address'>Street</label>
        <input id='street' type='text' ref={streetInputRef} />
        {!formValidity.street && (
          <p className={classes['error-text']}>Please enter your street</p>
        )}
      </div>
      <div className={postalCodeControlClass}>
        <label htmlFor='postal'>Postal Code</label>
        <input id='postal' type='text' ref={postalCodeInputRef} />
        {!formValidity.postalCode && (
          <p className={classes['error-text']}>Please enter your postal code</p>
        )}
      </div>
      <div className={cityControlClass}>
        <label htmlFor='city'>City</label>
        <input id='city' type='text' ref={cityInputRef} />
        {!formValidity.city && (
          <p className={classes['error-text']}>Please enter your city</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit' className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
