var m = require("mithril")
var app = require("../app")
var style = require("../styles/menu")


var banner = ( c ) =>
	m("h1","LD33 Game!")

var play = ( c ) =>
	m("h2",{
		onclick: () => c.play()
	}, "Play")

var help = ( c ) =>
	m("p",
		m("a",{
			onclick: () => c.mode("help"),
		}, "Instructions")
	)

var credits = (c) => [
	m("a", {
		href: "http://james-forbes.com"
	}, "Made by James Forbes")
]

var instructions = (c) => [
	m("p", "Explore the Galaxy"),
	m("p", "Upgrade your ship"),
	m("p", "Buy and Sell commodities"),
	m("p", "Mine asteroids"),
	m("p", "Defend yourself, space is dangerous!"),
	m("a",{
		onclick: () => c.mode("menu")
	}, "Back to Menu")
]

var main = (c) => [
	banner(c),
	play(c),
	help(c),
	credits(c)
]

var modes = {
	help: instructions,
	menu: main
}

module.exports = {
	controller: function(){
		this.mode = m.prop("menu")
		this.play = app.play
	},
	view: (c) =>
		m("div", { style: style.css() },
			modes[c.mode()](c)
		)


}