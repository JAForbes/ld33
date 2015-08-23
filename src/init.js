var m = require("mithril")
var _ = require("lodash")

var accumulate_route = (routes, route) =>
	routes["/"+route] = require("./components/"+route)


var init = {

	init (options) {
		//populate and configure the respective	sub components
		init.header_pane(header_pane)
		init.content_pane(content_pane, options.routes)
	},

	header_pane (container) {
		m.mount(
			container, require("./components/header")
		)
	},

	content_pane (container, routes) {
		m.route.mode = "hash"
		m.route(content_pane, "/"+routes[0],
			_.transform( routes, accumulate_route, {})
		)
	}
}

module.exports = init.init