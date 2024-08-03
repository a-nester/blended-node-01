import { Product } from "../db/models/Products.js";

export const getProducts = () => Product.find();

