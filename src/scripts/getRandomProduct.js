import { PATH_DB } from '../constants/path.js';
import fs from 'fs/promises';
import { getRandomNumber } from '../utils/getRandomNumber.js';

const getRandomProduct = async () => {
	try {
		const data = await fs.readFile(PATH_DB, 'utf-8');
		const parsedData = JSON.parse(data);
		const randomIdx = getRandomNumber(0, parsedData.length - 1);

		console.log('Rundom product is: ', parsedData[randomIdx]);
	} catch (error) {
		console.error('File not found', error);
	}
};

getRandomProduct();
