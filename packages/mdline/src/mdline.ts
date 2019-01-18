import * as fs from "fs";
import { parse } from "@mdline/mdline-parser";
import { format } from "@mdline/mdline-formatter-html";

export async function processFile(filePath: string) {
    const text = fs.readFileSync(filePath, "utf-8");
    const parseResults = parse(text);
    return format(parseResults);
}
