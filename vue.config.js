const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const config = {
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
    }
}

module.exports = config;
