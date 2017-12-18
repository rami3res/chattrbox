var path = require('path');
var fs = require('fs');

var handleError = function(err, res) {
var errorFilePath = path.resolve(__dirname, 'app', 'error.html');
  fs.readFile(errorFilePath, function(error, data) {
    res.writeHead(404);
    res.end(data);
  });
};
module.exports = handleError;
