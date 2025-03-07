import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  description:{
    required:true,
    type: String
  },
  name:{
    required:true,
    type: String
  },
  productImage: {
    type: String
  },
  price: {
    type: Number,
    defualt: 0
  },
  stock: {
    defualt: 0,
    type: Number,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
}, {timestamp: true});

export const Product = mongoose.model("Product", productSchema);