var m = require("mithril")
var app = require("../app")
module.exports = {
	view: () => m("div",
		m("button", {
			onclick: () => app.menu()
		},"menu")
	)
}