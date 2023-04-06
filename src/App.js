import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotal } from "./features/cart/cartSlice";
import {useEffect} from 'react';
import Modal from "./components/Modal";
import { getCartItems } from "./features/cart/cartSlice";

function App() {
  const {cartItems, isLoading} = useSelector(store => store.cart);
  const {isOpen} = useSelector(store => store.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal())
  }, [cartItems]);
  useEffect(() => {
    dispatch(getCartItems())
  }, []);
  return (
    <>
      {isLoading && 
        <div className='loading'>
          <h1>Loading...</h1>
        </div>
      }
      <div className="App">
        {isOpen && <Modal />}
        <Navbar />
        <CartContainer />
      </div>
    </>
  );
}

export default App;
