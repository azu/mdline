import { MdlineFormat, MdlineList } from "@mdline/types";

const unified = require("unified");
const remarkParse = require("remark-parse");
const html = require("remark-html");

const createSections = require("select-section");
const toString = require("mdast-util-to-string");
const remark = unified()
    .use(remarkParse)
    .use(html);


export function parseHeading(text: string): { title: string, beginDate: string; endDate?: string } | null {
    // https://en.wikipedia.org/wiki/ISO_8601
    // https://stackoverflow.com/questions/20413843/is-there-any-kind-of-standard-for-representing-date-ranges
    const singleDatePattern = /(^[\d-]{4,}):(.*)/;
    const dateRangePattern = /(^[\d-]{4,})--([\d-]{4,}):(.*)/;
    if (dateRangePattern.test(text)) {
        const matches = text.match(dateRangePattern);
        if (matches === null) {
            throw new Error("Invalid matching: date range");
        }
        return {
            beginDate: matches[1],
            endDate: matches[2],
            title: matches[3].trim()
        };
    } else if (singleDatePattern.test(text)) {
        const matches = text.match(singleDatePattern);
        if (matches === null) {
            throw new Error("Invalid matching: date");
        }
        return {
            beginDate: matches[1],
            title: matches[2].trim()
        };
    } else return null;
}


export function parse(text: string): MdlineFormat {
    const ast = remark.parse(text);
    const sections = createSections(ast);
    const headerList = sections.slice(1);
    const items: MdlineList = headerList.map((section: any) => {
        const heading = parseHeading(toString(section.children[0]));
        if (heading === null) {
            return null;
        }
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
            beginDate: heading.beginDate,
            endDate: heading.endDate,
            bodyMarkdown: body,
            bodyHTML: remark.stringify(bodyRoot)
        };
    }).filter((item: any) => item !== null);
    return {
        items
    };
}
