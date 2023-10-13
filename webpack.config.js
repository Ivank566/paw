const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const filename = (ext) =>
    isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
    mode: "development",
    context: path.resolve(__dirname, "src"),
    entry: "./js/main.js",
    output: {
        filename: `./js/${filename("js")}`,
        path: path.resolve(__dirname, "app"),
        
    },

    performance: {
        hints: false,
    },

    devServer: {
        historyApiFallback: true,
        static: {
        directory: path.join(__dirname, "app"),
        },
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },

    plugins: [
        new HTMLWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html"),
        filename: "index.html",
        minify: {
            collapseWhitespace: isProd,
        },
    }),
    new MiniCssExtractPlugin({
        filename: `./css/${filename("css")}`,
    }),
    new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({
    //     patterns: [
    //     {
    //         from: path.resolve(__dirname, "src/assets"),
    //         to: path.resolve(__dirname, "app"),
    //     },
    //     ],
    // }),
    ],

    devtool: isProd ? false : "source-map",

    module: {
        rules: [
        {
        test: /\.html$/,
        loader: "html-loader",
        },

        {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
    
            {
            test: /\.s[ac]ss$/i,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                {
                loader: "css-loader",
                options: {
                    url: false,
                },
                },
                "sass-loader",
            ],
            },
    

        {
        test: /\.(gif|png|avif|jpe?g|webp|svg)$/,
        type: "asset/resource",
        generator: {
            filename: "[name][ext]",
            publicPath: "images/",
            outputPath: "images/",
            },
        },

        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            use: {
                loader: 'url-loader',
            },
        },
    ],
    },
};