import mongoose from "mongoose";
const { Schema } = mongoose;

const productsSchema = new Schema({
  image: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});
module.exports =
  mongoose.models.Products || mongoose.model("Products", productsSchema);
