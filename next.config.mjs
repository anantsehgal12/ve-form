/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [new URL('https://i.ibb.co/**'), new URL('https://assets.zyrosite.com/**')],
      },
};

export default nextConfig;
