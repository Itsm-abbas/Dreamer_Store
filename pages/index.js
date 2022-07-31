import { BsFilter } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../components/Layout";
import ProductItem from "../components/ProductItem";
import { category } from "../utils/data";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import filter from "../redux/Products/products.action";
const Home = () => {
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
          <div className="flex items-center    flex-wrap">
            {category.map((item, index) => {
              return (
                <button
                  onClick={() => dispatch(filter(item))}
                  key={index}
                  className="mr-10 text-gray-700 text-lg hover:text-black"
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div className="hidden sm:flex">
            <button className="text-white text-lg border px-6 py-1 border-gray border-solid rounded-t-lg hover:rounded-t-none hover:rounded-b-lg bg-gray-600 hover:bg-gray-500">
              <span className="inline-flex items-center">
                <BsFilter className="mr-1" /> Filter
              </span>
            </button>
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
