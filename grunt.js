module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: "<json:package.json>",
		lint: {
			files: [ "*.js", "app/**/*.js" ]
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				node: true,
				smarttabs: true,
				trailing: true,
				onevar: true
			},
			globals: {
				exports: true
			}
		}
	});

	// Default task.
	grunt.registerTask( "default", "lint" );

};