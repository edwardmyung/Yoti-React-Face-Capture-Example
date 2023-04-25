/** @type {import('next').NextConfig} */
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const nextConfig = {
  reactStrictMode: true,

  webpack: (config) => {
    config.plugins.push(
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, './node_modules/@getyoti/react-face-capture/assets'),
            to: path.resolve(__dirname, './public/yoti-assets'),
          },
        ],
      }),
    )

    return config
  }
}

module.exports = nextConfig
