import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import {
	Grommet,
	Button,
	Text,
	grommet,
	Card,
	Grid,
	Box,
	Header,
	Paragraph,
	Image,
	Carousel,
	Heading,
	Distribution,
	ResponsiveContext,
} from "grommet";
import CustomTheme from "../../components/CustomTheme/CustomTheme";
import "./Home.css";

import animationData from "../../vectors/name.json";
import animationDataBlack from "../../vectors/nameBlack.json";

const ResponsiveGrid = ({ children, areas, columns, rows, ...props }) => {
	const size = React.useContext(ResponsiveContext);
	return (
		<Grid
			areas={areas[size]}
			// columns={columns[size]}
			// rows={rows[size]}
			columns={columns} // this is new
			rows={rows} //this is new
			{...props}
		>
			{children}
		</Grid>
	);
};

const Home = () => {
	const Name = {
		loop: false,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const NameBlack = {
		loop: false,
		autoplay: true,
		animationData: animationDataBlack,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		// <Grommet theme={CustomTheme} background="dark-2">
		<Grommet theme={CustomTheme}>
			<Box pad="medium" margin="large" maxHeight="100%">
				{/* <Grid
					columns={["50%", "50%"]}
					rows={["flex", "flex"]}
					responsive="true"
					areas={[
						{ name: "main", start: [0, 0], end: [0, 0] },
						{ name: "picture", start: [1, 0], end: [1, 0] },
					]}
				> */}
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
					<Box className="mainLeft" gridArea="main">
						<Heading alignSelf="center" margin="xsmall">
							Hi, I'm Peyton
						</Heading>
						<Paragraph alignSelf="center" margin="xsmall">
							A Software Developer based in Florida
						</Paragraph>
						<p>
							<Link to={"/contact"}>
								<Button label="Contact Me" />
							</Link>
						</p>
						<p></p>
						<p></p>
						<p></p>
						<p></p>
					</Box>
					<Box gridArea="picture">
						<Box
							style={{ maxWidth: "100%", maxHeight: "100%" }}
							alignSelf="center"
							pad={{ left: "large", right: "large", bottom: "xlarge" }}
						>
							<Box
								overflow="hidden"
								background={{ color: "brand", opacity: "80%" }}
								width="medium"
								// style={{ maxHeight: "10px" }}
								pad="xsmall"
							>
								<Carousel fill controls={false} play={5000}>
									<Image fit="contain" fill src="0.jpg" />
									<Image fit="contain" fill src="1.jpeg" />
									<Image fit="contain" fill src="2.jpg" />
									<Image fit="contain" fill src="3.jfif" />
								</Carousel>
							</Box>
							<Box width="fill" pad="medium">
								<Lottie options={NameBlack} />
							</Box>
						</Box>
					</Box>
				</ResponsiveGrid>
				{/* </Grid> */}
			</Box>
		</Grommet>
	);
};

export default Home;
