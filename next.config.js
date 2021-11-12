/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');
module.exports = withFonts({
  reactStrictMode: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
});
