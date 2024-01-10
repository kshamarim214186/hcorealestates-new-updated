/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = nextConfig;

const path = require("path");
module.exports = {
   env: {
      API_URL: 'https://www.api.gurgaoncityfloors.com/',
      token1: 'test',
      token2: 'test1',
   },
   async redirects() {
      return [
         {
           source: '/sublocation/:id/:url',
           destination: '/properties',
           permanent: true,
         },
      ];
   },
   images: {
      remotePatterns: [
         {
           protocol: 'https',
           hostname: '*.hcorealestates.org',
           port: '',
           pathname: '/img/**',
         },
      ],
   },
};
