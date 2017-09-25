module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			development: {
				options: {
					paths: ['source/less']
				},
				files: {
			  		'build/css/style.css': 'source/less/*.less'
				}
			}
		},
		htmlmin: {
		    dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: {
					'build/index.html': 'source/*.html'
				}
			},
		},
		autoprefixer: {
			compile: {
				files: {
				  'build/css/style.css': 'build/css/style.css'
				},
			},
		},
		cssmin: {
			clean: {
				files: {
				  'build/css/style.css': 'build/css/style.css'
				}
			}
		},
		watch: {
			less: {
				files: [ 'source/less/*.less' ],
				tasks: [ 'less', 'autoprefixer', 'cssmin' ]
			},
		},
		browserSync: {
			bsFiles: {
				src: [ 'build/css/*.css', 'build/*.html']
			},
			options: {
				watchTask: true,
				server: {
					baseDir: 'build'
				},
			},
		},
	});

	// Load grunt plugins.
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

	// configurare uglifyjs per la minificazione del javascript

	// grunt.registerTask('start', ['default', 'browserSync', 'watch']);
	// rivedere il registerTask start per mancanza di sincronizzazione dei file html
	
	grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin', 'htmlmin']);
};