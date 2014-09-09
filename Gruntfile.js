module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-webpack");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-simple-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
      default: {
        entry: "./entry.js",
        output: {
          filename: "bundle.js",
        },
        stats: {
          colors: true,
          modules: true,
          reasons: true
        },
        progress: true,
        failOnError: false,
        watch: false,
        keepalive: false,
      }
    },

    watch: {
      wp: {
        files: ['entry.js'],
        tasks: ['webpack'],
        options: {
          spawn: false,
        },
        keepalive: true
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['webpack:default', 'watch']);
  grunt.registerTask('watch_webpack', ['watch:rahh']);
};