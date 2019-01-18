import { MdlineFormat } from "@mdline/types";

const unified = require("unified");
const remarkParse = require("remark-parse");
const html = require("remark-html");

const createSections = require("select-section");
const toString = require("mdast-util-to-string");
const remark = unified()
    .use(remarkParse)
    .use(html);


export function parseHeading(text: string): { title: string, startDate: string } {
    if (/^\d{4}-\d{2}-\d{2}:/.test(text)) {
        const matches = text.match(/(^\d{4}-\d{2}-\d{2}):(.*)/);
        if (matches === null) {
            throw new Error("Invalid matching: /(^\\d{4}-\\d{2}-\\d{2}):(.*)/");
        }
        return {
            startDate: matches[1],
            title: matches[2].trim()
        };
    }
    throw new Error("Not matching heading: /(^\\d{4}-\\d{2}-\\d{2}):(.*)/");
}


export function parse(text: string): MdlineFormat {
    const ast = remark.parse(text);
    const sections = createSections(ast);
    const items = sections.slice(1).map((section: any) => {
        const heading = parseHeading(toString(section.children[0]));
        const bodyNodeList = section.children.slice(1);
        const bodyRoot = {
            type: "root",
            children: bodyNodeList
        };
        const bodyStartOffset = bodyNodeList[0].position.start.offset;
        const bodyEndOffset = bodyNodeList[bodyNodeList.length - 1].position.end.offset;
        const body = text.slice(bodyStartOffset, bodyEndOffset);
        return {
            title: heading.title,
            startDate: heading.startDate,
            bodyMarkdown: body,
            bodyHTML: remark.stringify(bodyRoot)
        };
    });
    return {
        items
    };
}
