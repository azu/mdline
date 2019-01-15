export type mdlineItem = {
    startDate: Date;
    endDate?: Date;
    title: string;
    body: string; // markdown
    icon: string; // icon image path
}
export type mdlineList = mdlineItem[];

require("svelte/ssr/register")({
    extensions: [".svelte"]
});

export const format = (/* _mdlineList: mdlineList */) => {
    const App = require("../component/App.svelte");
    const items = [
        {
            startDate: "2011-01-16",
            title: "JSer.info 公開",
            body: "JSer.infoを公開して運用を開始した。"
        },
        {
            startDate: "2012-01-16",
            title: "JSer.info 1周年",
            body: "JSer.info公開してから1年が経った"
        },
        {
            startDate: "2013-01-16",
            title: "JSer.info 2周年",
            body: "JSer.infoを公開してから2年が経った"
        }
    ];
    const { html, css, head } = App.render({
        items
    });
    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${head}
    <style>
    ${css.code}
    </style>
</head>
<body>${html}</body>
</body>
</html>`;
};

format();
