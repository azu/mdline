import * as fs from "fs";
import * as path from "path";
import * as assert from "assert";
import { parse } from "../src/mdline-parser";

const fixturesDir = path.join(__dirname, "snapshots");
describe("Snapshot testing", () => {
    fs.readdirSync(fixturesDir)
        .map(caseName => {
            const normalizedTestName = caseName.replace(/-/g, " ");
            it(`Test ${normalizedTestName}`, function() {
                const fixtureDir = path.join(fixturesDir, caseName);
                const actualFilePath = path.join(fixtureDir, "input.md");
                const actualContent = fs.readFileSync(actualFilePath, "utf-8");
                const actual = parse(actualContent);
                const expectedFilePath = path.join(fixtureDir, "output.json");
                // UPDATE_SNAPSHOT=1 npm test
                if (!fs.existsSync(expectedFilePath) || process.env.UPDATE_SNAPSHOT) {
                    fs.writeFileSync(expectedFilePath, JSON.stringify(actual, null, 4));
                    this.skip();
                    return;
                }
                const expected = JSON.parse(fs.readFileSync(expectedFilePath, "utf-8"));
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
