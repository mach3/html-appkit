
module.exports = function(grunt){

	grunt.loadNpmTasks("grunt-easy-less");
	grunt.loadNpmTasks("grunt-contrib-watch");

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