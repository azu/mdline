import * as fs from "fs";
import * as path from "path";
import * as assert from "assert";
import { processText } from "../src/mdline";

import * as parser from "@mdline/mdline-parser";
import * as formatter from "@mdline/mdline-formatter-html";

const fixturesDir = path.join(__dirname, "snapshots");
describe("Snapshot testing", () => {
    fs.readdirSync(fixturesDir)
        .map(caseName => {
            const normalizedTestName = caseName.replace(/-/g, " ");
            it(`Test ${normalizedTestName}`, async function() {
                const fixtureDir = path.join(fixturesDir, caseName);
                const actualFilePath = path.join(fixtureDir, "input.md");
                const actualContent = fs.readFileSync(actualFilePath, "utf-8");
                const actual = await processText(actualContent, {
                    parser,
                    formatter
                });
                const expectedFilePath = path.join(fixtureDir, "output.html");
                // UPDATE_SNAPSHOT=1 npm test
                if (!fs.existsSync(expectedFilePath) || process.env.UPDATE_SNAPSHOT) {
                    fs.writeFileSync(expectedFilePath, actual);
                    this.skip();
                    return;
                }
                const expected = fs.readFileSync(expectedFilePath, "utf-8");
                assert.deepStrictEqual(
                    actual,
                    expected,
                    `
${fixtureDir}
${JSON.stringify(actual)}
`
                );
            });
        });
});
