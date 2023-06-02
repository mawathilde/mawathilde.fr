import lume from "lume/mod.ts";
import sass from "lume/plugins/sass.ts";
import minifyHTML from "lume/plugins/minify_html.ts";

const site = lume({
    src: "src",
    location: new URL("https://mawathilde.fr")
});

site.use(sass());
site.use(minifyHTML());

export default site;
