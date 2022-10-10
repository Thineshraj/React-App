import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    valueOnBlurHandler: nameOnBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailHasError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    valueOnBlurHandler: emailOnBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.trim() !== '' && value.includes('@'));

  let formIsValid = false;
  if (enteredNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!enteredNameIsValid && !emailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClass = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailErrorClass = emailHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClass}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameOnBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className='error-text'>Must enter name</p>}
      </div>
      <div className={emailErrorClass}>
        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailOnBlurHandler}
        />
        {emailHasError && <p className='error-text'>Must enter email</p>}
      </div>

      <div className='form-actions'>
        <button disabled={!formIsValid} type='submit'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
