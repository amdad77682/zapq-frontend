/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    SOLARIC_API: process.env.NEXT_PUBLIC_SOLARIC_API,
  },
  reactStrictMode: true,
  assetPrefix: process?.env?.NEXT_PUBLIC_ASSET_CDN ?? undefined,
  images: {
    domains: ["placehold.co", "via.placeholder.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/selection",
        permanent: true,
      },
    ];
  },
};
