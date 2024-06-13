import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="bg-[#F6EBDA] grid md:grid-cols-2 grid-cols-1 h-full p-5 items-center space-y-5 md:p-[5rem]"
    >
      <motion.div
        className="md:space-y-5 space-y-2"
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        <div className="md:text-6xl text-3xl font-bold md:text-left text-center leading-tight">
          <h1>
            Enjoy your <span className="text-[#FE9F47]">coffee</span>
            <br /> before your activity
          </h1>
        </div>
        <p className="text-gray-500 md:text-left text-center md:text-xl text-md">
          Boost your productivity and build your
          <br /> mood with a glass of coffee in the morning
        </p>
        <div className="flex md:justify-start justify-center space-x-5">
          <button className="bg-black text-white md:text-md text-sm font-semibold rounded-full py-2 px-10">
            Order now
          </button>
          <button className="text-[#FE9F47] font-semibold md:text-md text-sm">
            More menu
          </button>
        </div>
      </motion.div>
      <motion.div
        className="md:w-[400px] md:place-self-end md:h-[400px] w-[250px] h-[250px] rounded-full shadow-md shadow-black relative mx-auto md:mx-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        <img
          className="rounded-full w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Coffee"
        />
        <motion.div
          className="absolute bottom-0 left-0 md:w-[150px] w-[100px]"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src="https://www.svgrepo.com/show/530622/milk-tea.svg"
            alt="18k"
          />
        </motion.div>
        <motion.div
          className="absolute top-0 left-0 md:w-[120px] w-[80px]"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img
            src="https://www.svgrepo.com/show/530623/ice-cream.svg"
            alt="Cappuccino"
          />
        </motion.div>
        <motion.div
          className="absolute top-20 md:right-[-50px] right-[-30px] md:w-[120px] w-[80px]"
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img
            src="https://www.svgrepo.com/show/530624/coconut-tree.svg"
            alt="Cappuccino"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
