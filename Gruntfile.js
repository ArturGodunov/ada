module.exports = function(grunt) {
	grunt.initConfig({
		jade: {
			dist: {
				options: {
					pretty: true,
					data: {
						debug: false
					}
				},
				files: [{
					expand: true,
					cwd: 'src/jade',
					src: ['**/*.jade', '!includes/**/*.*'],
					dest: 'dist/',
					ext: '.html'
				}]
			}
		},

		sass: {
			dist: {
				options: {
					style: 'expanded',
					sourcemap: 'none'
				},
				files: {
					'dist/styles/styles.css': 'src/sass/layout.scss'
				}
			}
		},

		autoprefixer: {
			options: {
				browsers: ['last 3 versions', 'ie 9', 'ie 10']
			},
			dist:{
				files:{
					'dist/styles/styles.css': 'dist/styles/styles.css'
				}
			}
		},

		watch: {
			options: {
				livereload: true
			},
			html: {
				files: [
					'src/jade/**/*.jade'
				],
				tasks: ['jade:dist'],
				options: {
					spawn: false
				}
			},
			css: {
				files: [
                    'src/sass/**/*.scss'
                ],
				tasks: ['sass:dist', 'autoprefixer:dist'],
				options: {
					spawn: false
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', [
		'jade',
        'sass',
		'autoprefixer',
        'watch'
    ]);
};