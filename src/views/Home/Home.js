import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import {
	Grommet,
	Button,
	Text,
	grommet,
	Grid,
	Box,
	Header,
	Paragraph,
	Image,
	Carousel,
	Heading,
	ResponsiveContext,
} from "grommet";
import CustomTheme from "../../components/CustomTheme/CustomTheme";
import "./Home.css";

import animationData from "../../vectors/name.json";

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

const Home = () => {
	const Name = {
		loop: false,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};
	return (
		<Grommet theme={CustomTheme} background="dark-2">
			<Box pad="medium" margin="large">
				<ResponsiveGrid
					fill
					columns={["50%", "50%"]}
					rows={["flex", "flex"]}
					areas={{
						small: [
							{ name: "picture", start: [0, 1], end: [1, 1] },
							{ name: "main", start: [0, 0], end: [1, 0] },
						],
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
						<Heading margin="xsmall">Hi, I'm Peyton</Heading>
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
					</Box>
					<Box gridArea="picture">
						<Box
							style={{ maxWidth: "90%" }}
							pad={{ left: "large", right: "large", bottom: "large" }}
						>
							<Lottie options={Name} />
							<Box
								overflow="hidden"
								background={{ color: "brand", opacity: "80%" }}
								pad="xsmall"
							>
								<Carousel fill controls={false} play={5000}>
									<Image fill src="0.jpg" />
									<Image fill src="1.jpeg" />
									<Image fill src="2.jpg" />
									<Image fill src="3.jfif" />
								</Carousel>
							</Box>
						</Box>
					</Box>
				</ResponsiveGrid>
			</Box>
		</Grommet>
	);
};

export default Home;
