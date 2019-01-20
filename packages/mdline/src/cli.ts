import meow from "meow";
import * as fs from "fs";
import * as path from "path";
import { processText } from "./mdline";
import * as parser from "@mdline/mdline-parser";
import * as formatter from "@mdline/mdline-formatter-html";

export async function run(argv: string[]) {
    const cli = meow(`
    Usage
      $ mdline <input> [Options]
 
    Options
      --output, -o  Output path
 
    Examples
      $ mdline ./timeline.md -o timeline.html
`, {
        flags: {
            output: {
                type: "string",
                alias: "o"
            }
        },
        argv,
        autoHelp: true,
        autoVersion: true
    });
    const inputFilePath = cli.input[0];
    if (!inputFilePath) {
        cli.showHelp();
    }
    const inputText = fs.readFileSync(inputFilePath, "utf-8");
    // TODO: parser and formatter will be plugabble
    const output = await processText(inputText, {
        parser,
        formatter
    });
    if (cli.flags.output) {
        const outputAbsolutePath = path.resolve(process.cwd(), cli.flags.output);
        fs.writeFileSync(outputAbsolutePath, output, "utf-8");
    } else {
        console.log(output);
    }
}
