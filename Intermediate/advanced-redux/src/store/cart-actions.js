import { uiActions } from './ui-slice';
import { cartActions } from './cart';

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const res = await fetch(
        'https://advanced-redux-610b7-default-rtdb.firebaseio.com/cart.json'
      );

      if (!res.ok) {
        throw new Error('Cart fetching fail!');
      }

      const data = await res.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity || 0,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error...',
          message: 'Fail sending cart data!',
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!',
      })
    );

    const sendReq = async () => {
      const res = await fetch(
        'https://advanced-redux-610b7-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify(cart),
        }
      );
      if (!res.ok) {
        throw new Error('Sending cart data fail.');
      }
    };

    try {
      await sendReq();
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success...',
          message: 'Cart data send successfully!',
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error...',
          message: 'Fail sending cart data!',
        })
      );
    }
  };
};
