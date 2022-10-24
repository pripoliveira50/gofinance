module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: '.',
          extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
          ],
          alias: {
            '@components': './src/components',
            '@screens': './src/screens',
            '@config': './src/config',
            '@utils': './src/utils',
            '@assets': './assets',
            '@hooks': './src/hooks',
            '@services': './src/services',
            '@global': './src/global',
            '@navigation': './src/navigation',
          },
        },
      ],
    ],
  };
};
