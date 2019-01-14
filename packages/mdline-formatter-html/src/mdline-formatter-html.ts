export type mdlineItem = {
    startDate: Date;
    endDate?: Date;
    title: string;
    body: string; // markdown
    icon: string; // icon image path
}
export type mdlineList = mdlineItem[];
export const format = (mdlineList: mdlineList): string => {
    return "<div></div>"
};