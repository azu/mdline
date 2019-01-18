export type MdlineItem = {
    endDate?: Date;
    startDate: string;
    title: string;
    bodyMarkdown: string; // markdown
    bodyHTML: string; // HTML
}
export type MdlineList = MdlineItem[];
export type MdlineFormat = {
    items: MdlineList
};
