import meow from "meow";
import * as fs from "fs";
import * as path from "path";
import { processFile } from "./mdline";

export async function run(argv: string[]) {
    console.log(argv);
    const cli = meow(`
    Usage
      $ mdline <input> [Options]
 
    Options
      --format, -f  Format name(Default: html)
      --output, -o  Output path
 
    Examples
      $ mdline ./timeline.md -o timeline.html
`, {
        flags: {
            format: {
                type: "string",
                alias: "f"
            },
            output: {
                type: "string",
                alias: "o"
            }
        },
        argv,
        autoHelp: true,
        autoVersion: true
    });
    console.log("cli.input[0]", cli.input[0]);
    if (!cli.input[0]) {
        cli.showHelp();
    }
    const output = await processFile(cli.input[0]);
    if (cli.flags.output) {
        fs.writeFileSync(path.resolve(process.cwd(), cli.flags.output), output, "utf-8");
    } else {
        console.log(output);
    }
}
