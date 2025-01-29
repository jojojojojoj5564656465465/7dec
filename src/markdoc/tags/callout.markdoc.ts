import { component } from "@astrojs/markdoc/config";

export const callout = {
	render: component("./src/components/Callout.astro"),
	children: ["paragraph", "tag", "list"],
	attributes: {
		type: {
			type: String,
			default: "note",
			matches: ["caution", "check", "note", "warning"],
			errorLevel: "critical",
		},
		title: {
			type: String,
		},
	},

};