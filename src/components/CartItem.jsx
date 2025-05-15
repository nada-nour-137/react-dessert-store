import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useCartContext } from '../context/AddToCartContext';

const CartItem = ({ cartItem }) => {
  const {handleRemoveCartItem}=useCartContext();
  return (
    <div className="flex justify-between items-center py-[10px] px-0 border-b border-solid border-rose-300">
      <div>
        <p className="font-semibold text-rose-900 font-Red-Hat-Text">{cartItem.name}</p>
        <div className='font-semibold font-Red-Hat-Text flex space-x-3'>
          <p className='text-red font-Red-Hat-Text'>{cartItem.quantity}x</p>
          <p className='text-rose-400 font-Red-Hat-Text'> @${cartItem.price.toFixed(2)}</p>
          <p className='text-rose-500 font-Red-Hat-Text'> ${(cartItem.price * cartItem.quantity).toFixed(2)}</p>
        </div>
      </div>

      <button onClick={() => handleRemoveCartItem(cartItem.name)}>
        <AiOutlineCloseCircle className="text-rose-500 hover:text-rose-700 text-xl" />
      </button>
    </div>
  );
};

export default CartItem;
