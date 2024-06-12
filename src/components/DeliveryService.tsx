const DeliveryService = () => {
  return (
    <>
      <h1 className="md:p-10 py-5 md:text-3xl text-2xl text-center font-bold">
        How to use delivery{" "}
        <span className="underline md:underline-offset-8 decoration-[#FE9F47] underline-offset-4 decoration-2">
          service
        </span>
      </h1>
      <div className="md:p-10 grid md:grid-cols-3 md:gap-10 p-5 gap-5 grid-cols-1 items-center">
        <div className="text-center space-y-5">
          <img />
          <h1 className="text-2xl font-bold">choose your coffee</h1>
          <p className="font-semibold">there are 20+ coffees for you</p>
        </div>
        <div className="text-center space-y-5">
          <img />
          <h1 className="text-2xl font-bold">We delivery it to you</h1>
          <p className="font-semibold">choose delivery service</p>
        </div>
        <div className="text-center space-y-5">
          <img />
          <h1 className="text-2xl font-bold">Enjoy your coffee</h1>
          <p className="font-semibold">choose delivery service</p>
        </div>
      </div>
    </>
  );
};

export default DeliveryService;
