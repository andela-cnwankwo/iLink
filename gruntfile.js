module.exports = (grunt) => {
    grunt.loadNpmTasks('grunt-karma');
    const karmaBrowser = grunt.option('browser') || 'Chrome';
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                options: {
                        browsers: [karmaBrowser],
                        frameworks: ['jasmine'],
                        singleRun: true,
                        files: [
                            'app/modules/angular.min.js',
                            'app/modules/angular-mocks.js',
                            "public/pages/home-page/home-page.module.js",
                            "public/index.js",
                            "public/**/*.js",
                            'test/unit/**/*.js'
                        ]
                }
            }
        }
    });

    // Register grunt tasks
    grunt.registerTask('test', ['karma']);

    grunt.registerTask('default', ['test']);
}