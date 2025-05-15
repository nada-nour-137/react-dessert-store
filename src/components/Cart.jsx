import React from "react";


import { useCartContext } from "../context/AddToCartContext";


import CartItem from './CartItem';

const Cart = ({ setIsModalOpen }) => {
  const { cartItems, totalCartItemsCount, totalOrderPrice } = useCartContext();

  return (
    <div  className="flex-1 bg-white h-fit p-5 rounded-[10px]">
      <h4 className="text-red font-bold">Your Cart ({totalCartItemsCount})</h4>
      {!totalCartItemsCount ? (
        <div className="flex flex-col justify-center items-center p-6">
          <img
            src="images/illustration-empty-cart.svg"
            alt="empty cart"
            loading="lazy"
          />
          <p className="text-rose-900 font-bold text-sm">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <CartItem key={index} cartItem={item} />
          ))}
          <div className="flex justify-between my-5">
            <p className="text-rose-900 text-base">Order Total</p>
            <p className="font-bold text-rose-900">${totalOrderPrice.toFixed(2)}</p>
          </div>
          <div className="flex gap-1.5 bg-rose-50 justify-center p-2.5 text-sm rounded-lg mb-6">
            <img src="images/icon-carbon-neutral.svg" alt="carbon-neutral" loading="lazy" />
            <p >
              This is a <span className="font-semibold">carbon-neutral</span>{" "}
              delivery
            </p>
          </div>
          <button
             className="w-full bg-red py-2 rounded-[20px] border border-rose-300 flex gap-2 justify-center 
                cursor-pointer font-Red-Hat-Text font-semibold hover:border-red hover:text-red hover:bg-white text-white"

            onClick={() => setIsModalOpen(true)}
          >
            Confirm Order
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;