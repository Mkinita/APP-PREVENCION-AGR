const path = require('path');

const nextConfig = {
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'uploads/[name].[hash].[ext]',
            outputPath: path.join(__dirname, 'public/uploads'),
            postTransformPublicPath: (p) => `/_next/${p}`,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;

  
