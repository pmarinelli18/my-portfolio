import React, { useRef, useState } from "react";
import {
	Grommet,
	Button,
	Text,
	grommet,
	Grid,
	Box,
	Header,
	Heading,
	Paragraph,
	ResponsiveContext,
} from "grommet";
import CustomTheme from "../../components/CustomTheme/CustomTheme";

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

const About = () => {
	return (
		// <Grommet theme={CustomTheme} background="dark-2">
		<Grommet theme={CustomTheme}>
			<Box pad="medium" margin="large" maxHeight="100%">
				{/* <Box pad="medium" margin="large"> */}
				<Box>
					<ResponsiveGrid
						fill //THis is new
						columns={["50%", "50%"]}
						rows={["flex", "flex"]}
						//responsive="true"
						areas={{
							small: [
								{ name: "picture", start: [0, 1], end: [1, 1] },
								{ name: "main", start: [0, 0], end: [1, 0] },
							],
							// small: [
							// 	{ name: "main", start: [0, 0], end: [0, 0] },
							// 	{ name: "picture", start: [1, 0], end: [1, 0] },
							// ],
							medium: [
								{ name: "main", start: [0, 0], end: [0, 0] },
								{ name: "picture", start: [1, 0], end: [1, 0] },
							],
							large: [
								{ name: "main", start: [0, 0], end: [0, 0] },
								{ name: "picture", start: [1, 0], end: [1, 0] },
							],
						}}
						gap="small"
					>
						<Box className="mainLeftAbout" gridArea="main">
							<Heading alignSelf="center">About Me</Heading>
							<Paragraph alignSelf="center">
								I am a Computer Science Engineering student at the University of
								Florida. I like challenging myself and finding ways to improve
								the lives of people around me. This has lead me to participate
								in hackathons, interesting clubs, and projects of my own. This
								site will never be completed, it will continue to be updated as
								I work on more projects. If you wish to get in contact with me,
								my contact information click the link below!
							</Paragraph>
						</Box>
						<Box gridArea="picture">
							<Box style={{ maxWidth: "90%" }} pad="large"></Box>
						</Box>
					</ResponsiveGrid>
				</Box>
			</Box>
		</Grommet>
	);
};

export default About;
