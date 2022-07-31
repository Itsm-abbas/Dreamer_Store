import Head from "next/head";
import React, { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
// interface Props {
//   children: React.ReactNode;
//   title?: string;
// }
const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Dreamer Store" : "Dreamer Store"}</title>
      </Head>
      <div className="flex flex-col justify-between min-h-screen">
        <Header />
        <main className="p-4 md:p-8 flex-1 bg-gray-100">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
