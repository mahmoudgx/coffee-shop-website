import { CiShoppingCart } from "react-icons/ci";

const SpecialMenu = () => {
  return (
    <>
      <h1 className="md:p-10 py-5 md:text-3xl text-2xl text-center font-bold">
        Special menu{" "}
        <span className="underline md:underline-offset-8 decoration-[#FE9F47] underline-offset-4 decoration-2">
          for you
        </span>
      </h1>
      <div className="md:p-10 grid md:grid-cols-3 md:gap-8 p-5 gap-5 grid-cols-1 items-center">
        <div className="  border-4 rounded-xl md:h-[450px] overflow-hidden border-red-300">
          <div className="bg-white space-y-5 p-5">
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-xl">Sandwich</h1>
              <h1 className="font-bold text-xl">12 K</h1>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-2 w-1/2 font-semibold text-gray-500 items-center">
                <p>Bread with meat and vegetables</p>
              </div>
              <button className="bg-red-300 flex justify-center items-center rounded-full w-[40px] h-[40px]">
                <CiShoppingCart size={30} />
              </button>
            </div>
          </div>
        </div>
        <div className="  border-4 rounded-xl md:h-[450px] overflow-hidden border-red-300">
          <div className="bg-white space-y-5 p-5">
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Hot Milk</h1>
              <h1 className="font-bold text-xl">12 K</h1>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-2 w-1/2 font-semibold text-gray-500 items-center">
                <p>Hot Milk with less sugar</p>
              </div>
              <button className="bg-red-300 flex justify-center items-center rounded-full w-[40px] h-[40px]">
                <CiShoppingCart size={30} />
              </button>
            </div>
          </div>
        </div>
        <div className=" rounded-xl overflow-hidden border-4 md:h-[450px] border-red-300">
          <div className="bg-white space-y-5 p-5">
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1436491911682-72ab1d398f59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Coffee Ice Cream</h1>
              <h1 className="font-bold text-xl">12 K</h1>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-2 w-1/2 font-semibold text-gray-500 items-center">
                <p>Coffee with ice cream vanilla</p>
              </div>
              <button className="bg-red-300 flex justify-center items-center rounded-full w-[40px] h-[40px]">
                <CiShoppingCart size={30} />
              </button>
            </div>
          </div>
        </div>
        <div className=" rounded-xl overflow-hidden border-4 md:h-[450px] border-red-300">
          <div className="bg-white space-y-5 p-5">
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1504289680139-740413aa1de6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Cappuccino</h1>
              <h1 className="font-bold text-xl">12 K</h1>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-2 w-1/2 font-semibold text-gray-500 items-center">
                <p>Hot Cappuccino</p>
              </div>
              <button className="bg-red-300 flex justify-center items-center rounded-full w-[40px] h-[40px]">
                <CiShoppingCart size={30} />
              </button>
            </div>
          </div>
        </div>
        <div className=" rounded-xl overflow-hidden border-4 md:h-[450px] border-red-300">
          <div className="bg-white space-y-5 p-5">
            <img
              className="rounded-lg"
              src="https://plus.unsplash.com/premium_photo-1663853491467-851c6649fde2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Mochaccino</h1>
              <h1 className="font-bold text-xl">12 K</h1>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-2 w-1/2 font-semibold text-gray-500 items-center">
                <p>Hot Mochaccino</p>
              </div>
              <button className="bg-red-300 flex justify-center items-center rounded-full w-[40px] h-[40px]">
                <CiShoppingCart size={30} />
              </button>
            </div>
          </div>
        </div>
        <div className=" rounded-xl overflow-hidden border-4 md:h-[450px] border-red-300">
          <div className="bg-white space-y-5 p-5">
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1562513872-634b8fae6dbe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Waffle Ice Cream</h1>
              <h1 className="font-bold text-xl">12 K</h1>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-2 w-1/2 font-semibold text-gray-500 items-center">
                <p>Waffle with Ice Cream</p>
              </div>
              <button className="bg-red-300 flex justify-center items-center rounded-full w-[40px] h-[40px]">
                <CiShoppingCart size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialMenu;
