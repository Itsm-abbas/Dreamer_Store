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
    <footer className="border-gray-300 border-t-2 text-black body-font">
      <div className="px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
        <div className="flex-shrink-0">
          <Link href={"/"}>
            <span className="cursor-pointer text-xl font-bold text-black">
              Dreamer&nbsp;
            </span>
          </Link>
          <span className="text-xl text-black">Store</span>
        </div>
        <p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2022 dreamer store —
          <a
            href="https://twitter.com/anwarabbas2000"
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
          <a className="ml-3 text-gray-500">
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
