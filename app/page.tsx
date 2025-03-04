import path from "node:path";
import { parseFile } from "music-metadata";

export default async function Home() {
	const filePath = path.join(process.cwd(), "rheeeeet.mp3");
	const metadata = await parseFile(filePath);

	return (
		<main>
			<pre>{JSON.stringify(metadata, null, 4)}</pre>
		</main>
	);
}
