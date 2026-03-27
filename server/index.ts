import express from "express";
import cors from "cors";
import productRoute from "./route/productRoute";

const app = express();

app.use(cors());
app.use(express.json());
console.log("data agya route se ", productRoute);
app.use("/api", productRoute);

app.listen(3030, () => {
    console.log("Server port 3030");
});