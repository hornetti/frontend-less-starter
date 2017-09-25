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
					'build/1-i-miei-dati.html': 'source/1-i-miei-dati.html',
					'build/2-accesso-al-primo-anno.html': 'source/2-accesso-al-primo-anno.html',
					'build/3-secondo-anno-no-accesso.html': 'source/3-secondo-anno-no-accesso.html',
					'build/4-accesso-al-secondo-anno.html': 'source/4-accesso-al-secondo-anno.html',
					'build/5-iscrizione-pacchetto-effettuata.html': 'source/5-iscrizione-pacchetto-effettuata.html',
					'build/6-seleziona-centro.html': 'source/6-seleziona-centro.html',
					'build/7-riepilogo-per-conferma-finale.html': 'source/7-riepilogo-per-conferma-finale.html',
					'build/8-thanksyou-confermata.html': 'source/8-thanksyou-confermata.html',
					'build/9-thanksyou-errore.html': 'source/9-thanksyou-errore.html'
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
				tasks: [ 'less', 'autoprefixer', 'cssmin', 'htmlmin' ]
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

	grunt.registerTask('start', ['default', 'browserSync', 'watch']);
	// rivedere il registerTask start per mancanza di sincronizzazione dei file html
	
	grunt.registerTask('default', ['less', 'autoprefixer', 'cssmin', 'htmlmin']);
};