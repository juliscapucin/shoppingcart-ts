import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

import products from "../data/products.json";
import Delete from "./icons/Delete";
import QuantityControl from "./QuantityControl";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCartContext();
  const product = products.find((product) => product.id === id);

  if (product == null) return null;

  return (
    <div className='cartitem__container'>
      <button
        className='cartitem__btn__delete'
        onClick={() => removeFromCart(product.id)}
      >
        <Delete />
      </button>
      <div className='cartitem__img__container'>
        <img src={product.imgUrl} alt={product.name} />
      </div>
      <div className='cartitem__info'>
        <div className='cartitem__name'>
          <h4>{product.name}</h4>
        </div>
        <h6>{formatCurrency(product.price)}</h6>
        <QuantityControl quantity={quantity} id={id} />
      </div>
      <div className='cartitem__total'>
        <p>
          <strong>{`Subtotal: ${formatCurrency(
            product.price * quantity
          )}`}</strong>
        </p>
      </div>
    </div>
  );
}
