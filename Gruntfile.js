/*global module, require */
(function() {
    'use strict';
    module.exports = function(grunt) {

        // load all grunt tasks
        require('load-grunt-tasks')(grunt);

        // tasks config
        grunt.initConfig({
            pkg: grunt.file.readJSON('package.json'),

            // clears folders
            mkdir: {
                all: {
                    options: {
                        create: ['test/.tmp/screenshots']
                    },
                },
            },
            clean: {
                dist: {
                    files: [{
                        dot: true,
                        src: ['test/.tmp/screenshots/*']
                    }]
                }
            },

            // cucumber tests
            cucumberjs: {
                src: 'test/acceptance-tests/features',
                options: {
                    steps: 'test/acceptance-tests/step-definitions',
                    format: 'pretty'
                }
            },
            // selenium config
            selenium_start: {
                options: {
                    'host': 'localhost',
                    'port': 4444,
                    'servlets': [],
                    'capabilityMatcher': 'org.openqa.grid.internal.utils.DefaultCapabilityMatcher',
                    'throwOnCapabilityNotPresent': true,
                    'nodePolling': 5000,
                    'cleanUpCycle': 5000,
                    'timeout': 25000,
                    'newSessionWaitTimeout': -1,
                    'maxSession': 20
                }
            },
            selenium_phantom_hub: {
                options: {
                    'port': 4444,
                    'phantomPort': 8001
                }
            },
            selenium_stop: {
                options: {}
            }
        });

        // according to docs you don't need to run selenium_stop, 
        // phantomjs will shut down on it's own but it is a good practice
        grunt.registerTask('tests', ['mkdir','clean', 'selenium_phantom_hub', 'cucumberjs', 'selenium_stop']);
    };
})();