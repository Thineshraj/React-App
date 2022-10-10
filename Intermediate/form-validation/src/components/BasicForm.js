import useInput3 from '../hooks/use-input3';

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValidInput: isInputFNameValid,
    hasError: fNameHasError,
    valueChangeHandler: fNameChangeHandler,
    valueOnBlurHandler: fNameOnBlurHandler,
    reset: fNameInputReset,
  } = useInput3((value) => value.trim() !== '');
  const {
    value: enteredLastName,
    isValidInput: isInputLNameValid,
    hasError: lNameHasError,
    valueChangeHandler: lNameChangeHandler,
    valueOnBlurHandler: lNameOnBlurHandler,
    reset: lNameInputReset,
  } = useInput3((value) => value.trim() !== '');
  const {
    value: enteredEmail,
    isValidInput: isInputEmailValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueOnBlurHandler: emailOnBlurHandler,
    reset: emailInputReset,
  } = useInput3((value) => value.trim() !== '' && value.includes('@'));

  let isFormValid = false;
  if (isInputFNameValid && isInputLNameValid && isInputEmailValid) {
    isFormValid = true;
  }

  // SUBMIT FORM
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return;
    }
    console.log(enteredFirstName, enteredLastName, enteredEmail);
    fNameInputReset();
    lNameInputReset();
    emailInputReset();
  };

  // Error Classname
  const fNameError = fNameHasError ? 'form-control invalid' : 'form-control';
  const lNameError = lNameHasError ? 'form-control invalid' : 'form-control';
  const emailError = emailHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={fNameError}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={enteredFirstName}
            onChange={fNameChangeHandler}
            onBlur={fNameOnBlurHandler}
          />
          {fNameHasError && (
            <p className='error-text'>First Name must be entered</p>
          )}
        </div>
        <div className={lNameError}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={enteredLastName}
            onChange={lNameChangeHandler}
            onBlur={lNameOnBlurHandler}
          />
          {lNameHasError && (
            <p className='error-text'>Last Name must be entered</p>
          )}
        </div>
      </div>
      <div className={emailError}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailOnBlurHandler}
        />
        {emailHasError && <p className='error-text'>Email must be entered</p>}
      </div>
      <div className='form-actions'>
        <button type='submit' disabled={!isFormValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
