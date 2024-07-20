import { PATH_DB } from '../constants/path.js';
import fs from 'fs/promises';

const getTotalPrice = async () => {
	try {
		const data = await fs.readFile(PATH_DB, 'utf-8');
		const parsedData = JSON.parse(data);
		const totalPrice = parsedData.reduce((acc, prev) => {
			return acc + Number(prev.price);
		}, 0);
		console.log('Total price:', totalPrice);
	} catch (error) {
		console.error('File not found', error);
	}
};

getTotalPrice();
