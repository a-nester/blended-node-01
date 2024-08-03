import { Router } from "express";
import { getAllProduct } from "../controllers/products.js";

const router = Router();

router.get("/products", getAllProduct);

export default router;
