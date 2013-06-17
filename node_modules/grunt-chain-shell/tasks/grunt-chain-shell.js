/**
 * grunt-chain-shell
 * -----------------
 * Run shell scripts chainly.
 */

module.exports = function(grunt){

	grunt.registerMultiTask(
		"chain", 
		"Run shell script chainly",
		function(){

			var my = {};

			my.commands = this.data.commands;
			my.options = this.options({
				verbose : true,
				vars : {}
			});
			my.done = this.async();
			my.cp = require("child_process");

			my.render = function(template, vars){
				return template.replace(/{{(\w+?)}}/g, function(a, b){
					return vars[b] || "";
				});
			};

			my.parse = function(command){
				var pattern, ignore

				pattern = /^\-/;
				command = my.render(command, my.options.vars);
				ignore = command.match(pattern) !== null;
				return {
					value : ignore ? command.replace(pattern, "") : command,
					ignore : ignore
				};
			};

			my.log = function(command, ignored){
				var msg = my.render("[run] {{command}} {{ignored}}", {
					command : command,
					ignored : (ignored) ? "(ignored)" : ""
				});
				grunt.log.writeln(msg);
			};

			my.run = function(){
				var item;

				if(my.commands.length){
					item = my.parse(my.commands.shift());
					my.cp.exec(item.value, function(e, out, error){
						if(! item.ignore && e){
							grunt.log.error(error);
						} else {
							if(my.options.verbose){
								my.log(item.value, e);
							}
							my.run();
						}
					});
				} else {
					my.done();
				}
			};

			my.run();
		});

};