import { readFile, writeFile } from 'fs/promises';
import { resolve } from 'path';

async function readingHTML(params) {
    const filePath = resolve('./index.html');
    let file = await readFile(filePath);

    const data = {
        name: "Somnath",
        company: "HFCL"
    }

    for (const [key, value] of Object.entries(data)) {
        file = file.toString().replace(`{{${key}}}`, value);

    }

    await writeFile(resolve("./output.html"), file);




}
readingHTML();