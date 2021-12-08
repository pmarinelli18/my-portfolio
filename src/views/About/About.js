import React, { useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
	Grommet,
	Button,
	Text,
	grommet,
	Grid,
	Box,
	Header,
	Heading,
	Diagram,
	Paragraph,
	ResponsiveContext,
} from "grommet";
import CustomTheme from "../../components/CustomTheme/CustomTheme";
import SkillsList from "../../data/Skills.json";
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
	const size = useContext(ResponsiveContext);
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
								I am a Computer Science senior at the University of Florida
								anticipating to graduate in May 2023. I have a wide variety of
								projects and experiences. I previously interned as a Software
								Engineering Intern for Optum(UnitedHealth Group) and the
								University of Florida Neurosurgery Department. I am passionate
								about building immersive experiences using technology. I like
								challenging myself and found myself leading many teams to build
								interesting projects like the TPED Dark Ride and Tweet Crack. I
								will continue to update this site as I work on more projects. If
								you wish to get in contact with me, click the link below!
							</Paragraph>
							<Box alignSelf="center" pad="small">
								<Link to={"/contact"}>
									<Button label="Contact Me" />
								</Link>
							</Box>
							<Box alignSelf="center">
								<a href={"resume21-11-25.pdf"} target="_blank">
									<Button label="Resume" />
								</a>
							</Box>
						</Box>
						<Box gridArea="picture" pad="small" justify="center">
							{/* <Box style={{ maxWidth: "90%" }} pad="large"> */}
							<Box>
								{/* <Diagram
									connections={[
										{
											fromTarget: "1",
											toTarget: "2",
											thickness: "xsmall",
											color: "accent-2",
										},
										{
											fromTarget: "1",
											toTarget: "4",
											thickness: "xsmall",
											color: "accent-2",
											type: "rectilinear",
										},
									]}
								/> */}
								<Box>
									{/* <Grid columns={size !== "small" ? "small" : "100%"}>
										{SkillsList.map((item, index) => (
											<Box
												margin="xsmall"
												pad="small"
												background="brand"
												key={index}
											>
												{item.skill}
											</Box>
										))}
									</Grid> */}
									<Box direction="row" wrap="true">
										{SkillsList.map((item, i) => {
											return (
												<Box
													id={i}
													margin="xsmall"
													pad="small"
													background="brand"
													wrap="true"
												>
													{item.skill}
												</Box>
											);
										})}
									</Box>

									{/* {SkillsList.map((item, i) => {
										return (
											
											
											<Box direction="row">
												{item.map((item2, j) => {
													return (
														<Box
															id={j}
															margin="xsmall"
															pad="small"
															background="brand"
															wrap="true"
														>
															{item2.skill}
														</Box>
													);
												})}
											</Box>
										);
									})} */}
									{/* <Box direction="row">
										<Box
											id="3"
											margin="small"
											pad="medium"
											background="light-4"
										/>
										<Box
											id="4"
											margin="small"
											pad="medium"
											background="light-4"
										/>
									</Box> */}
								</Box>
							</Box>
						</Box>
					</ResponsiveGrid>
				</Box>
			</Box>
		</Grommet>
	);
};

export default About;
