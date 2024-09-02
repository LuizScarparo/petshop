//a funcao require() é feita para carregar modulos, webpack.config é feita pra configurar os 

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")
const loader = require("style-loader")

module.exports = {
    target: "web",
    mode: "development",

    entry: path.resolve(__dirname, "src", "main.js"),
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 3000,
        open: true,
        liveReload: true,
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html"),
            title: "Pet Shop",
            favicon: path.resolve("src", "assets", "person.svg")
        }),

        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets"),
                    to: path.resolve(__dirname, "dist", "src", "assets")
                }
            ]
        })
    ],

    module: {
        rules: [
            {
                test:/\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    }
                }
            }
        ],
    },
}
