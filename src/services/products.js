import { Product } from '../db/models/Products.js';

export const getProducts = () => Product.find();

// export const deleteProduct = (productId) =>
//   Product.findOneAndDelete({
//     _id: productId,
//   });

export const deleteProduct = async (productId) => {
  console.log(productId);
  const product = await Product.findByIdAndDelete(productId);
  console.log(product);
  return product;
};
