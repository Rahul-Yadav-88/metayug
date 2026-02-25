// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;



// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   // Required if you are using `next export`
//   output: "export",

//   // Ensures images work with static export
//   images: {
//     unoptimized: true,
//   },

//   // Avoids build errors on hosting like Netlify / Vercel static
//   trailingSlash: true,

//   // Disable ESLint errors from blocking builds (optional)
//   eslint: {
//     ignoreDuringBuilds: true,
//   },

//   // Disable TypeScript errors from blocking builds (optional)
//   typescript: {
//     ignoreBuildErrors: true,
//   },
// };

// module.exports = nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,  // ✅ Important for nested pages
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
