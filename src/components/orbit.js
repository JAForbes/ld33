var m = require("mithril")
var app = require("../app")

module.exports = {
	controller: function(){},
	view: () => m("div",

		m("button", { onclick: app.explore}, "Explore"),
		m("button", { onclick: app.land }, "Land"),
		m("button", { onclick: app.jump }, "Navigate")
	)
}