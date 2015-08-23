var m = require("mithril")

var app = require("../app")

module.exports = {
	view: () => m("div",
		m("p", "A pirate is approaching you with weapons armed!"),
		m("button", { onclick: app.jump }, "Run" ),
		m("button", { onclick: app.combat }, "Fight" )
	),
	controller: function(){

	}
}