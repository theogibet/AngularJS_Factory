'use strict';

var Fact = angular.module("Fact", []);

Fact.factory('Items', function () {
	var items = [];
	var item = {};

	items.post = function (title, cont) {
		item = {
			date: title,
			content: cont
		};
		items.push(item);
		return []
	};

	items.get = function () {
		return items
	};

	return items;
});
