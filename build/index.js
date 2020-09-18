"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _items = new WeakMap();

var Stack = function () {
	function Stack() {
		_classCallCheck(this, Stack);

		_items.set(this, []);
	}

	_createClass(Stack, [{
		key: "push",
		value: function push(obj) {
			_items.get(this).push(obj);
		}
	}, {
		key: "pop",
		value: function pop() {
			var items = _items.get(this);
			if (items.length === 0) throw new Error("Stack is empty");

			return items.pop();
		}
	}, {
		key: "peek",
		value: function peek() {
			var items = _items.get(this);
			if (items.length === 0) throw new Error('Stack is empty');
			return items[items.length - 1];
		}
	}, {
		key: "count",
		get: function get() {
			return _items.get(this).length;
		}
	}]);

	return Stack;
}();

var stack = new Stack();
