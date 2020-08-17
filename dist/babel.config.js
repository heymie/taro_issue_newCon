
module.exports = function(api) {
  api.cache(true);
  return {
    "presets":["@babel/preset-env"],
    "plugins":[
      "@babel/plugin-transform-modules-commonjs",
      ["@babel/plugin-proposal-decorators", { legacy: true }],
      "@babel/plugin-proposal-class-properties"
    ],
    "babelrcRoots": [".", "node_modules"]
  };
}

'transform-decorators-legacy',
'transform-class-properties',
'transform-object-rest-spread'