
module.exports = function(grunt){

	grunt.loadNpmTasks("grunt-easy-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("head-require");
	grunt.loadNpmtasks("grunt-chain-shell");

	grunt.initConfig({
		ezless : {
			dist : {
				options : {
					lessPath : "./assets/less",
					cssPath : "./assets/css"
				}
			}
		},
		watch : {
			ezless : {
				files : ["./assets/less/**/*.less"],
				tasks : ["ezless:dist"]
			}
		}
		headRequire: {
			options: {
				uglify: true
			},
			dist: {
				files: {
				}
			}
		},
		chain: {
			dist: {
				commands: []
			}
		}
	});

	grunt.registerTask("default", []);
	
};