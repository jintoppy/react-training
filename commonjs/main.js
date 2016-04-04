var dep1 = require('./dep1');
var lodash = require('lodash');
console.log("This is inside main.js");
dep1.sayHello();
console.log(lodash.uniqueId());
