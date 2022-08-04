import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaTicketAlt,
} from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="border-gray-300 border-t-2 bg-white text-black shadow-md dark:bg-gray-700 dark:text-white body-font">
      <div className="px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex-shrink-0">
          <Link href={"/"}>
            <span className="cursor-pointer text-xl font-bold ">
              Dreamer&nbsp;
            </span>
          </Link>
          <span className="text-xl ">Store</span>
        </div>
        <p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2022 dreamer store —
          <a
            href="https://abbas.vercel.app"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @Abbas
          </a>
        </p>
        <span className="text-xl inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="">
            <FaFacebook />
          </a>
          <a className="ml-3 ">
            <FaTwitter />
          </a>
          <a className="ml-3 ">
            <FaInstagram />
          </a>
          <a className="ml-3 ">
            <FaLinkedin />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
