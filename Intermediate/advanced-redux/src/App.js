import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { useSelector, useDispatch } from 'react-redux';
import { sendCartData, fetchCartData } from './store/cart-actions';

let initialShow = true;

function App() {
  const dispatch = useDispatch();
  const isCartShow = useSelector((state) => state.ui.isCartShow);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (initialShow) {
      initialShow = false;
      return;
    }

    if (cart.isCartChanged) {
      dispatch(sendCartData(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}

      <Layout>
        {isCartShow && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
