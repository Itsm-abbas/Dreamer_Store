import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { updateUser } from "../redux/User/user.action";
import Loader from "../components/Loader";
const Profile = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [avatar, setAvatar] = useState("");
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.User.user);
  let isLoggedIn = useSelector((state) => state.User.isLoggedIn);
  const formHandler = (e) => {
    setLoading(true);
    e.preventDefault();
    axios
      .post("/api/update", {
        id: user._id,
        name: e.target.name.value,
        password: e.target.password.value,
        change_password: e.target.change_password.value,
        avatar: avatar,
      })
      .then((res) => {
        toast.success(res.data.message);
        setLoading(false);
        dispatch(updateUser(res.data.user));
      })
      .catch((err) => {
        toast.error(err?.response?.data.message);
      });
  };
  const fileHandler = (e) => {
    if (e.target.files[0].size < 1000001) {
      setAvatar(URL.createObjectURL(e.target.files[0]));
    } else {
      toast.error("Image size is too large");
    }
  };
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login-register");
    }
  }, [isLoggedIn, router]);
  return (
    <Layout>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
      <main className="flex flex-col md:gap-10 md:flex-row ">
        <div className="flex flex-col bg-white w-full md:w-1/3 p-5 md:p-10 justify-center rounded-md shadow-md mb-12 md:mb-0">
          <h1 className="text-center text-2xl font-bold text-gray-800 mb-5">
            {user.name}
          </h1>
          <div className="mb-8 text-center">
            {avatar && (
              <Image
                src={avatar}
                width={160}
                height={150}
                className="rounded-full "
                alt="profile"
                layout="fixed"
              />
            )}
            {!avatar && user.avatar && (
              <Image
                src={user?.avatar}
                alt="profile"
                width={160}
                height={150}
                className="rounded-full "
                layout="fixed"
              />
            )}
          </div>
          <button className="capitalize bg-gray-800 hover:bg-gray-700 text-white mb-10">
            <label
              htmlFor="profile_img"
              className="cursor-pointer flex flex-col justify-center items-center w-full px-2 py-2"
            >
              <input
                onChange={fileHandler}
                accept="image/x-png,image/gif,image/jpeg"
                type="file"
                name="profile_img"
                id="profile_img"
                hidden
              />
              {avatar.length > 0 ? "update photo" : "upload new photo"}
            </label>
          </button>
          <div className="text-center text-sm mb-10  border-gray-400 border-2 bg-gray-200 px-4 py-4 rounded-lg">
            <p className="mb-2">
              Upload a new avatar. Larger image will be resized automatically
            </p>
            <p>Maximum upload size is 1 MB</p>
          </div>
          <div className="text-center text-gray-700  ">
            Member Since : <b>{user?.createdAt?.split("T")[0]}</b>
          </div>
          <hr />
          <div className="text-center text-gray-700   ">
            Last Updated : <b>{user?.updatedAt?.split("T")[0]}</b>
          </div>
        </div>
        <div className="p-5 md:p-10 bg-white w-full md:w-2/3 rounded-md shadow-md ">
          <h1 className="text-3xl font-bold text-gray-800 mb-10">
            Edit Profile
          </h1>
          <form onSubmit={formHandler} action="/api/register" method="POST">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder={user.name}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Current Password
              </label>
              <input
                type="password"
                id="password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="change_password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Change Password
              </label>
              <input
                type="password"
                id="change_password"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              />
            </div>

            <button
              type="submit"
              className="capitalize text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
            >
              {loading ? <Loader /> : "Update Profile"}
            </button>
          </form>
        </div>
      </main>
    </Layout>
  );
};

export default Profile;
