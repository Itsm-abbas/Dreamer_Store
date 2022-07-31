import Products from "../../models/productsSchema";
import dbConnect from "../../utils/connectDB";
export default async function handler(req, res) {
  if (req.method === "POST") {
    await dbConnect();
    const { image, brand, title, description, price, category } = req.body;
    const newProduct = new Products({
      image,
      brand,
      title,
      description,
      price,
      category,
    });
    newProduct.save();
    res.status(201).json({
      status: "success",
    });
  }
  if (req.method === "GET") {
    await dbConnect();
    const products = await Products.find();
    res.status(200).json({
      status: "success",
      products,
    });
  }
}
