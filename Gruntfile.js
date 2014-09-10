module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-webpack");
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-simple-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    webpack: {
      default: {
        entry: "./components/app.jsx",
        output: {
          filename: "bundle.js",
        },
        stats: {
          colors: true,
          modules: false,
          reasons: true
        },
        progress: true,
        failOnError: false,
        watch: false,
        keepalive: false,
        resolve: {
          extensions: ['', '.js', '.jsx']
        },
        module: {
          loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx$/, loader: 'jsx' }
          ]
        }
      }
    },

    watch: {
      wp: {
        files: ['components/*.jsx'],
        tasks: ['webpack'],
        options: {
          spawn: false,
        },
        keepalive: true
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['webpack:default', 'watch:wp']);
  grunt.registerTask('watch_webpack', ['watch:rahh']);
};