import React from "react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";
import axios from "axios";
const AddProduct = () => {
  const { handleSubmit, register } = useForm();
  const formSubmit = (data) => {
    axios.post("/api/products", data).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <Layout>
      <h1 className="text-gray-700 mb-10 text-2xl font-bold">Add Product</h1>
      <form onSubmit={handleSubmit(formSubmit)}>
        <div className="mb-6">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Title
          </label>
          <input
            type="string"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
            placeholder="Enter title"
            required={true}
            {...register("title", {})}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Price
          </label>
          <input
            type="number"
            id="price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
            required={true}
            placeholder="Enter price"
            {...register("price", {})}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="brand"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Brand
          </label>
          <input
            type="string"
            id="brand"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
            required={true}
            placeholder="Enter brand"
            {...register("brand", {})}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="image"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Image
          </label>
          <input
            type="string"
            id="image"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
            required={true}
            placeholder="Enter Image URL"
            {...register("image", {})}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="category"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Category
          </label>
          <input
            type="string"
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none"
            required={true}
            placeholder="Enter category"
            {...register("category", {})}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Description
          </label>
          <textarea
            id="
            description"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Enter description ..."
            {...register("description", {})}
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
        >
          Submit
        </button>
      </form>
    </Layout>
  );
};

export default AddProduct;
