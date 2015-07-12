
var mySUT = {
	callCallback: function(callback) {
		callback();
	},
	callCallbackWithRetrunValue: function(callback){
		return callback();
	},
	callDependency: function(){
		return myDep.someMethod();
	},
	callDependencyBetter: function(dependency){
		return dependency.someMethod();
	}
}

var myDep = {
	someMethod: function(){
		return 10;
	}
}

function realCallback(){
	return 4;
}