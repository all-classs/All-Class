import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
	const jsonDirectory = path.join(process.cwd(), 'public/data');
	const fileContents = await fs.readFile(
		jsonDirectory + '/universitylogo.json',
		'utf8',
	);

	res.status(200).json(JSON.parse(fileContents));
}
