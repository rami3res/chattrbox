(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChatApp = function ChatApp() {
  _classCallCheck(this, ChatApp);

  console.log('Hello ES6!');
};

var ChatMessage = function ChatMessage(_ref) {
  var m = _ref['message'],
      _ref$user = _ref['user'],
      u = _ref$user === undefined ? 'batman' : _ref$user,
      _ref$timestamp = _ref['timestamp'],
      t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

  _classCallCheck(this, ChatMessage);

  this.message = m;
  this.user = u;
  this.timestamp = t;
};

exports.default = ChatApp;

},{}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default();

},{"./app":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztJQ0FNLE8sR0FDSixtQkFBYztBQUFBOztBQUNaLFVBQVEsR0FBUixDQUFZLFlBQVo7QUFDRCxDOztJQUdHLFcsR0FDSiwyQkFJRztBQUFBLE1BSFUsQ0FHVixRQUhELFNBR0M7QUFBQSx1QkFGRCxNQUVDO0FBQUEsTUFGTyxDQUVQLDZCQUZXLFFBRVg7QUFBQSw0QkFERCxXQUNDO0FBQUEsTUFEWSxDQUNaLGtDQURpQixJQUFJLElBQUosRUFBRCxDQUFhLE9BQWIsRUFDaEI7O0FBQUE7O0FBQ0QsT0FBSyxPQUFMLEdBQWUsQ0FBZjtBQUNBLE9BQUssSUFBTCxHQUFZLENBQVo7QUFDQSxPQUFLLFNBQUwsR0FBaUIsQ0FBakI7QUFDRCxDOztrQkFHWSxPOzs7OztBQ2xCZjs7Ozs7O0FBRUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgQ2hhdEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnNvbGUubG9nKCdIZWxsbyBFUzYhJyk7XG4gIH1cbn1cblxuY2xhc3MgQ2hhdE1lc3NhZ2Uge1xuICBjb25zdHJ1Y3Rvcih7XG4gICAgJ21lc3NhZ2UnOiBtLFxuICAgICd1c2VyJzogdSA9ICdiYXRtYW4nLFxuICAgICd0aW1lc3RhbXAnOiB0ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKVxuICB9KSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbTtcbiAgICB0aGlzLnVzZXIgPSB1O1xuICAgIHRoaXMudGltZXN0YW1wID0gdDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGF0QXBwO1xuIiwiaW1wb3J0IENoYXRBcHAgZnJvbSAnLi9hcHAnO1xuXG5uZXcgQ2hhdEFwcCgpO1xuIl19
