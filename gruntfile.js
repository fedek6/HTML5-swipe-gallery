module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		banner : '/*! <%= pkg.name %> - v<%= pkg.version %> ' +
				 '<%= grunt.template.today("yyyy-mm-dd h:MM:ss") %>' +
				 '*/' + "\n",
		
		/**
		 * Sass
		 */	
		sass : {
			dist : {
				options : {
					style: 'compressed',
				},
				files : {
					// Główny plik css
					'css/main.css' : 'src/scss/main.scss',
				}
			},
			devel : {
				options : {
					style: 'expanded',
				},
				files : {
					// Główny plik css
					'css/main.css' : 'src/scss/main.scss',
				}
			}, 
		},	

	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Default task(s).
	grunt.registerTask('default', ['sass:dist']);
	grunt.registerTask('devel', ['sass:devel']);

};
