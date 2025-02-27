const path = require("path");

module.exports = {
  entry: {
    index:  "./src/index.ts",
    registro: "./src/pages/registro/registro.ts"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    clean: true // Remove arquivos antigos antes de compilar
  },
  resolve: {
    extensions: [".ts", ".js"] // Permite importar arquivos TypeScript sem precisar especificar a extensão
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Aplica a regra para arquivos TypeScript
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    static: "./", // Usa a raiz do projeto como servidor
    hot: true,
    port: 3000 // Pode acessar em http://localhost:3000/
  },
  mode: "development"
};
