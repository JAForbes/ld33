var m = require("mithril")

var header = require("../styles/header")
var content = require("../styles/content")

module.exports = () =>
	m("div#app.container-fluid",
		m("div#header_pane", { style: header.css() }),
		m("div#content_pane", { style: content.css() })
	)

module.exports.require = require