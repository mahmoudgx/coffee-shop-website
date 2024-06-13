// src/Footer.tsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3d405b] text-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/90/Coffee-2346113.svg"
            width={50}
            className="mb-5"
          />
          <p className="text-gray-300">
            We provide quality coffee, and ready to deliver.
          </p>
          <p className="text-gray-300 mt-2">© 2024 Coffee Company</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul>
            <li className="mb-2">
              <a href="#" className="">
                About us
              </a>
            </li>
            <li className="mb-2">
              <a href="#">Our Product</a>
            </li>
            <li className="mb-2">
              <a href="#">Delivery</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Legal</h4>
          <ul>
            <li className="mb-2">
              <a href="#">Privacy Policy</a>
            </li>
            <li className="mb-2">
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
