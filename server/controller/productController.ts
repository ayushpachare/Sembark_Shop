import { Request, Response } from "express";
import { getproducts } from "../api/fetchapi"; 

export async function Fetchproduct(req: Request, res: Response) {
    try {
        const products = await getproducts();
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}