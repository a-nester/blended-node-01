import createHttpError from 'http-errors';
import { deleteProduct, getProducts } from '../services/products.js';

export const getAllProduct = async (req, res) => {
  const products = await getProducts();

  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const deleteProductController = async (req, res, next) => {
  const { productId } = req.params;
  //   console.log("",productId);
  const product = await deleteProduct(productId);
  //   console.log(product);
  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  // res.status(204).end();
  res.sendStatus(204);
};
