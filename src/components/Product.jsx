import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../context/AddToCartContext";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const ProductItem = ({ product }) => {
  const {
    addItemToCart,
    isProductInCart,
    getCartItem,
    incrementQuantity,
    decrementQuantity,
  } = useCartContext();

  const inCart = isProductInCart(product.name);
  const quantity = inCart ? getCartItem(product.name).quantity : 0;

  return (
    <div className="flex flex-col">
      {/* Image container with responsive sources */}
      <div className="flex-[3] relative">
        <picture>
          <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
          <source media="(min-width: 768px)" srcSet={product.image.tablet} />
          <source media="(max-width: 767px)" srcSet={product.image.mobile} />
          <img
            src={product.image.thumbnail}
            alt={product.name}
            loading="lazy"
            className={`w-full h-full rounded-[10px] border-2 ${
    inCart ? 'border-red' : 'border-rose-300'
  }`}
          />
        </picture>

        {/* Wrapper to fix height for button and quantity selector */}
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[60%] h-[44px]">
          {!inCart ? (
            <button
              onClick={() => addItemToCart(product)}
              className="w-full bg-white py-2 rounded-[20px] border border-rose-300 flex gap-2 justify-center 
                cursor-pointer font-Red-Hat-Text font-semibold hover:border-red hover:text-red"
            >
              <FontAwesomeIcon icon={faCartPlus} className="text-red text-lg" />
              Add to Cart
            </button>
          ) : (
            <div className="w-full bg-red text-white py-2 rounded-[20px] flex items-center justify-center gap-12 font-semibold">
              <button onClick={() => decrementQuantity(product.name)} aria-label="Decrease quantity">
                <CiCircleMinus className="text-white text-2xl font-bold "/>
              </button>
              <span>{quantity}</span>
              <button onClick={() => incrementQuantity(product.name)} aria-label="Increase quantity">
               <CiCirclePlus className="text-white text-2xl font-bold"/>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="relative flex-1 mt-4">
        {/* Product details */}
        <p className="text-rose-400 text-[14px] font-medium mt-[25px]">{product.category}</p>
        <p className="font-bold">{product.name}</p>
        <p className="font-bold text-red">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductItem;
