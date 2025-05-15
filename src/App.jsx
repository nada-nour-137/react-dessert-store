import { useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Modal } from "antd";
import { useCartContext } from "./context/AddToCartContext";
import Cart from "./components/Cart";
import ProductList from './components/ProductList';

function App() {
  const { cartItems, totalOrderPrice, setCartItems } = useCartContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetCart = () => {
    setCartItems([]);
    setIsModalOpen(false);
  };

  return (
    <div className="px-4 py-6 font-redhat max-w-[1600px] mx-auto bg-orange-50">
      {/* Main layout: products and cart side by side on large screens */}
      <div className="lg:flex lg:items-start lg:gap-6">
        
        {/* Left: Product List */}
        <div className="w-full lg:w-2/3">
          <ProductList />
        </div>

        {/* Right: Sticky Cart */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-8">
            <Cart setIsModalOpen={setIsModalOpen} />
          </div>
        </div>
      </div>

      {/* Order Confirmation Modal */}
      <Modal open={isModalOpen} footer={false} closeIcon={false}>
        <div className="text-left flex flex-col font-redhat">
          <IoIosCheckmarkCircleOutline className="text-green text-5xl self-start mb-2 " />
          <h1 className="text-4xl font-bold mb-1">Order Confirmed</h1>
          <p className="text-rose-500 mb-4">We hope you enjoy your food!</p>

          <div className="space-y-4 mb-4 bg-orange-50 p-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-start border-b pb-2">
                <div className="flex items-start space-x-3">
                  <div className="w-16 h-16 overflow-hidden rounded">
                    <img src={item.thumbnail} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm ">
                     <span className="text-red font-semibold"> {item.quantity}x</span> <span className="text-rose-500"> @ ${item.price.toFixed(2)}</span>
                    </p>
                  </div>
                </div>
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))}

            <div className="flex justify-between items-center pt-2">
              <p className="font-semibold text-gray-700">Order Total</p>
              <h3 className="text-lg font-bold">${totalOrderPrice.toFixed(2)}</h3>
            </div>
          </div>

          <button
            className="w-full bg-red py-2 rounded-[20px] border border-rose-300 flex gap-2 justify-center 
                cursor-pointer font-Red-Hat-Text font-semibold hover:border-red hover:text-red hover:bg-white text-white"
            onClick={resetCart}
          >
            Start New Order
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
