import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import CartItem from "./CartItem";
import CloseBox from "./icons/CloseBox";

import products from "../data/products.json";

type ShoppingCartProps = {
  id: number;
  quantity: number;
};

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
      <div className='shoppingcart__total'>
        <h4>
          {`Total: 
          ${formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const product = products.find(
                (product) => product.id === cartItem.id
              );
              return total + (product?.price || 0) * cartItem.quantity;
            }, 0)
          )}`}
        </h4>
      </div>
    </div>
  );
}
