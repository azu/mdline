const path = require("path");
const { execSync } = require("child_process");
const projectDir = path.join(__dirname, "..");

const bin = path.resolve(projectDir, "packages/mdline/bin/cmd.js");
const input = path.resolve(projectDir, "packages/mdline-parser/test/snapshots/ecmascript/input.md");
const output = path.join(__dirname, "index.html");
execSync(`${bin} ${input} -o ${output}`);
