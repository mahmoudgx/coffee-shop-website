import { useState, useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (menuOpen && !target.closest(".mobile-menu")) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="bg-[#F6EBDA] border-b-2 border-red-300 sticky top-0 z-[9999]">
      <div className="flex justify-between items-center px-5 md:px-20 py-5">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/90/Coffee-2346113.svg"
          width={50}
          className="cursor-pointer"
        />
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl font-semibold">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <div className="hidden md:flex space-x-5 items-center">
          <ul className="flex space-x-5 items-center">
            <li className="text-lg font-semibold cursor-pointer hover:underline underline-offset-8 decoration-[#FE9F47] decoration-2">
              About us
            </li>
            <li className="text-lg font-semibold cursor-pointer hover:underline underline-offset-8 decoration-[#FE9F47] decoration-2">
              Our Product
            </li>
            <li className="text-lg font-semibold cursor-pointer hover:underline underline-offset-8 decoration-[#FE9F47] decoration-2">
              Delivery
            </li>
          </ul>
          <div className="relative flex items-center">
            <FiSearch className="absolute left-3 text-gray-400" />
            <input
              placeholder="Cappuccino"
              className="pl-10 pr-3 py-2 rounded-full shadow-xl focus:outline-none"
            />
          </div>
          <CiShoppingCart size={25} className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-2/3 max-w-xs h-screen bg-[#F6EBDA] shadow-xl z-[9998] transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out mobile-menu`}
      >
        <div className="flex flex-col p-5 space-y-5 h-full">
          <div className="flex justify-between items-center">
            <button onClick={toggleMenu} className="text-2xl font-semibold">
              <FiX />
            </button>
          </div>
          <ul className="flex flex-col space-y-5">
            <li className="text-lg font-semibold cursor-pointer hover:underline underline-offset-8 decoration-[#FE9F47] decoration-2">
              About us
            </li>
            <li className="text-lg font-semibold cursor-pointer hover:underline underline-offset-8 decoration-[#FE9F47] decoration-2">
              Our Product
            </li>
            <li className="text-lg font-semibold cursor-pointer hover:underline underline-offset-8 decoration-[#FE9F47] decoration-2">
              Delivery
            </li>
          </ul>
          <div className="relative flex items-center mt-5">
            <FiSearch className="absolute left-3 text-gray-400" />
            <input
              placeholder="Cappuccino"
              className="pl-10 pr-3 py-2 rounded-full shadow-xl focus:outline-none w-full"
            />
          </div>
        </div>
      </div>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black h-screen opacity-50 z-[9997]"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default NavBar;
