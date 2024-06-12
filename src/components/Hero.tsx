import cappuccino from "../assets/cappuccino.png";
import eighteen from "../assets/18k.png";

const Hero = () => {
  return (
    <div className="bg-[#F6EBDA] grid md:grid-cols-2 grid-cols-1 h-full p-5 items-center space-y-5 md:p-[5rem]">
      <div className="md:space-y-5 space-y-2">
        <div className="md:text-6xl text-3xl font-bold leading-tight">
          <h1>
            Enjoy your <span className="text-[#FE9F47]">coffee</span>
            <br /> before your activity
          </h1>
        </div>

        <p className="text-gray-500 md:text-xl text-md">
          Boost your productivity and build your
          <br /> mood with a glass of coffee in the morning
        </p>
        <div className="flex space-x-5">
          <button className="bg-black text-white md:text-md text-sm font-semibold rounded-full py-2 px-10">
            Order now
          </button>
          <button className="text-[#FE9F47] font-semibold md:text-md text-sm">
            More menu
          </button>
        </div>
      </div>
      <div className="md:w-[400px] md:place-self-end md:h-[400px] w-[250px] h-[250px] rounded-full relative mx-auto md:mx-0">
        <img
          className="rounded-full w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Coffee"
        />
        <div className="absolute bottom-0 left-0 md:w-[100px] w-[50px]">
          <img src={eighteen} alt="18k" />
        </div>
        <div className="absolute top-10 left-0 md:w-[250px] w-[150px]">
          <img src={cappuccino} alt="Cappuccino" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
