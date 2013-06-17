
# Grunt-Chain-Shell

Run shell script chainly.

## How to use

### Basic

```javascript
loadNpmTasks("grunt-chain-shell");

grunt.initConfig({
	chain : {
		dist : {
			commands : [
				"date >> date.txt"
			]
		}
	}
});
```

### Use variables

You can define variables in `options.vars`,
and use it as `{{key}}` in commands.

```
grunt.initConfig({
	chain : {
		options : {
			vars : {
				destfile : "date.txt"
			}
		},
		dist : {
			commands : [
				"date >> {{destfile}}"
			]
		}
	}
});
```

### Ignore errors

When shell returns an error, process stops as default.
To ignore errors and continue to run the process, start the command with `-` like Makefile.

```
grunt.initConfig({
	chain : {
		dist : {
			commands : [
				"-rm foo.txt", // Even if this cause an error, continue to run.
				"touch foo.txt"
			]
		}
	}
});
```

### Verbose 

if `options.verbose` is true, this print the log. (default is true)

```
grunt.initConfig({
	chain : {
		options : {
			verbose : false // any log message will not be printed.
		}
	}
});
```


### Author

mach3

- [Website](http://www.mach3.jp)
- [Blog](http://blog.mach3.jp)
- [Twitter](http://twitter.com/mach3ss)
