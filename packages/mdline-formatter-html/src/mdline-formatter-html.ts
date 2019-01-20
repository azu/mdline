import { MdlineFormat } from "@mdline/types";

require("svelte/ssr/register")({
    extensions: [".svelte"]
});

export const format = async (mdlineData: MdlineFormat): Promise<string> => {
    const App = require("../component/App.svelte");
    const { html, css, head } = App.render({
        items: mdlineData.items
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
</html>`;
};
