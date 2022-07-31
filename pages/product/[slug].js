import React from "react";
import { useRouter } from "next/router";
import products from "../../utils/data";
import Layout from "../../components/Layout";
import ViewProduct from "../../components/ViewProduct";
const Product = () => {
  const router = useRouter();
  const { slug } = router.query;
  const product = products.find((item) => item.slug === slug);

  return (
    <Layout title={product?.title}>
      {product && <ViewProduct product={product} />}
    </Layout>
  );
};

export default Product;
