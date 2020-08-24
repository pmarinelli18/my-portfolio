import React, { useRef, useState } from "react";
import "./Projects.css";
import { Close } from "grommet-icons";
import {
	Grommet,
	Anchor,
	Box,
	Button,
	Text,
	Nav,
	Avatar,
	Drop,
	grommet,
	Stack,
	Grid,
	Image,
	Layer,
	Heading,
	Carousel,
	Paragraph,
	Tabs,
	Tab,
	ResponsiveContext,
} from "grommet";

import CustomTheme from "../../components/CustomTheme/CustomTheme";

import ProjectsList from "../../data/projects.json";

const Projects = () => {
	const [open, setOpen] = useState(false);

	const [index, setIndex] = useState(0);

	const [popover, setPopover] = useState(0);

	const onActive = (nextIndex) => setIndex(nextIndex);

	const onOpen = (i, j) => {
		setPopover(i);
		setIndex(j);
		setOpen(true);
	};

	const onClose = () => setOpen(false);
	return (
		<ResponsiveContext>
			{(responsive) =>
				responsive === "small" ? (
					<Box fill="vertical">
						{/* <Grommet theme={CustomTheme} background="dark-2" fill = "vertical"> */}
						<Box
							// justify="center"
							// gap="small"
							// fill="vertical"
							// margin="small"
							align="center"
						>
							{/* <Box  fill="vertical"> */}
							<Heading>Projects</Heading>
							{ProjectsList.map((item, j) => {
								return (
									<div>
										{item.map((project, i) => {
											return (
												<Grid
													// background="dark-2"
													columns={{
														count: 1,
														size: "auto",
													}}
													rows={{
														size: "medium",
													}}
													gap="medium"
													pad="small"
												>
													<Box
														pad="medium"
														align="center"
														background={{
															color: "white",
															opacity: "strong",
														}}
														round
														gap="small"
														fill="vertical"
													>
														<Box height="xsmall" width="small">
															<Image fit="contain" src={project.images[0]} />
														</Box>
														<Text>{project.title}</Text>
														<Button label="More" onClick={() => onOpen(i, j)} />
													</Box>
												</Grid>
											);
										})}
									</div>
								);
							})}
							{/* </Box> */}
						</Box>
						{open && (
							<Layer
								margin="small"
								position="center"
								modal="true"
								onClickOutside={onClose}
								onEsc={onClose}
							>
								<Box
									flex={false}
									direction="row"
									justify="between"
									pad={{ left: "small", right: "small", top: "xsmall" }}
								>
									<Heading level={3} margin="none">
										{ProjectsList[index][popover].title}
									</Heading>
									<Button icon={<Close />} onClick={onClose} />
								</Box>
								<Box pad="xsmall">
									<Carousel fill>
										{ProjectsList[index][popover].images.map((picture, i) => {
											return <Image fit="contain" src={picture} />;
										})}
									</Carousel>
								</Box>
								<Box pad="medium">
									<Paragraph fill="true">
										{ProjectsList[index][popover].description}
									</Paragraph>
									<Paragraph fill="true">
										<Text>Technologies used: </Text>
										{ProjectsList[index][popover].tech}
									</Paragraph>
									<Box align="center">
										<Grid
											rows={["xsmall", "xsmall"]}
											columns={["small", "small"]}
											gap="small"
											areas={[
												{ name: "1", start: [0, 1], end: [0, 1] },
												{ name: "2", start: [0, 1], end: [0, 1] },
											]}
										>
											{ProjectsList[index][popover].links.map((item, i) => {
												return (
													<a
														gridArea={i}
														target="_blank"
														pad="small"
														href={item.link}
													>
														<Button label={item.name} />
													</a>
												);
											})}
										</Grid>
									</Box>
									<Box
										as="footer"
										gap="small"
										direction="row"
										align="center"
										justify="end"
										pad={{ top: "medium", bottom: "small" }}
									></Box>
								</Box>
							</Layer>
						)}
						{/* </Grommet> */}
					</Box>
				) : (
					<Box className="middle" fill>
						{/* <Grommet theme={CustomTheme} background="dark-2" fill = "vertical"> */}
						<Box className="middle" fill>
							<Heading size="small" style={{ "line-height": "0px" }}>
								Projects
							</Heading>
							<Tabs
								activeIndex={index}
								onActive={onActive}
								justify="center"
								alignSelf="center"
								flex
							>
								{ProjectsList.map((item, i) => {
									return (
										<Tab title={"Page " + (i + 1)}>
											<Box
												margin={{
													// bottom: "xsmall",
													top: "xsmall",
												}}
												align="center"
												fill="vertical"
											>
												<Grid
													background="dark-2"
													columns={{
														count: 4,
														size: "auto",
													}}
													rows={{
														count: 2,
														size: "medium",
													}}
													gap="small"
												>
													{item.map((project, i) => {
														return (
															<Box
																pad="small"
																align="center"
																background={{
																	color: "white",
																	opacity: "strong",
																}}
																round
																gap="none"
															>
																<Box height="xsmall" width="small">
																	<Image
																		fit="contain"
																		src={project.images[0]}
																	/>
																</Box>
																<Text size="small">{project.title}</Text>
																<Button
																	size="xsmall"
																	label="More"
																	onClick={() => onOpen(i)}
																/>
															</Box>
														);
													})}
												</Grid>
											</Box>
										</Tab>
									);
								})}
							</Tabs>
						</Box>
						{open && (
							<Layer
								margin="small"
								position="center"
								modal="true"
								onClickOutside={onClose}
								onEsc={onClose}
							>
								<Box
									flex={false}
									direction="row"
									justify="between"
									pad={{ left: "small", right: "small", top: "xsmall" }}
								>
									<Heading level={3} margin="none">
										{ProjectsList[index][popover].title}
									</Heading>
									<Button icon={<Close />} onClick={onClose} />
								</Box>
								<Box pad={{ left: "medium", right: "medium" }} width="large">
									<Box
										height="medium"
										width="xlarge"
										overflow="hidden"
										pad={{ right: "large", left: "large" }}
									>
										<Carousel fill>
											{ProjectsList[index][popover].images.map((picture, i) => {
												return <Image fit="contain" src={picture} />;
											})}
										</Carousel>
									</Box>
									<Paragraph fill="true">
										{ProjectsList[index][popover].description}
									</Paragraph>
									<Paragraph fill="true">
										<Text>Technologies used: </Text>
										{ProjectsList[index][popover].tech}
									</Paragraph>
									<Box align="center">
										<Grid
											rows={["xsmall", "xxsmall"]}
											columns={["small", "small"]}
											gap="small"
											areas={[
												{ name: "1", start: [0, 1], end: [0, 1] },
												{ name: "2", start: [0, 1], end: [0, 1] },
											]}
										>
											{ProjectsList[index][popover].links.map((item, i) => {
												return (
													<a
														gridArea={i}
														target="_blank"
														pad="small"
														href={item.link}
													>
														<Button label={item.name} />
													</a>
												);
											})}
										</Grid>
									</Box>
								</Box>
							</Layer>
						)}
						{/* </Grommet> */}
					</Box>
				)
			}
		</ResponsiveContext>
	);
};

