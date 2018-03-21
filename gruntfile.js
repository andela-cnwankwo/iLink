module.exports = (grunt) => {
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                options: {
                        configFile: 'karma.conf.js'
                }
            }
        }
    });

    // Register grunt tasks
    grunt.registerTask('test', ['karma']);

    grunt.registerTask('default', ['test']);
}
