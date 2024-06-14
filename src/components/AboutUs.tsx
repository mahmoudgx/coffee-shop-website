import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AboutUs: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center md:flex-row md:items-center bg-[#f8ede3] md:px-20 px-5 py-10 overflow-hidden max-w-full" // Added max-w-full
    >
      <motion.div
        className="w-full md:w-1/2 h-full flex justify-center mb-4 md:mb-0 relative"
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Coffee cup"
          className="rounded-lg w-full max-w-sm"
        />
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left md:space-y-10 space-y-5 mt-10 md:mt-0"
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <h1 className="py-5 md:text-3xl text-2xl font-bold">
          About{" "}
          <span className="underline md:underline-offset-8 decoration-[#FE9F47] underline-offset-4 decoration-2">
            Us
          </span>
        </h1>
        <p className="text-xl mb-2">
          We provide quality coffee, and ready to deliver.
        </p>
        <p className="text-gray-700 text-xl mb-4">
          We are a company that makes and distributes delicious drinks. Our main
          product is made with a secret recipe and available in stores
          worldwide.
        </p>
        <button className="bg-black text-white md:text-md text-sm font-semibold rounded-full py-2 px-10">
          Get your coffee
        </button>
      </motion.div>
    </div>
  );
};

export default AboutUs;
