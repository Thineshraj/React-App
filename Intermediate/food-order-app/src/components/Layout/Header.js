import { Fragment } from 'react';
import CartButton from './HeaderCartButton';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <CartButton onClick={props.onClick} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='Table full of meals' />
      </div>
    </Fragment>
  );
};

export default Header;
