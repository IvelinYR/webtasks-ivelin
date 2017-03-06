module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['mocha', 'chai'],

        files: [
            'src/*.spec.js'
        ],

        exclude: [],

        preprocessors: {
            'src/*.spec.js': ['webpack']
        },

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['Chrome'],

        singleRun: false,

        concurrency: Infinity
    })
}
