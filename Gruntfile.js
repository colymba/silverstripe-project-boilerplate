'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  var path = require('path');

  // Configurable paths
  var config = {
    code: 'code',
    dist: '_dist',
    templatePathPrefix: '$PJ'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: ['<%= config.code %>/views/css/**/*.{scss,sass}'],
        tasks: ['sass:dev', 'modernizr']
      }
    },


    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= config.code %>/views/js/{,*/}*.js',
        '!<%= config.code %>/views/js/vendor/*'
      ]
    },


    // Compiles Sass to CSS and generates necessary files if requested
    sass: {
      options: {
        loadPath: '.',
        require: []
      },
      dev: {
        files: [{
          expand: true,
          cwd: '<%= config.code %>/views/css',
          src: ['*.{scss,sass}'],
          dest: '<%= config.code %>/views/css',
          ext: '.css'
        }]
      }
    },


    // insert bower dep where they should be
    wiredep: {
      js: {
        src: ['<%= config.code %>/views/templates/Includes/js.ss'],
        ignorePath: '../../../../',
        exclude: [ /modernizr/ ],
        fileTypes: {
          html: {
            replace: {
              js: '<script src="<%= config.templatePathPrefix %>/{{filePath}}"></script>'
            }
          }
        }
      },
      css: {
        src: ['<%= config.code %>/views/templates/Page.ss'],
        ignorePath: '../../../',
        fileTypes: {
          html: {
            replace: {
              css: '<link rel="stylesheet" href="<%= config.templatePathPrefix %>/{{filePath}}" />'
            }
          }
        }
      },
      sass: {
        src: ['<%= config.code %>/views/css/**/*.{scss,sass}'],
        ignorePath: '../../../'
      }
    },


    // Generates a custom Modernizr build that includes only the tests you
    // reference in your app
    modernizr: {
      dist: {
        devFile: 'bower_components/modernizr/modernizr.js',
        outputFile: '<%= config.code %>/views/js/vendor/modernizr.js',
        files: {
          src: [
            '<%= config.code %>/views/js/{,*/}*.js',
            '<%= config.code %>/views/css/{,*/}*.css'//,
            //'!<%= config.dist %>/scripts/vendor/*'
          ]
        },
        uglify: true
      }
    },
    

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= config.dist %>/*'
          ]
        }]
      },
      tmp: {
        files: [{
          dot: true,
          src: [
            '.tmp'
          ]
        }]
      }
    },


    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= config.code %>/views/templates/**/*.ss',
      options: {
        dest: '<%= config.dist %>',

        flow: {
          steps: {
            js: ['concat', 'uglifyjs'],
            css: ['concat', 'cssmin']
          },
          post: {
            css: [{
              name: 'concat',
              prefix: '<%= config.templatePathPrefix %>'+path.sep,
              createConfig: function (context, block) {
                var generated = context.options.generated,
                    prefix = this.prefix,
                    src;

                generated.files.forEach(function(element, index, array){
                  src = [];
                  element.src.forEach(function(e, i, a){ 
                    src.push(e.replace(prefix, ''));
                  });

                  context.options.generated.files[index].src = src;
                });
              }
            }],
            js: [{
              name: 'concat',
              prefix: '<%= config.cssjsprefix %>'+path.sep,
              createConfig: function (context, block) {
                var generated = context.options.generated,
                    prefix = this.prefix,
                    src;

                generated.files.forEach(function(element, index, array){
                  src = [];
                  element.src.forEach(function(e, i, a){ 
                    src.push(e.replace(prefix, ''));
                  });

                  context.options.generated.files[index].src = src;
                });
              }
            }]
          }
        }

      }      
    },


    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '.',
          dest: '<%= config.dist %>',
          src: [
            '_config.php',
            '_config/*.*',

            '.htaccess',

            'code/**/*.*',
            '!code/**/main.js',
            '!code/**/main.css',
            '!code/**/*.scss',
            '!code/**/*.css.map'
          ]
        }]
      }
    },


    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= config.dist %>/code/views/js/{,*/}*.js',
            '<%= config.dist %>/code/views/css/{,*/}*.css',
            '!<%= config.dist %>/code/views/css/editor.css',
            //'<%= config.dist %>/images/{,*/}*.*',
            //'<%= config.dist %>/styles/fonts/{,*/}*.*',
            //'<%= config.dist %>/*.{ico,png}'
          ]
        }
      }
    },


    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      options: {
        //assetsDirs: ['<%= config.dist %>/code/views/img'], 
        blockReplacements: {
          prefix: '<%= config.templatePathPrefix %>/',
          css: function (block) {
            return '<link rel="stylesheet" href="' + this.prefix + block.dest + '">';
          },
          js: function (block) {
            return '<script src="' + this.prefix + block.dest + '"></script>';
          }
        }
      },
      html: [
        '<%= config.dist %>/code/views/templates/Page.ss',
        '<%= config.dist %>/code/views/templates/Includes/js.ss'
      ],
      css: [
        '<%= config.dist %>/code/views/css/*.css'
      ]
    },


    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.dist %>/code/views/img',
          src: '{,*/}*.{gif,jpeg,jpg,png}',
          dest: '<%= config.dist %>/code/views/img'
        }]
      }
    },


    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.dist %>/code/views/img',
          src: '{,*/}*.svg',
          dest: '<%= config.dist %>/code/views/img'
        }]
      }
    },


    htmlmin: {
      dist: {
        options: {
          useShortDoctype: true,
          
          collapseWhitespace: true,
          conservativeCollapse: true,

          //removeAttributeQuotes: false,
          removeRedundantAttributes: true,
          removeEmptyAttributes: true,
          collapseBooleanAttributes: true,

          removeCommentsFromCDATA: true,
          
          removeOptionalTags: false,
          removeEmptyElements: false,

          minifyJS: true,
          minifyCSS: true
        },
        files: [{
          expand: true,
          cwd: '<%= config.dist %>',
          src: 'code/views/templates/**/*.ss',
          dest: '<%= config.dist %>'
        }]
      }
    },


    // update configs to live
    replace: {
      ymlConfig: {
        options: {
          usePrefix: false,
          patterns: [
            {
              match: "environment_type: 'dev'",
              replacement: "environment_type: 'live'"
            }
          ]
        },
        files: [
          {expand: true, src: ['<%= config.dist %>/_config/config.yml'], dest: '.'}
        ]
      },
      phpConfig: {
        options: {
          usePrefix: false,
          patterns: [
            {
              match: /(\/\*::config:dev\*\/)([\w\W\s]*)(\/\*::config\*\/)/g,
              replacement: ""
            },{
              match: /(\/\*::config:live)([\w\W\s]*)(::config\*\/)/g,
              replacement: "$2"
            }
          ]
        },
        files: [
          {expand: true, src: ['<%= config.dist %>/**/*.php'], dest: '.'}
        ]
      }
    }

  });
  
  grunt.registerTask('dist', [
    'clean:dist',
    
    'wiredep',
    'modernizr',

    'useminPrepare',
    'concat',
    'cssmin',
    'uglify',

    'copy:dist', 
    
    //'rev',
    'usemin',
    'htmlmin',

    'replace:ymlConfig',
    'replace:phpConfig',

    'clean:tmp',
  ]);

  grunt.registerTask('dev', [
    'wiredep',
    'modernizr',
    'watch'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'dev'
  ]);
};