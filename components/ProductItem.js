import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { AddToWishlist, RemoveFromWishlist } from "../redux/Cart/cart.actions";
const ProductItem = ({ product }) => {
  const { id, image, slug, title, price, category } = product;
  const dispatch = useDispatch();
  const List = useSelector((state) => state.Cart.wishList);
  const InWishList = List.some((item) => item.id === id);

  return (
    <div>
      <div className="relative overflow-hidden group rounded-md">
        <Image
          height={300}
          width={300}
          src={image}
          alt={title}
          layout="responsive"
          className=" transition ease-linear duration-300 object-cover object-center w-full transform hover:scale-110"
        />
        <Link href={`product/${slug}`}>
          <button className="absolute bg-white left-2/4 transform translate-x-[-50%] translate-y-32 bottom-6  text-black mr-6 text-lg  px-8 py-1  rounded-sm  hover:text-white hover:bg-gray-800 group-hover:-translate-y-8">
            View
          </button>
        </Link>
      </div>
      <div className="mt-4">
        <p className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {category}
        </p>
        <div className="flex justify-between">
          <p className="text-gray-900 title-font text-lg font-medium">
            {title}
          </p>
          {InWishList ? (
            <button
              onClick={() => dispatch(RemoveFromWishlist(id))}
              className="text-2xl"
            >
              <FaHeart />
            </button>
          ) : (
            <button
              onClick={() => dispatch(AddToWishlist(id))}
              className="text-2xl"
            >
              <FaRegHeart />
            </button>
          )}
        </div>

        <p className="mt-1">${price}</p>
      </div>
    </div>
  );
};

export default ProductItem;
