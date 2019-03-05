
//easy module to export cache to use accross multiple files
var nodeCache = require('node-cache');
var cache = new nodeCache();

module.exports = cache;
