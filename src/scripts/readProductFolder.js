import { PATH_PRODUCTS } from "../constants/path.js"
import fs from 'fs/promises'

const readProductFolder = async () => {
    const data = await fs.readdir(PATH_PRODUCTS)
    data.forEach((item) => console.log(item))
}
readProductFolder()