export default Projects;

{
	/* <Box
            gridArea = "main"
            direction="row-responsive"
            justify="center"
            align="center"
            background="dark-2"
            gap="small"
        > */
}
{
	/* <Tabs activeIndex={index} onActive={onActive}>
        <Box
                    gridArea = "main"
                    direction="row-responsive"
                    justify="center"
                    align="center"
                    background="light-2"
                    gap="small"
                >
                    <Tab title="Tab 1">
          <Box margin="small" pad="large" align="center" background="accent-1">
            <Text>Hi</Text>
          </Box>
        </Tab>
        {ProjectsList.map((projectsSection, i)=> {
            return(
                <Tab title= {i}>
        <Grid columns="xsmall" rows="small" 
                    background="dark-2"
                    gap="small">
            {projectsSection.map((project, j) =>{
                return(
                <Box
                pad="medium"
                align="center"
                background={{ color: "light-6", opacity: "strong" }}
                round
                gap="small"
            >
                
                <Box height="xsmall" width="small">
                <Image
                    fit="contain"
                    src={project.images[0]}
                />
            </Box>
                <Text>{project.title}</Text>
                <Button label="Button" onClick={onOpen} />
            </Box>
            
                )
            })
            }
            
            </Grid>
            </Tab>
            )})}
            </Box>
            
            </Tabs> */
}

