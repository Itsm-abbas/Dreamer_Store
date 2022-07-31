import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import {
  FaBars,
  FaTimes,
  FaRegHeart,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaRegUser,
} from "react-icons/fa";
import DropDown from "./dropdown";
import Cookies from "js-cookie";
function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const IsLoggedIn = useSelector((state) => state.User.isLoggedIn);
  const cart = useSelector((state) => state.Cart.cart);
  const wishList = useSelector((state) => state.Cart.wishList);
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    setCartItems(count);
  }, [cart]);

  return (
    <div className="sticky top-0 left-0 right-0 z-30">
      <ToastContainer
        position="top-center"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-6 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href={"/"}>
                  <span className="cursor-pointer text-xl font-bold text-black">
                    Dreamer&nbsp;
                    <span className="text-xl text-black font-normal">
                      Store
                    </span>
                  </span>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href={"/"}>
                    <a className="hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium">
                      Home
                    </a>
                  </Link>

                  <Link href={"/about"}>
                    <a className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      About
                    </a>
                  </Link>

                  <Link href={"/contact"}>
                    <a className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="text-black flex items-center">
              <div>
                {IsLoggedIn ? (
                  <button className="mr-3 md:mr-6  ">
                    <DropDown />
                  </button>
                ) : (
                  <Link href={"/login-register"}>
                    <button className="mr-3 md:mr-6  ">
                      <FaRegUser className=" text-xl md:text-2xl  hover:text-blue-700" />
                    </button>
                  </Link>
                )}
              </div>
              <button className="mr-3 md:mr-6">
                <FaSearch className="text-xl md:text-2xl  hover:text-blue-700" />
              </button>
              <Link href={"/cart"}>
                <button className="relative mr-3 md:mr-6 flex items-center capitalize hover:text-blue-700">
                  <FaShoppingCart className="text-xl md:text-2xl mr-2 " />
                  <p className="text-gray-800 font-bold">Bag ({cartItems})</p>
                </button>
              </Link>
              <Link href={"/wishList"}>
                <button className="relative mr-6 md:mr-0 ">
                  {wishList.length > 0 ? (
                    <FaHeart className="text-xl md:text-2xl hover:text-blue-700" />
                  ) : (
                    <FaRegHeart className="text-xl md:text-2xl hover:text-blue-700" />
                  )}
                  <p className="absolute -top-3 -right-3 text-base font-bold">
                    {wishList.length}
                  </p>
                </button>
              </Link>
              <button
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <FaBars className="text-xl " />
                ) : (
                  <FaTimes className="text-xl " />
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href={"/"}>
                  <a className="hover:bg-gray-700 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </a>
                </Link>

                <Link href={"/about"}>
                  <a className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    About
                  </a>
                </Link>

                <Link href={"/contact"}>
                  <a className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Contact
                  </a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
