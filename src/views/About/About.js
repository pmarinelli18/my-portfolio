import React, { useRef, useState } from "react";
import { Grommet, Button, Text, grommet, Grid, Box, Header } from "grommet";

const About = () => {
	return (
		<Box>
			<Box pad="medium" margin="large">
				<Grid
					fill
					areas={[
						{ name: "main", start: [0, 0], end: [0, 0] },
						{ name: "picture", start: [1, 0], end: [1, 0] },
					]}
					columns={["flex", "flex"]}
					rows={["flex"]}
					gap="small"
				>
					<Box gridArea="main">
						<h1>About</h1>
						<p>
							I am a Computer Science Engineering student at the University of
							Florida. I like challenging myself and finding ways to improve the
							lives of people around me. This has lead me to participate in
							hackathons, interesting clubs, and projects of my own. This site
							will never be completed, it will continue to be updated as I work
							on more projects. If you wish to get in contact with me my contact
							information click the link below!
						</p>
					</Box>
					<Box gridArea="picture">
						<Box style={{ maxWidth: "90%" }} pad="large"></Box>
					</Box>
				</Grid>
			</Box>
		</Box>
	);
};

export default About;
