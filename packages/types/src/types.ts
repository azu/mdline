export type MdlineItem = {
    beginDate: string;
    endDate?: Date;
    title: string;
    bodyMarkdown: string; // markdown
    bodyHTML: string; // HTML
}
export type MdlineList = MdlineItem[];
/**
 * Mdline format type
 * Parser should output this format
 */
export type MdlineFormat = {
    items: MdlineList
};

/**
 * parse function for parser
 */
export type MdlineParserParse = (text: string) => MdlineFormat;

/**
 * Mdline parser module types
 */
export type MdlineParser = {
    parse: MdlineParserParse;
};


/**
 * format function for formatter
 */
export type MdlineFormatterFormat = (mdlineData: MdlineFormat) => Promise<string>;

/**
 * Mdline formatter module types
 */
export type MdlineFormatter = {
    format: MdlineFormatterFormat;
};

