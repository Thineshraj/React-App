import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const cartButtonHandler = () => {
    dispatch(uiActions.toggleCartShow());
  };
  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartTotalQuantity}</span>
    </button>
  );
};

export default CartButton;
