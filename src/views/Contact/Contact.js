import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
	Grommet,
	Box,
	Grid,
	Heading,
	Paragraph,
	ResponsiveContext,
} from "grommet";

import { Github, Linkedin, Twitter } from "grommet-icons";
import CustomTheme from "../../components/CustomTheme/CustomTheme";

import "./Contact.css";
import MyForm from "../../components/myform/myform";

const ResponsiveGrid = ({ children, areas, columns, rows, ...props }) => {
	const size = React.useContext(ResponsiveContext);
	return (
		<Grid
			areas={areas[size]}
			// columns={columns[size]}
			// rows={rows[size]}
			columns={columns}
			rows={rows}
			{...props}
		>
			{children}
		</Grid>
	);
};

const Contact = () => {
	return (
		<Grommet theme={CustomTheme} fill>
			{/* <Grommet theme={CustomTheme} background="dark-2" fill> */}
			{/* <Box fill ="vertical" > */}
			<Box
				pad="medium"
				margin="small"
				fill
				// border = {{
				//     "color": "light-6",
				//     "opacity": "strong",
				//     "size": "xlarge",
				//     "side": "all"
				// }}
			>
				<ResponsiveGrid
					fill
					columns={["50%", "50%"]}
					rows={["flex", "flex"]}
					areas={{
						small: [
							{ name: "picture", start: [0, 1], end: [1, 1] },
							{ name: "contact", start: [0, 0], end: [1, 0] },
						],
						medium: [
							{ name: "contact", start: [0, 0], end: [0, 0] },
							{ name: "picture", start: [1, 0], end: [1, 0] },
						],
						large: [
							{ name: "contact", start: [0, 0], end: [0, 0] },
							{ name: "picture", start: [1, 0], end: [1, 0] },
						],
					}}
					// columns={{
					// 	small: [["fit"]],
					// 	medium: [["flex", "flex"]],
					// }}
					// rows={{
					// 	small: [["fit", "fit"]],
					// 	medium: [["flex"]],
					// }}
					gap="small"
				>
					<Box gridArea="contact" className="CenterContact">
						<Heading>Let's Get In Touch</Heading>
						<Paragraph>
							Have a question, want to work together, or simply want to have a
							chat? Feel free to leave me an e-mail at pmarinelli@ufl.edu or
							simply fill out the form on this page and I will reply to you
							soon!
						</Paragraph>
						<Grid
							align="center"
							areas={[
								{ name: "github", start: [0, 0], end: [0, 0] },
								{ name: "linkedin", start: [1, 0], end: [1, 0] },
								{ name: "twitter", start: [2, 0], end: [2, 0] },
							]}
							columns={["xsmall", "xsmall", "xsmall"]}
							rows={["flex"]}
						>
							<a
								align="center"
								target="_blank"
								href={"https://github.com/pmarinelli18"}
							>
								<Github gridArea="github" color={"brand"} />
							</a>
							<a
								align="center"
								target="_blank"
								href={"https://www.linkedin.com/in/peyton-marinelli-b93a0275"}
							>
								<Linkedin gridArea="linedin" color={"brand"} />
							</a>
							<a
								align="center"
								target="_blank"
								href={"https://twitter.com/pmarinelli18"}
							>
								<Twitter gridArea="twitter" color={"brand"} />
							</a>
						</Grid>
					</Box>
					<Box
						justify="center"
						gridArea="picture"
						className="Middle"
						fill="vertical"
						className="CenterContact"
					>
						<Box
							justify="center"
							background={{ color: "white", opacity: "strong" }}
							pad="large"
							round
							className="Middle"
						>
							<MyForm />
						</Box>
					</Box>
				</ResponsiveGrid>
				{/* </Box> */}
			</Box>
		</Grommet>
	);
};

export default Contact;
