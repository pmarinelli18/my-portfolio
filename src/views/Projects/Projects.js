import React, { useRef, useState } from "react";
import './Projects.css';
import { Close } from "grommet-icons";
import { Grommet, Anchor, Box, Button, Text, Nav,Avatar, Drop, grommet, Stack, Grid, Image, Layer, Heading, Carousel, Paragraph } from "grommet";


const Projects = () => {
    const [open, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);
    return (
        <Grommet>
        <Box
        gridArea = "main"
        justify="center"
        align="center"
        gap="small"
        >
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
            </Box>
            
        </Box>
        {open && (
        <Layer margin= "small" position="center" modal= "true" onClickOutside={onClose} onEsc={onClose}>
            <Box flex={false} direction="row" justify="between" pad = {{ "left" : "small", "right" : "small", "top" : "xsmall"}}>
            <Heading level={3} margin="none">
              UF Department of Neuroseurgery
            </Heading>
                <Button icon={<Close />} onClick={onClose} />
              </Box>
          <Box pad = {{ "left" : "medium", "right" : "medium"}} width= 'large'>
            
            <Box height="medium" width="xlarge" overflow="hidden" pad = {{"right" : 'large', "left" : "large", "bottom" : "small"}}>
            <Carousel fill>
                <Image fit="contain" src="S20_7_Neuro6_1.gif" />
                <Image fit="contain" src="S20_7_Neuro6_2.gif" />
                <Image fit="contain" src="S20_7_Neuro6_3.gif" />
            </Carousel>
            </Box>
            <Paragraph>My team and I developed a WebApp for the UF Department of Neuroseurgery.
                The client wanted a site that could remind patients of their appointments and help them navigate to the garage.
                Using the MERN Stack</Paragraph> 
            <Button label="Source Code"  />
            <Box
              as="footer"
              gap="small"
              direction="row"
              align="center"
              justify="end"
              pad={{ top: "medium", bottom: "small" }}
            >
            </Box>
          </Box>
        </Layer>
      )}
        </Grommet>
    )
}

export default Projects