import { PATH_DB, PATH_PRODUCTS } from "../constants/path.js";
import fs from "fs/promises";
import path from "path";

const createProductsFiles = async () => {
    const data = await fs.readFile(PATH_DB, "utf-8")
    const dataParsed = JSON.parse(data);
    dataParsed.forEach((el, index) => {
        const filePath = path.join(PATH_PRODUCTS, `${index + 1}.json`);
        fs.writeFile(filePath, JSON.stringify(el, null, 2), "utf-8");
    })
}
createProductsFiles()
