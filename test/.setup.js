import $ from 'jquery';
import Backbone from 'backbone';

const { JSDOM } = require('jsdom');
const { window, window: { document } } = new JSDOM(
	'<!DOCTYPE html>' +
	'<html>' +
		'<body>' +
			'<div id="app"></div>' +
		'</body>' +
	'</html>'
);

global.window = window;
global.window.localStorage = {
	getItem: function () {}
}
global.document = document;
global.$ = $(window);
Backbone.$ = global.$;

Object.keys(window).forEach(key => {
	if(!(key in global)) {
		global[key] = window[key];
	}
});

if(!global.window.Element.prototype.dataset) {
	global.window.Element.prototype.dataset = {};
}