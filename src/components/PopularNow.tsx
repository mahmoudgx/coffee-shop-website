import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

const PopularNow = () => {
  const [selectedOptions, setSelectedOptions] = useState({
    vanillaLatte: "hot",
    espresso: "hot",
    hazelnutLatte: "hot",
  });

  const handleOptionChange = (itemName: string, option: string) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [itemName]: option,
    }));
  };

  return (
    <>
      <h1 className="md:p-10 py-5 md:text-3xl text-2xl text-center font-bold">
        Popular{" "}
        <span className="underline md:underline-offset-8 decoration-[#FE9F47] underline-offset-4 decoration-2">
          Now
        </span>
      </h1>
      <div className="md:p-10 grid md:grid-cols-3 md:gap- p-5  gap-5 grid-cols-1 items-center">
        {/* Vanilla Latte */}
        <div className="  border-4 rounded-xl md:h-[450px] overflow-hidden border-red-300">
          <div className="bg-white space-y-5 p-5">
            <img
              className="rounded-lg"
              src="https://plus.unsplash.com/premium_photo-1674327105074-46dd8319164b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="flex justify-between items-center">
              <h1 className="font-bold text-xl">Vanilla Latte</h1>
              <h1 className="font-bold text-xl">21 K</h1>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-2 items-center">
                <button
                  className={`font-bold border-4 px-2 rounded-lg text-md ${
                    selectedOptions.vanillaLatte === "hot"
                      ? "text-red-500 border-red-500"
                      : "text-red-300 border-red-300"
                  }`}
                  onClick={() => handleOptionChange("vanillaLatte", "hot")}
                >
                  Hot
                </button>
                <button
                  className={`font-bold border-4 px-2 rounded-lg text-md ${
                    selectedOptions.vanillaLatte === "cold"
                      ? "text-red-500 border-red-500"
                      : "text-red-300 border-red-300"
                  }`}
                  onClick={() => handleOptionChange("vanillaLatte", "cold")}
                >
                  Cold
                </button>
              </div>
              <button className="bg-red-300 flex justify-center items-center rounded-full w-[40px] h-[40px]">
                <CiShoppingCart size={30} />
              </button>
            </div>
          </div>
        </div>

        {/* Espresso */}
        <div className="  border-4 rounded-xl md:h-[450px] overflow-hidden border-red-300">
          <div className="bg-white space-y-5 p-5">
            <img
              className="rounded-lg"
              src="https://plus.unsplash.com/premium_photo-1676508230445-e0a9a9fc7f0f?q=80&w=1783&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Espresso</h1>
              <h1 className="font-bold text-xl">12 K</h1>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-2 items-center">
                <button
                  className={`font-bold border-4 px-2 rounded-lg text-md ${
                    selectedOptions.espresso === "hot"
                      ? "text-red-500 border-red-500"
                      : "text-red-300 border-red-300"
                  }`}
                  onClick={() => handleOptionChange("espresso", "hot")}
                >
                  Hot
                </button>
                <button
                  className={`font-bold border-4 px-2 rounded-lg text-md ${
                    selectedOptions.espresso === "cold"
                      ? "text-red-500 border-red-500"
                      : "text-red-300 border-red-300"
                  }`}
                  onClick={() => handleOptionChange("espresso", "cold")}
                >
                  Cold
                </button>
              </div>
              <button className="bg-red-300 flex justify-center items-center rounded-full w-[40px] h-[40px]">
                <CiShoppingCart size={30} />
              </button>
            </div>
          </div>
        </div>

        {/* Hazelnut Latte */}
        <div className=" rounded-xl md:h-[450px] overflow-hidden border-4 border-red-300">
          <div className="bg-white space-y-5 p-5">
            <img
              className="rounded-lg"
              src="https://images.unsplash.com/photo-1489866492941-15d60bdaa7e0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="flex justify-between">
              <h1 className="font-bold text-xl">Hazelnut Latte</h1>
              <h1 className="font-bold text-xl">23 K</h1>
            </div>
            <div className="flex justify-between">
              <div className="flex space-x-2 items-center">
                <button
                  className={`font-bold border-4 px-2 rounded-lg text-md ${
                    selectedOptions.hazelnutLatte === "hot"
                      ? "text-red-500 border-red-500"
                      : "text-red-300 border-red-300"
                  }`}
                  onClick={() => handleOptionChange("hazelnutLatte", "hot")}
                >
                  Hot
                </button>
                <button
                  className={`font-bold border-4 px-2 rounded-lg text-md ${
                    selectedOptions.hazelnutLatte === "cold"
                      ? "text-red-500 border-red-500"
                      : "text-red-300 border-red-300"
                  }`}
                  onClick={() => handleOptionChange("hazelnutLatte", "cold")}
                >
                  Cold
                </button>
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

export default PopularNow;
