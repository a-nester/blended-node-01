import { readFile } from 'fs';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import fs from 'fs/promises';
import { PATH_DB } from '../constants/path.js';

const generateProducts = async (number) => {
	const newProducts = Array.from({ length: number }, createFakeProduct);

	try {
		const existData = await fs.readFile(PATH_DB, 'utf-8');
		const newData = [...JSON.parse(existData), ...newProducts];
		await fs.writeFile(PATH_DB, JSON.stringify(newData, null, 2), 'utf-8');
	} catch (error) {
		console.error('Error in operations', error);
	}
};

generateProducts(3);
