//var w=window;
var isObject=function(e){return typeof(e)==='object' && e.constructor===Object;};
//
Object.keys = Object.keys ||function(o){
 var p,f,m=null;
 if(isObject(o)){
	m=[];
	f=Object.prototype.hasOwnProperty;
	for(p in o){
	 if(f.call(o,p)){m[m.length]=p;};
	};
 };
 return m;
};
//
log = console.log.bind(console);
log(Object.keysz({a:1,b:2}));
