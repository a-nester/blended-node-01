import { getProducts } from "../services/products.js";

export const getAllProduct = async (req, res) => {
    const products = await getProducts();

    res.status(200).json({
        status: 200,
        message: "Successfully found products!",
        data: products,
    });
};
