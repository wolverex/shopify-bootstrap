/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        undef: true,
        unused: true,
        eqnull: true,
        boss: true,
        sub: true,
        smarttabs: true,
        globals: {
          document: true,
          window: true,
          console: true,
          alert: true,
          Image: true,
          $: true,
          jQuery: true,
          Shopify: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      assets: {
        src: ['dist/js/*.js']
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      dist: {
        files: {
          'theme/assets/scripts.min.js': ['dist/js/scripts.js'],
        }
      }
    },
    concat: {
      dist: {
        src: ['bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/affix.js',
        'bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/affix.js',
        'bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/button.js',
        'bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/carousel.js',
        'bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/collapse.js',
        'bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/dropdown.js',
        'bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/tab.js',
        'bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/transition.js',
        'bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/scrollspy.js',
        'bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/modal.js',
        'bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/tooltip.js',
        'bower_components/twbs-bootstrap-sass/vendor/assets/javascripts/bootstrap/popover.js'],
        dest: 'theme/assets/bootstrap.js',
      },
    },
    sass: {
      dist: {
        files: {
          'theme/assets/style.css.liquid': 'dist/scss/*.scss',
        }
      }
    },
    copy: {
      main: {
        files: [
          // grab js files from bower, bootstrap js is already moved by concat
          {
            expand: true,
            cwd: 'bower_components/jquery/dist/',
            src: 'jquery.min.js',
            dest: 'theme/assets/'
          }
        ]
      }
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      jshint: {
        files: '<%= jshint.assets.src %>',
        tasks: ['jshint:assets']
      },
      uglify: {
        files: 'dist/js/scripts.js',
        tasks: ['uglify']
      },
      concat: {
        files: '<%= concat.dist.src %>',
        tasks: ['concat']
      },
      sass: {
        files: 'dist/scss/*.scss',
        tasks: ['sass']
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Default task.
  grunt.registerTask('default', ['jshint', 'uglify', 'copy', 'concat', 'sass']);

};
