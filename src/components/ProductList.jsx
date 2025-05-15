import React from "react";
import { useCartContext } from "../context/AddToCartContext";
import Product from "./Product";

const ProductList = () => {
  const { products } = useCartContext();

  return (
    <div className="flex-1 px-4">
      <h2 className="text-3xl font-bold mb-4">Desserts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
