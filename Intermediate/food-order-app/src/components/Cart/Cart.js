import { useContext, useState } from 'react';
import Modal from '../UI/Modal';
import CartContext from '../../context/cart-context';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';
// import useHttp from '../../hooks/use-http';
import classes from './Cart.module.css';

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [didFormSubmit, setDidFormSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  // const { sendRequest: postRequest } = useHttp();

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const cartItemRemove = (id) => {
    cartCtx.removeItem(id);
  };
  const cartAddItems = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  // const orderConfirmHandler = (userData) => {
  //   postRequest({
  //     url: 'https://udemy-food-app-6f556-default-rtdb.firebaseio.com/orders.json',
  //     method: 'POST',
  //     body: { user: userData, orderedItems: cartCtx.items },
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  // };
  const orderConfirmHandler = async (userData) => {
    setIsFormSubmit(true);
    await fetch(
      'https://udemy-food-app-6f556-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsFormSubmit(false);
    setDidFormSubmit(true);
    cartCtx.clearCart();
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={cartItemRemove.bind(null, item.id)}
            onAdd={cartAddItems.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const formModel = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <CheckoutForm
          onConfirm={orderConfirmHandler}
          onCancel={props.onClose}
        />
      )}
      {!isCheckout && (
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button className={classes.button} onClick={orderHandler}>
              Order
            </button>
          )}
        </div>
      )}
    </>
  );

  const formSubmitedModel = (
    <>
      <p>Form submited successfully</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isFormSubmit && !didFormSubmit && formModel}
      {isFormSubmit && <p>Form submitting...</p>}
      {!isFormSubmit && didFormSubmit && formSubmitedModel}
    </Modal>
  );
};

export default Cart;
