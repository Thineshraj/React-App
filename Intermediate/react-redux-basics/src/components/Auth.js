import classes from './Auth.module.css';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Auth = () => {
  const dispatch = useDispatch();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' required={true} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' required={true} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
