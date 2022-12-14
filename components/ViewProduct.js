/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../redux/Cart/cart.actions";
import { AddToWishlist, RemoveFromWishlist } from "../redux/Cart/cart.actions";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import Image from "next/image";
import { useRouter } from "next/router";
const ViewProduct = ({ product }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const IsLoggedIn = useSelector((state) => state.User.isLoggedIn);
  const WishList = useSelector((state) => state.Cart.wishList);
  const { id, image, title, price, brand, desc, reviews, category } = product;
  const InWishList = WishList.some((item) => item.id === id);
  const rendered = [];
  for (let i = 0; i < 5; i++) {
    if (i < reviews) {
      rendered.push(
        <svg
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 text-indigo-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      );
    } else {
      rendered.push(
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 text-gray-500"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      );
    }
  }
  const addToCart = () => {
    if (IsLoggedIn) {
      dispatch(AddToCart(id));
    } else {
      alert("You have to logged in first");
      router.push("/login-register");
    }
  };

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="container px-5 py-16 mx-auto">
        <div className="lg:w-11/12 mx-auto flex flex-wrap">
          <Image
            alt="ecommerce"
            height={400}
            width={400}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-between">
            <div>
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {brand}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {rendered}

                  <span className="text-gray-600 ml-3">{reviews} Reviews</span>
                </span>
              </div>
              <p className="leading-relaxed">{desc}</p>
            </div>
            {category !== "Laptop" && (
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    {category === "Shoes" ? (
                      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                      </select>
                    ) : (
                      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                    )}
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            )}
            <div className="flex justify-between">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${price}
              </span>
              <button
                onClick={() => addToCart()}
                className=" ml-auto text-white bg-gray-700 py-2 px-6 focus:outline-none hover:bg-gray-600"
              >
                Add to Cart
              </button>
              {InWishList ? (
                <button
                  onClick={() => dispatch(RemoveFromWishlist(id))}
                  className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                >
                  <FaHeart className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={() => dispatch(AddToWishlist(id))}
                  className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                >
                  <FaRegHeart className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ViewProduct;
