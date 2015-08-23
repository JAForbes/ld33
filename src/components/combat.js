var m = require("mithril")

var app = require("../app")

module.exports = {
	view: () => m("div",
		m("p", "Pirate - Fighter - Dangerous"),
		m("button", "Shoot" ),
		m("button", "Shield" ),
		m("button", "Maneuver" ),
		m("button", { onclick: app.jump }, "Jump" )
	),
	controller: function(){

	}
}