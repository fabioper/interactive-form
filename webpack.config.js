// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
    entry: './src/app.ts',
    mode: 'development',
    output: {
        filename: 'app.js',
        // eslint-disable-next-line no-undef
        path: path.resolve(__dirname)
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [{ test: /\.ts$/, loader: 'ts-loader' }]
    },
    devtool: 'source-map',
    watch: true
}
