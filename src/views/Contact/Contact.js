import React, { useRef, useState } from "react";
import { Grommet, Box, Button, Text, grommet, Grid } from "grommet";
import CustomTheme from "../../components/CustomTheme/CustomTheme";
const Contact = () => {
	return (
		<Grommet theme={CustomTheme} background="dark-2">
			{/* <Grommet theme={CustomTheme} background="dark-2" full > */}
			{/* <Box fill ="vertical" > */}
			<Box
				pad="medium"
				margin="small"
				fill="vertical"
				// border = {{
				//     "color": "light-6",
				//     "opacity": "strong",
				//     "size": "xlarge",
				//     "side": "all"
				// }}
			>
				<Grid
					fill
					areas={[
						{ name: "contact", start: [0, 0], end: [0, 0] },
						{ name: "picture", start: [1, 0], end: [1, 0] },
					]}
					columns={["flex", "flex"]}
					rows={["flex"]}
					gap="small"
				>
					<Box gridArea="contact">
						<h1>Contact me</h1>
						<h2>Email: Pmarinelli@ufl.edu</h2>
						<h2>: Pmarinelli@ufl.edu</h2>
					</Box>
					<Box gridArea="picture"></Box>
				</Grid>
				{/* </Box> */}
			</Box>
		</Grommet>
	);
};

export default Contact;
