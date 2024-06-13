import React from "react";
import { CiShoppingCart } from "react-icons/ci";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Define the interface for the menu items
interface MenuItemProps {
  item: {
    title: string;
    description: string;
    price: string;
    image: string;
  };
}

const menuItems: MenuItemProps["item"][] = [
  {
    title: "Sandwich",
    description: "Bread with meat and vegetables",
    price: "12 K",
    image:
      "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hot Milk",
    description: "Hot Milk with less sugar",
    price: "12 K",
    image:
      "https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Coffee Ice Cream",
    description: "Coffee with ice cream vanilla",
    price: "12 K",
    image:
      "https://images.unsplash.com/photo-1436491911682-72ab1d398f59?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Cappuccino",
    description: "Hot Cappuccino",
    price: "12 K",
    image:
      "https://images.unsplash.com/photo-1504289680139-740413aa1de6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Mochaccino",
    description: "Hot Mochaccino",
    price: "12 K",
    image:
      "https://plus.unsplash.com/premium_photo-1663853491467-851c6649fde2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Waffle Ice Cream",
    description: "Waffle with Ice Cream",
    price: "12 K",
    image:
      "https://images.unsplash.com/photo-1562513872-634b8fae6dbe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const SpecialMenu: React.FC = () => {
  return (
    <>
      <h1 className="md:p-10 py-5 md:text-3xl text-2xl text-center font-bold">
        Special menu{" "}
        <span className="underline md:underline-offset-8 decoration-[#FE9F47] underline-offset-4 decoration-2">
          for you
        </span>
      </h1>
      <div className="md:p-10 grid md:grid-cols-3 md:gap-8 p-5 gap-5 grid-cols-1 items-center">
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="border-4 rounded-xl md:h-[450px] overflow-hidden border-red-300"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <div className="bg-white space-y-5 p-5">
        <img className="rounded-lg" src={item.image} alt={item.title} />
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">{item.title}</h1>
          <h1 className="font-bold text-xl">{item.price}</h1>
        </div>
        <div className="flex justify-between">
          <div className="flex space-x-2 w-1/2 font-semibold text-gray-500 items-center">
            <p>{item.description}</p>
          </div>
          <button className="bg-red-300 flex justify-center items-center rounded-full w-[40px] h-[40px]">
            <CiShoppingCart size={30} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default SpecialMenu;
