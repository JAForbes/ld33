var m = require("mithril")
var path = require("path")
var Promise = require("bluebird")


var play = () => {

	m.route(
		app.active.play_route()
	)
}

var menu = () => {
	app.active.play_route( m.route() )
	m.route("/menu")
}

var jump = () => {
	app.active.play_route( m.route() )
	m.route("/jump")
}

var app = {
	init: () => Promise.resolve(),
	active: {
		system: m.prop(null),
		planet: m.prop(null),
		opponent: m.prop(null),
		play_route: m.prop("/orbit")
	},
	land: () => m.route("/land"),
	orbit: () => m.route("/orbit"),
	explore: () => m.route("/scenario"),
	jump: jump,
	player: m.prop( new require("./models/player") ),
	play: play,
	combat: () => m.route("/combat"),
	menu: menu
}

module.exports = app