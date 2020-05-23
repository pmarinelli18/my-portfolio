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
	Image,
	Carousel,
} from "grommet";
import CustomTheme from "../../components/CustomTheme/CustomTheme";
import "./Home.css";

import animationData from "../../vectors/name.json";

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
					<Box className="mainLeft" gridArea="main">
						<h1>Hi, I'm Peyton</h1>
						<p>A Software Developer based in Florida</p>
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
				</Grid>
			</Box>
		</Grommet>
	);
};

export default Home;
