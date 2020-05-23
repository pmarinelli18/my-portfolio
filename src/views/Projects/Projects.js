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
} from "grommet";

import CustomTheme from "../../components/CustomTheme/CustomTheme";

import ProjectsList from "../../data/projects.json";

const Projects = () => {
	const [open, setOpen] = useState(false);

	const [index, setIndex] = useState(0);

	const [popover, setPopover] = useState(0);

	const onActive = (nextIndex) => setIndex(nextIndex);

	const onOpen = (i) => {
		setPopover(i);
		setOpen(true);
	};

	const onClose = () => setOpen(false);
	const tabsf = [1, 2, 3, 4];
	return (
		<Box fill="vertical">
			{/* <Grommet theme={CustomTheme} background="dark-2" fill = "vertical"> */}
			<Box justify="center" gap="small" fill="vertical">
				<Tabs activeIndex={index} onActive={onActive}>
					{ProjectsList.map((item, i) => {
						return (
							<Tab title={"Page " + (i + 1)}>
								<Box margin="small" align="center" fill="vertical">
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
										gap="medium"
									>
										{item.map((project, i) => {
											return (
												<Box
													pad="medium"
													align="center"
													background={{ color: "light-6", opacity: "strong" }}
													round
													gap="small"
													fill="vertical"
												>
													<Box height="xsmall" width="small">
														<Image fit="contain" src={project.images[0]} />
													</Box>
													<Text>{project.title}</Text>
													<Button label="Button" onClick={() => onOpen(i)} />
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
						<a target="_blank" href={ProjectsList[index][popover].link}>
							<Button label="Source Code" />
						</a>
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
