/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Remove output: "export" — Workers handles the runtime
  images: { unoptimized: true }, // keep this unless you configure Cloudflare Images
};

export default nextConfig;
