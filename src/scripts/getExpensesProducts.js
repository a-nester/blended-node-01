import { PATH_DB } from '../constants/path.js';
import fs from 'fs/promises';

const getExpensesProducts = async () => {
	const LIMIT = 700;
	try {
		const data = await fs.readFile(PATH_DB, 'utf-8');
		const parsedData = JSON.parse(data);
		console.log(parsedData.filter(({ price }) => price > LIMIT));
	} catch (error) {
		console.error('File not found', error);
	}
};

getExpensesProducts();
