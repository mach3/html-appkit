/**
 * HeadRequire.js
 * --------------
 * Copyright (C) 2013 Matsukaze.
 *
 * @version 1.4.0
 * @author mach3
 * @require head.js <http://headjs.com>
 *
 */
 !function(a,b){var c,d,e;e=function(){return a.head_conf&&a.head_conf.head?a[a.head_conf.head]:a.head}(),c={path:null,lib:{},attributes:{},set:function(a,b){var c,d;if(a instanceof String||"string"==typeof a)this.attributes[a]=b;else{d=a;for(c in d)d.hasOwnProperty(c)&&this.set(c,d[c])}},get:function(a){return a instanceof String||"string"==typeof a?this.attributes[a]:this.attributes}},d={scripts:[],appname:"app",path:null,init:function(){var b=this;this.node=this._getSelf(),this.appname=this._data("appname")||this.appname,this._each((this._data("main")||"").split(/[\s,]/),function(a){a&&b.scripts.push(a)}),this.scripts.length&&(this.path=this._dirname(this.scripts[0]),c.path=this.path,a[this.appname]=c,e.js.apply(e,this.scripts))},require:function(){var a,b;a=this.path,b=[],this._each(arguments,function(c,d){b[d]=a+c}),e.js.apply(e,b)},_getSelf:function(){var a=b.getElementsByTagName("script");return a[a.length-1]},_data:function(a){return this.node.getAttribute("data-"+a)},_dirname:function(a){return a.replace(/(#|\?).+$/g,"").replace(/[^\/]+$/,"")},_each:function(a,b){var c;for(c in a)if(a.hasOwnProperty(c)&&!1===b(a[c],c,a))break}},e.require=function(){d.require.apply(d,arguments)},d.init()}(this,document);