    module.exports = function(grunt) {
    grunt.initConfig({
        less: {
        development: {
            files: {
            "dist/style.css": "css/style.less"
            }
        }
        },
        uglify: {
        build: {
            files: {
            'dist/calculadora.min.js': ['js/calculadora.js']
            }
        }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less', 'uglify']);
    };
