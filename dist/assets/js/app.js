(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app_name = undefined;

var _init = require('./init');

var _init2 = _interopRequireDefault(_init);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var app = function app() {
  document.querySelector('.container').innerHTML = '<h1>shindDigIt</h1>';
};

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE.
var app_name = exports.app_name = (0, _init2.default)();
app();
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..

},{"./init":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var init = function init() {
	var findCookie = function findCookie(targetKey) {
		var cookies = document.cookie.split(';');
		var targetVal;
		cookies.forEach(function (cookie) {
			var key = cookie.split('=')[0].trim(),
			    val = decodeURIComponent(cookie.split('=')[1]);
			if (key === targetKey) {
				targetVal = val;
			}
		});
		return targetVal;
	};
	var app_name = findCookie('tiy_full_stack_app_name');
	var user = findCookie(app_name + '_user');
	if (user) {
		localStorage.setItem(app_name + '_user', user);
	} else {
		localStorage.removeItem(app_name + '_user');
	}
	return app_name;
};

exports.default = init;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiLCJzcmMvc2NyaXB0cy9pbml0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQ0FBOzs7Ozs7OztBQUdBLElBQU0sTUFBTSxTQUFOLEFBQU0sTUFBVyxBQUNyQjtXQUFBLEFBQVMsY0FBVCxBQUF1QixjQUF2QixBQUFxQyxZQUN0QztBQUZEOztBQUlBO0FBQ0E7QUFDTyxJQUFNLDhCQUFXLFdBQWpCO0FBQ1A7QUFDQTs7Ozs7Ozs7QUNYQSxJQUFNLE9BQU8sU0FBUCxBQUFPLE9BQVcsQUFDdkI7S0FBTSxhQUFhLFNBQWIsQUFBYSxXQUFBLEFBQVMsV0FBVyxBQUN0QztNQUFJLFVBQVUsU0FBQSxBQUFTLE9BQVQsQUFBZ0IsTUFBOUIsQUFBYyxBQUFzQixBQUNwQztNQUFBLEFBQUksQUFDSjtVQUFBLEFBQVEsUUFBUSxVQUFBLEFBQVMsUUFBTyxBQUMvQjtPQUFJLE1BQU0sT0FBQSxBQUFPLE1BQVAsQUFBYSxLQUFiLEFBQWtCLEdBQTVCLEFBQVUsQUFBcUI7T0FDOUIsTUFBTSxtQkFBbUIsT0FBQSxBQUFPLE1BQVAsQUFBYSxLQUR2QyxBQUNPLEFBQW1CLEFBQWtCLEFBQzVDO09BQUksUUFBSixBQUFZLFdBQVcsQUFDdEI7Z0JBQUEsQUFBWSxBQUNaO0FBQ0Q7QUFORCxBQU9BO1NBQUEsQUFBTyxBQUNQO0FBWEQsQUFZQTtLQUFJLFdBQVcsV0FBZixBQUFlLEFBQVcsQUFDMUI7S0FBSSxPQUFPLFdBQVcsV0FBdEIsQUFBVyxBQUFzQixBQUNqQztLQUFBLEFBQUksTUFBTSxBQUNUO2VBQUEsQUFBYSxRQUFRLFdBQXJCLEFBQWdDLFNBQWhDLEFBQXdDLEFBQ3hDO0FBRkQsUUFHSyxBQUNKO2VBQUEsQUFBYSxXQUFXLFdBQXhCLEFBQW1DLEFBQ25DO0FBQ0Q7UUFBQSxBQUFPLEFBQ1A7QUF0QkQ7O2tCLEFBd0JlIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBpbml0IGZyb20gJy4vaW5pdCdcblxuXG5jb25zdCBhcHAgPSBmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLmlubmVySFRNTCA9IGA8aDE+c2hpbmREaWdJdDwvaDE+YFxufVxuXG4vLyB4Li54Li54Li54Li54Li54Li54Li54Li54Li54Li54Li54Li54Li54Li54Li54Li5cbi8vIE5FQ0VTU0FSWSBGT1IgVVNFUiBGVU5DVElPTkFMSVRZLiBETyBOT1QgQ0hBTkdFLlxuZXhwb3J0IGNvbnN0IGFwcF9uYW1lID0gaW5pdCgpXG5hcHAoKVxuLy8geC4ueC4ueC4ueC4ueC4ueC4ueC4ueC4ueC4ueC4ueC4ueC4ueC4ueC4ueC4ueC4uXG4iLCJjb25zdCBpbml0ID0gZnVuY3Rpb24oKSB7XG5cdGNvbnN0IGZpbmRDb29raWUgPSBmdW5jdGlvbih0YXJnZXRLZXkpIHtcblx0XHR2YXIgY29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpXG5cdFx0dmFyIHRhcmdldFZhbFxuXHRcdGNvb2tpZXMuZm9yRWFjaChmdW5jdGlvbihjb29raWUpe1xuXHRcdFx0bGV0IGtleSA9IGNvb2tpZS5zcGxpdCgnPScpWzBdLnRyaW0oKSxcblx0XHRcdFx0dmFsID0gZGVjb2RlVVJJQ29tcG9uZW50KGNvb2tpZS5zcGxpdCgnPScpWzFdKVxuXHRcdFx0aWYgKGtleSA9PT0gdGFyZ2V0S2V5KSB7XG5cdFx0XHRcdHRhcmdldFZhbCA9IHZhbFxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0cmV0dXJuIHRhcmdldFZhbFxuXHR9XG5cdHZhciBhcHBfbmFtZSA9IGZpbmRDb29raWUoJ3RpeV9mdWxsX3N0YWNrX2FwcF9uYW1lJylcblx0dmFyIHVzZXIgPSBmaW5kQ29va2llKGFwcF9uYW1lICsgJ191c2VyJylcblx0aWYgKHVzZXIpIHtcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbShhcHBfbmFtZSArICdfdXNlcicsdXNlcilcblx0fVxuXHRlbHNlIHtcblx0XHRsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShhcHBfbmFtZSArICdfdXNlcicpXG5cdH1cblx0cmV0dXJuIGFwcF9uYW1lXG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXQiXX0=
