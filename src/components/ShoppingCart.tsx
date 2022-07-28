import { useShoppingCartContext } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import CloseBox from "./icons/CloseBox";

export default function ShoppingCart() {
  const { closeCart, isCartOpen, cartItems } = useShoppingCartContext();

  return (
    <div className='shoppingcart__container' data-open={isCartOpen}>
      <div className='btn__close__container'>
        <div className='btn__close'>
          <button onClick={closeCart}>
            <CloseBox />
          </button>
        </div>
      </div>
      <h3>Shopping Cart</h3>
      <ul>
        {cartItems.map((item) => {
          return (
            <li key={item.id}>
              <CartItem {...item} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