{
	/* <Box
                pad="medium"
                align="center"
                background={{ color: "light-6", opacity: "strong" }}
                round
                gap="small"
            >
                
                <Box height="xsmall" width="small">
                <Image
                    fit="contain"
                    src="S20_7_Neuro6_1.gif"
                />
            </Box>
                <Text>Neuro6</Text>
                <Text>This is a desciption</Text>
                <Button label="Button" onClick={onOpen} />
            </Box>
            


            <Box
                pad="medium"
                align="center"
                background={{ color: "light-6", opacity: "strong" }}
                round
                gap="small"
            >
                <Box height="xsmall" width="small">
                <Image
                    fit="contain"
                    src="lendaneye1.PNG"
                />
            </Box>
                <Text>Text Adventure OOP Design</Text>
                <Text>This is a desciption</Text>
                <Button label="Button" onClick={() => {}} />
            </Box>
            <Box
                pad="medium"
                align="center"
                background={{ color: "light-6", opacity: "strong" }}
                round
                gap="small"
            >
                <Box height="xsmall" width="small">
                <Image
                    fit="contain"
                    src="lendaneye1.PNG"
                />
            </Box>
                <Text>TPED Website</Text>
                <Text>This is a desciption</Text>
                <Button label="Button" onClick={() => {}} />
            </Box>
            <Box pad="medium" align="center" background={{ color: "light-6", opacity: "strong" }}  round gap="small">
            <Box height="xsmall" width="small">
                <Image
                    fit="contain"
                    src="NasaScreenshot.PNG"
                />
            </Box>
                <Text>TPED Coaster</Text>
                <Text>This is a desciption</Text>
                <Button label="Button" onClick={() => {}} />
            </Box>
            </Box>
            <Box
            gridArea = "main"
            direction="row-responsive"
            justify="center"
            align="center"
            background="dark-2"
            gap="small"
        >
            <Box
                pad="medium"
                align="center"
                background={{ color: "light-6", opacity: "strong" }}
                round
                gap="small"
            >
                <Box height="xsmall" width="small">
                <Image
                    fit="contain"
                    src="lendaneye1.PNG"
                />
            </Box>
                <Text>Pascal Interpreter in Haskell</Text>
                <Text>This is a desciption</Text>
                <Button label="Button" onClick={() => {}} />
            </Box>
            <Box
                pad="medium"
                align="center"
                background={{ color: "light-6", opacity: "strong" }}
                round
                gap="small"
            >
                <Box height="xsmall" width="small">
                <Image
                    fit="contain"
                    src="lendaneye1.PNG"
                />
            </Box>
                <Text>Pascal Interpreter in Java</Text>
                <Text>This is a desciption</Text>
                <Button label="Button" onClick={() => {}} />
            </Box>
            <Box
                pad="medium"
                align="center"
                background={{ color: "light-6", opacity: "strong" }}
                round
                gap="small"
            >
                <Box height="xsmall" width="small">
                <Image
                    fit="contain"
                    src="lendaneye1.PNG"
                />
            </Box>
                <Text>Lend an Eye</Text>
                <Text>This is a desciption</Text>
                <Button label="Button" onClick={() => {}} />
            </Box>
            <Box pad="medium" align="center" background={{ color: "light-6", opacity: "strong" }}  round gap="small">
            <Box height="xsmall" width="small">
                <Image
                    fit="contain"
                    src="NasaScreenshot.PNG"
                />
            </Box>
                <Text>Twitter Tweet Tracker</Text>
                <Text>This is a desciption</Text>
                <Button label="Button" onClick={() => {}} />
            </Box>
            </Box> */
}
