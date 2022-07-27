import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  photographer: string;
  unsplashProfile: string;
  imgUrl: string;
  websiteUrl: string;
};

export default function Product({ id, name, price, imgUrl }: ProductProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCartContext();

  const quantity = getItemQuantity(id);

  return (
    <article className='product__container'>
      <div className='product__img'>
        <img src={imgUrl} alt={name} />
      </div>
      <div className='product__info'>
        <div className='product__title'>
          <h3>{name}</h3>
        </div>
        <div className='product__price'>
          <h6>{formatCurrency(price)}</h6>
        </div>
        <div className='btn__add-to-cart'>
          {quantity === 0 ? (
            <button onClick={() => increaseCartQuantity(id)}>
              + Add to Cart
            </button>
          ) : (
            <div className='control__quantity__container'>
              <div className='btns__change-quantity'>
                <button
                  className='btn__minus'
                  onClick={() => decreaseCartQuantity(id)}
                >
                  -
                </button>
                <div className='quantity'>{quantity}</div>
                <button
                  className='btn__plus'
                  onClick={() => increaseCartQuantity(id)}
                >
                  +
                </button>
              </div>
              <div className='btn__remove-item'>
                <button onClick={() => removeFromCart(id)}>Remove Item</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
