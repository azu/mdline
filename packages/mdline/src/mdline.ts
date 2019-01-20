import { MdlineParser, MdlineFormatter } from "@mdline/types";

export async function processText(input: string, options: {
    parser: MdlineParser;
    formatter: MdlineFormatter
}): Promise<string> {
    const { parser, formatter } = options;
    const parseResults = parser.parse(input);
    return formatter.format(parseResults);
}
