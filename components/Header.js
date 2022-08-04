import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import { logoutUser } from "../redux/User/user.action";
import {
  FaBars,
  FaTimes,
  FaRegHeart,
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaRegUser,
} from "react-icons/fa";
import DropDown from "./Dropdown";
import Cookies from "js-cookie";
function Nav() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(0);
  const IsLoggedIn = useSelector((state) => state.User.isLoggedIn);
  const cart = useSelector((state) => state.Cart.cart);
  const wishList = useSelector((state) => state.Cart.wishList);
  const user = useSelector((state) => state.User.user);
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
      <nav className="bg-white text-black shadow-md dark:bg-gray-700 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 ">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href={"/"}>
                  <span className="cursor-pointer text-xl font-bold ">
                    Dreamer&nbsp;
                    <span className="text-xl  font-normal">Store</span>
                  </span>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href={"/"}>
                    <a className="dark:hover:bg-white dark:hover:text-black  hover:bg-gray-700 hover:text-white  block px-3 py-2 rounded-md text-base font-medium">
                      Home
                    </a>
                  </Link>

                  <Link href={"/about"}>
                    <a className=" dark:hover:bg-white dark:hover:text-black  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      About
                    </a>
                  </Link>

                  <Link href={"/contact"}>
                    <a className=" dark:hover:bg-white dark:hover:text-black  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Contact
                    </a>
                  </Link>
                  <Link href={"/wishList"}>
                    <a className=" dark:hover:bg-white dark:hover:text-black  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                      Wish List
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className=" flex items-center">
              <div className="flex items-center justify-center">
                {IsLoggedIn ? (
                  <button className="hidden sm:flex mr-5">
                    <DropDown />
                  </button>
                ) : (
                  <Link href={"/login-register"}>
                    <button className="relative  flex items-center  dark:hover:bg-white dark:hover:text-black  hover:bg-gray-700 hover:text-white px-3 py-2 md:mr-6 rounded-md text-base font-medium">
                      <FaRegUser className="text-xl md:text-2xl" />
                    </button>
                  </Link>
                )}
              </div>

              <Link href={"/cart"}>
                <button className="relative mr-3 md:mr-6 flex items-center capitalize dark:hover:bg-white dark:hover:text-black  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                  <FaShoppingCart className="text-xl md:text-2xl mr-2 " />
                  <p className=" font-bold">({cartItems})</p>
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
                  <button className="relative  flex items-center  dark:hover:bg-white dark:hover:text-black  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                    <FaBars className="text-xl " />
                  </button>
                ) : (
                  <button className="relative  flex items-center  dark:hover:bg-white dark:hover:text-black  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                    <FaTimes className="text-xl " />
                  </button>
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
                  <a className="hover:bg-gray-700 dark:hover:bg-white dark:hover:text-black  hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </a>
                </Link>

                <Link href={"/about"}>
                  <a className=" hover:bg-gray-700 dark:hover:bg-white dark:hover:text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    About
                  </a>
                </Link>

                <Link href={"/contact"}>
                  <a className=" hover:bg-gray-700 dark:hover:bg-white dark:hover:text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Contact
                  </a>
                </Link>
                <Link href={"/wishList"}>
                  <a className=" hover:bg-gray-700 dark:hover:bg-white dark:hover:text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Wish List
                  </a>
                </Link>
                {IsLoggedIn && (
                  <>
                    <Link href={`/profile?id=${user._id}`}>
                      <a className=" hover:bg-gray-700 dark:hover:bg-white dark:hover:text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                        Profile
                      </a>
                    </Link>
                    <a
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                      className=" hover:bg-gray-700 dark:hover:bg-white dark:hover:text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      Sign out
                    </a>
                  </>
                )}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
