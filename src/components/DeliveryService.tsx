import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const DeliveryService = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
      },
    }),
  };

  return (
    <>
      <h1 className="md:p-10 py-5 md:text-3xl text-2xl text-center font-bold">
        How to use delivery{" "}
        <span className="underline md:underline-offset-8 decoration-[#FE9F47] underline-offset-4 decoration-2">
          service
        </span>
      </h1>
      <div
        ref={ref}
        className="md:p-10 grid md:grid-cols-3 md:gap-10 p-5 gap-5 grid-cols-1 items-center"
      >
        {[
          "choose your coffee",
          "We deliver it to you",
          "Enjoy your coffee",
        ].map((title, index) => (
          <motion.div
            key={title}
            className="text-center space-y-5"
            custom={index}
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <img
              className="mx-auto"
              width={100}
              src={
                title === "choose your coffee"
                  ? "https://www.svgrepo.com/show/530622/milk-tea.svg"
                  : title === "We deliver it to you"
                  ? "https://www.svgrepo.com/show/530636/suv.svg"
                  : "https://www.svgrepo.com/show/530627/sunbathing.svg"
              }
            />
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="font-semibold">
              {title === "choose your coffee"
                ? "there are 20+ coffees for you"
                : "choose delivery service"}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default DeliveryService;
