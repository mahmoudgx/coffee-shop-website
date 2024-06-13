import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const DiscountBanner: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="relative bg-cover bg-center py-16 px-8 rounded-xl overflow-hidden max-w-6xl mx-auto"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1579533555864-545dcdff5a43?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* Black overlay */}
      <motion.div
        ref={ref}
        className="relative max-w-2xl mx-auto text-center text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Subscribe to get 50% discount price
        </h2>
        <motion.form
          className="flex flex-col md:flex-row items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative w-full md:max-w-md">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 rounded-full text-gray-800 focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full bg-black text-white py-2 px-6 rounded-full"
            >
              Order now
            </button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default DiscountBanner;
