import React, { useRef, useState } from "react";
import './Sidebar.css';
import { Attraction, Car } from "grommet-icons";
import { Link } from 'react-router-dom';
import { Grommet, Anchor, Box, Button, Text, Nav, Sidebar,Avatar, Drop, grommet, Stack, Grid} from "grommet";

import {
  Gremlin,
  Notification,
  Home,
  User,
  Code,
  Github,
  Linkedin,
  MailOption,
  Twitter
} from "grommet-icons";

const SidebarFooter = () => (
  <Box>
    <Nav>
          {["GitHub", "LinkedIn", "Twitter"].map((iconName, index) => (
            <a target='_blank' href={'https://github.com/pmarinelli18'}>
            <FooterSidebarButton key={iconName} iconName={iconName} index={index} />
            </a>
          ))}
        </Nav>
  </Box>
);

const FooterSidebarButton = ({ iconName, index }) => {
  const [over, setOver] = useState();
  const tooltipColor = { color: "accent-1", opacity: 0.9 };

  const ref = useRef();
  return (
    <Box fill="horizontal">
      <Button
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        onFocus={() => setOver(false)}
        onBlur={() => setOver(false)}
        hoverIndicator={tooltipColor}
        plain
      >
        {({ hover }) => (
          <Box pad={{ vertical: "small" }} align="center">
            {footerIconsMap(hover ? "black" : "white")[index]}
          </Box>
        )}
      </Button>
      {ref.current && over && (
        <Drop align={{ left: "right" }} target={ref.current} plain>
          <Box
            animation="slideRight"
            margin="xsmall"
            pad="small"
            background={tooltipColor}
            round={{ size: "medium", corner: "right" }}
          >
            {iconName}
          </Box>
        </Drop>
      )}
    </Box>
  );
};


const SidebarHeader = () => (
  <Box pad="small">
    <Avatar
      background="linear-gradient(#6FFFB0 0%, #7D4CDB 100%)"
      border={{ color: "white", size: "small" }}
      round="medium"
    >
      <Gremlin color="white" />
    </Avatar>
  </Box>
);

const footerIconsMap = color => [
  <Github color={color} />,
  <Linkedin color={color} />,
  <Twitter color={color} />
];

const iconsMap = color => [
  <Home color={color} />,
  <User color={color} />,
  <Code color={color} />,
  <MailOption color={color} />
];


const SidebarButton = ({ iconName, index }) => {
  const [over, setOver] = useState();
  const tooltipColor = { color: "accent-1", opacity: 0.9 };

  const ref = useRef();
  return (
    <Box fill="horizontal">
      <Button
        ref={ref}
        onMouseOver={() => setOver(true)}
        onMouseLeave={() => setOver(false)}
        onFocus={() => setOver(false)}
        onBlur={() => setOver(false)}
        hoverIndicator={tooltipColor}
        plain
      >
        {({ hover }) => (
          <Box pad={{ vertical: "small" }} align="center">
            {iconsMap(hover ? "black" : "white")[index]}
          </Box>
        )}
      </Button>
      {ref.current && over && (
        <Drop align={{ left: "right" }} target={ref.current} plain>
          <Box
            animation="slideRight"
            margin="xsmall"
            pad="small"
            background={tooltipColor}
            round={{ size: "medium", corner: "right" }}
          >
            {iconName}
          </Box>
        </Drop>
      )}
    </Box>
  );
};


const SidebarNavigation = () => {
    return (
      <Sidebar
      overflow="auto"
      background="brand"
      header={<SidebarHeader />}
      footer={<SidebarFooter />}
      pad="none"
    >
      <Nav>
          <Link to= '/Home'>
            <SidebarButton key={'Home'} iconName={'Home'} index={0} />
          </Link>
          <Link to= '/About'>
            <SidebarButton key={'About'} iconName={'About'} index={1} />
          </Link>
          <Link to= '/Projects'>
            <SidebarButton key={'Projects'} iconName={'Projects'} index={2} />
          </Link>
          <Link to= '/Contact'>
            <SidebarButton key={'Contact'} iconName={'Contact'} index={3} />
          </Link>
      </Nav>
    </Sidebar>
    )
}

export default SidebarNavigation;