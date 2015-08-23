var m = require("mithril")
var app = require("../app")

module.exports = {
	view: () => m("div",

		m("button", "Upgrades"),
		m("button", "Commodities"),
		m("button", "Renergize"),
		m("button", {
			onclick: app.orbit
		}, "Take off")
	),
	component: function(){}
}