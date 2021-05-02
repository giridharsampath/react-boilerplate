module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "#components": "./src/components",
          "#containers": "./src/containers",
          "#models": "./src/models",
          "#config": "./src/config",
          "#utils": "./src/utils",
        },
      },
    ],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
  ],
};
