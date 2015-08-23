var m = require("mithril")
var app = require("../app")

module.exports = {
	view: ( ctrl ) => m("div",
		m("p", "map goes here"),
		m("button", {
			onclick: () => {
				app.active.system( ctrl.selected() )
				app.orbit()
			},
		},"Jump to System <system>"),
		m("button", { onclick: app.play }, "Cancel Jump" )
	),
	controller: function(){
		this.selected = m.prop("Example System")
	}
}