const path = require("path");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    path.resolve(__dirname, "..", "src", "**", "!(*.test).js"),
    path.resolve(__dirname, "..", "src", "**", "*.html"),
  ],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  style: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
        ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
      ],
    },
  },
};
