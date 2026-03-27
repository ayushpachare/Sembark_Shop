import { Router } from "express";
import { Fetchproduct } from "../controller/productController";

const router = Router();

console.log("data agya ", Fetchproduct);

router.get("/products", Fetchproduct);

export default router;