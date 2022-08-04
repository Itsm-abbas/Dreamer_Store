import { BsFilter } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import { category } from "../utils/data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import filter from "../redux/Products/products.action";
import { useState } from "react";
const Home = () => {
  const [value, setValue] = useState("");
  console.log(value);
  let products = useSelector((state) => state.Product.products);
  let filteredProducts = useSelector((state) => state.Product.filteredProducts);
  const dispatch = useDispatch();
  return (
    <Layout>
      <>
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
        <header className="py-8 flex justify-between flex-wrap">
          <div className="flex items-center flex-wrap w-full">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select an option
            </label>
            <select
              onChange={(e) => dispatch(filter(e.target.value))}
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            >
              {category.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </header>
        <section className="text-gray-600 body-font">
          <div className="py-10 mx-auto ">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {filteredProducts.length > 0
                ? filteredProducts.map((item, index) => {
                    return <ProductItem key={index} product={item} />;
                  })
                : products.map((item, index) => {
                    return <ProductItem key={index} product={item} />;
                  })}
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
};

export default Home;
