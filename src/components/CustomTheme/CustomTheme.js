import React, { useRef, useState } from "react";

const CustomTheme = {
	name: "my theme",
	rounding: 4,
	spacing: 100, //24
	defaultMode: "dark",
	global: {
		colors: {
			brand: {
				light: "#60528E", //"#4B898C"
				dark: "#60528E", //"#4B898C"  //#F26A44 #462066   purple: "#60528E"
			},
			background: {
				dark: "#F1F0FF", //"#111111"
				light: "#F1F0FF", //#99A0AA    puprle: "#F1F0FF"
			},
			"background-back": {
				dark: "#FAF6D2", //"#111111"
				light: "#FAF6D2", //"#EEEEEE"
			},
			"background-front": {
				dark: "#FFFFFF", //"#222222"
				light: "#FFFFFF", //"#FFFFFF"
			},
			"background-contrast": {
				dark: "#11111111", //"#FFFFFF11"
				light: "#11111111", //"#11111111"
			},
			text: {
				dark: "#EEEEEE", //"#EEEEEE"
				light: "#333333",
			},
			"text-strong": {
				dark: "#000000", //"#FFFFFF"
				light: "#000000",
			},
			"text-weak": {
				dark: "#444444", //"#CCCCCC"
				light: "#444444",
			},
			"text-xweak": {
				dark: "#666666", //"#999999",
				light: "#666666",
			},
			border: {
				dark: "#CCCCCC", //"#444444"
				light: "#CCCCCC", //"#CCCCCC"
			},
			control: "brand",
			"active-background": "background-contrast",
			"active-text": "text-strong",
			"selected-background": "brand",
			"selected-text": "text-strong",
			"status-critical": "#FF4040",
			"status-warning": "#FFAA15",
			"status-ok": "#00C781",
			"status-unknown": "#CCCCCC",
			"status-disabled": "#CCCCCC",
			"graph-0": "brand",
			"graph-1": "status-warning",
		},
		font: {
			family: "Helvetica",
		},
		active: {
			background: "active-background",
			color: "active-text",
		},
		hover: {
			background: "active-background",
			color: "active-text",
		},
		selected: {
			background: "selected-background",
			color: "selected-text",
		},
	},
	chart: {},
	diagram: {
		line: {},
	},
	meter: {},
	layer: {
		background: {
			dark: "#FFFFFF", //"#EEEEEE"
			light: "#FFFFFF",
		},
	},
};

export default CustomTheme;
