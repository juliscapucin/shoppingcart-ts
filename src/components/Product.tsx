import { useShoppingCartContext } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

import AddBox from "./icons/AddBox";
import SubtractBox from "./icons/SubtractBox";

type ProductProps = {
  index: number;
  id: number;
  name: string;
  price: number;
  photographer: string;
  unsplashProfile: string;
  imgUrl: string;
  websiteUrl: string;
};

// [row-start, column-start, row-span, column-span]
const gridAreas = [
  [1, 6, 6, 5],
  [7, 1, 6, 5],
  [13, 6, 6, 5],
  [19, 1, 6, 5],
  [25, 6, 6, 5],
  [31, 1, 6, 5],
];

export default function Product({
  index,
  id,
  name,
  price,
  imgUrl,
}: ProductProps) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCartContext();

  const quantity = getItemQuantity(id);
  const gridPosition = gridAreas[index];
  const [row, column, spanRow, spanColumn] = gridPosition;

  return (
    <article
      className='product__container'
      style={{
        gridArea: `${row} / ${column} / span ${spanRow} / span ${spanColumn}`,
      }}
    >
      <div className='product__img'>
        <img src={imgUrl} alt={name} />
      </div>
      <div className='product__info'>
        <div className='product__text'>
          <div className='product__title'>
            <h3>{name}</h3>
          </div>
          <div className='product__price'>
            <h6>{formatCurrency(price)}</h6>
          </div>
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
                  <SubtractBox />
                </button>
                <div className='quantity'>{quantity}</div>
                <button
                  className='btn__plus'
                  onClick={() => increaseCartQuantity(id)}
                >
                  <AddBox />
                </button>
              </div>
              <div className='btn__remove-item'>
                <button onClick={() => removeFromCart(id)}>
                  <p>Remove</p>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
