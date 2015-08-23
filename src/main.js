var init = require("./init")

var app = require("./app")
app.init()
	.then(
		// Kick off the various sub components
		() => init({

			container: document.body,

			routes: [
				"menu",
				"orbit",
				"jump",
				"land",
				"scenario",
				"combat",
			]
		})
	)


require("./patch")