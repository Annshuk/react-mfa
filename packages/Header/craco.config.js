const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const deps = require('./package.json').dependencies;

module.exports = {
  plugins: [
    {
      plugin: {
        overrideCracoConfig: ({ cracoConfig }) => cracoConfig,
        overrideWebpackConfig: ({ webpackConfig }) =>
        {
          webpackConfig.output.publicPath = "auto";

          webpackConfig.plugins = [
            ...webpackConfig.plugins,
            new ModuleFederationPlugin({
              name: "header",
              filename: "remoteEntry.js",
              exposes: {
                "./HeaderModule": "./src/bootstrap",
              },
              shared: {
                ...deps,
                'react-dom': {
                  singleton: true,
                  eager: true
                },
                react: {
                  singleton: true,
                  eager: true
                },
              }
            }),
          ]
          return webpackConfig;
        },
        overrideDevServerConfig: ({ devServerConfig }) => devServerConfig,
        overrideJestConfig: ({ jestConfig, }) => jestConfig,
      },
    }
  ]
};