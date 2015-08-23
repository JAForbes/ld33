var m = require("mithril")
var _ = require("lodash")


var table_input = (type, headings, props) =>
	m("table.table",
		m("thead",
			m("tr",
				headings.map(
					(heading) => m("th", _.capitalize(heading))
				)
			)
		),
		m("tbody",
			m("tr",
				headings.map(
					(heading) => m("td",
						m("input", {
							type:type,
							placeholder: "e.g. "+_.random(0, 1000),
							value: props[heading](),
							oninput: m.withAttr("value", props[heading])
						})
					)
				)
			)
		)
	)

var table = (headings, rows, attr) => m("table.table table-striped",
	m("thead",
		m("tr",
			headings.map(
				(heading) => m("th", _.capitalize(heading))
			)
		)
	),
	m("tbody",
		rows.map(
			(row) => m("tr",
				row.map(
					(cell) => m("td", cell)
				)
			)
		)
	)
)

/*
	A bootstrap tabset.  Receives a list of tab names, and an m.prop(<active tabname>)
*/
var tabset = ( tabnames, active) =>

	m("ul",{className: "nav nav-tabs"},
		tabnames.map(
			(tab) => m("li", {role: "presentation", className: tab == active() && "active" },
				m("a", { onclick: () => active(tab) }, tab )
			)
		)
	)


/*
	A bootstrap checkbox.  Receives a label string and an m.prop() for persistence
*/
var checkbox = function(label, prop) {
	return m("label.checkbox-inline",
		m("input[type=checkbox]", {
			checked: prop(),
			onclick: m.withAttr("checked", prop)
		}),
		_.capitalize(label)
	)
}

/*
	A select element.  Receives a list of options and a prop for persistence
*/
var select = (options, prop) =>
	m("select", {
		onchange: prop && m.withAttr("value", prop),
		value: prop()
	},
		options.map(
			(option) => m("option", {
				value: option,
			}, option)
		)
	)


var list = (items) =>
	m("ul.list-inline",
		items.map( (item) => m("li", item ) )
	)

var input = (type, prop, attr) =>
	m("input.form-control",
		_.extend(
			{
				value: prop(),
				type: type,
				oninput: prop && m.withAttr("value", prop),
			},
			attr || {}
		)

	)

var label_input = (label, type, prop, attr) =>
	m("label",
		label,
		input(type, prop, attr)
	)

module.exports = {
	tabset: tabset,
	checkbox: checkbox,
	select: select,
	list: list,
	input: input,
	label_input: label_input,
	table_input: table_input,
	table: table
}