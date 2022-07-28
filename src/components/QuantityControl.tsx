import { useShoppingCartContext } from "../context/ShoppingCartContext";
import AddBox from "./icons/AddBox";
import SubtractBox from "./icons/SubtractBox";

type QuantityControlProps = {
  id: number;
  quantity: number;
};

export default function QuantityControl({
  quantity,
  id,
}: QuantityControlProps) {
  const { decreaseCartQuantity, increaseCartQuantity } =
    useShoppingCartContext();

  return (
    <div className='control__quantity__container'>
      <div className='btns__change-quantity'>
        <button className='btn__minus' onClick={() => decreaseCartQuantity(id)}>
          <SubtractBox />
        </button>
        <div className='quantity'>{quantity}</div>
        <button className='btn__plus' onClick={() => increaseCartQuantity(id)}>
          <AddBox />
        </button>
      </div>
    </div>
  );
}
