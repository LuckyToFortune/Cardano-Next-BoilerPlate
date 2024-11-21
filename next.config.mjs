/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: function (config, options) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };
    return config;
  },
  env: {
    blockfrostApiKeyMainnet: "mainnet1af9PVWL7z247tKKMpPoVUgXUsEa42k7",
    blockfrostApiKeyPreprod: "preprod1g9LmntPYF2qcqdCu8iQyLNXUj4j9Xti",
  }
};

export default nextConfig;
