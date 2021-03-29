module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Vue Crash Course";
                args[0].description = "This is a test with Options Vue Plugin";
                return args;
            })
    }
}