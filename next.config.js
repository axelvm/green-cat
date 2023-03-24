/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    return {
      source: "*",
      headers: [
        {
          key: "Access-Control-Allow-Methods",
          value: "GET, POST, OPTIONS, PUT, PATCH, DELETE",
        },
        {
          key: "Access-Control-Allow-Origin",
          value: "*",
        },
      ],
    };
  },
};

module.exports = nextConfig;
