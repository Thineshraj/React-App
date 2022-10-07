import { Fragment, useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../context/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const [isBtnBump, setIsBtnBump] = useState(false);
  const cartCtx = useContext(CartContext);
  const updatedBadge = cartCtx.items.reduce((curVal, item) => {
    return curVal + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${isBtnBump ? classes.bump : ''}`;
  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setIsBtnBump(true);

    const timer = setTimeout(() => {
      setIsBtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);
  return (
    <Fragment>
      <button className={btnClasses} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{updatedBadge}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
