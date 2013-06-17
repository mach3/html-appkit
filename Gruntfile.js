
module.exports = function(grunt){

	grunt.loadNpmTasks("grunt-easy-less");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("head-require");
	
	// grunt.loadNpmtasks("grunt-chain-shell");
	// grunt.loadNpmTasks("modullatte");

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
	});
};