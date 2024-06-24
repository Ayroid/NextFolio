import withPWA from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {};

const pwaConfig = {
  dest: "public",
  // Add additional PWA configurations if needed
};

export default withPWA({
  ...nextConfig,
  ...pwaConfig,
});
