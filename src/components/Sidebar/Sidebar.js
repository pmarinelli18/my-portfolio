import React, { useRef, useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import pages from "../../data/pages.json";
import footerLink from "../../data/footerLink.json";
import {
	Grommet,
	Anchor,
	Box,
	Button,
	Text,
	Image,
	Nav,
	Sidebar,
	Avatar,
	Drop,
	grommet,
	Stack,
	Grid,
} from "grommet";

import CustomTheme from "../CustomTheme/CustomTheme";

import {
	Gremlin,
	Notification,
	Home,
	User,
	Code,
	Github,
	Linkedin,
	MailOption,
	Twitter,
} from "grommet-icons";

const SidebarFooter = () => (
	<Box pad={{ bottom: "small" }}>
		<Nav>
			{footerLink.map((website, index) => (
				<a target="_blank" href={website.link}>
					<FooterSidebarButton
						key={website.name}
						iconName={website.name}
						index={index}
					/>
				</a>
			))}
		</Nav>
	</Box>
);

const FooterSidebarButton = ({ iconName, index }) => {
	const [over, setOver] = useState();
	const tooltipColor = { color: "accent-3", opacity: 0.9 };

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
					<Box pad={{ vertical: "xsmall" }} align="center">
						{footerIconsMap(hover ? "black" : "white")[index]}
					</Box>
				)}
			</Button>
			{ref.current && over && (
				<Drop align={{ left: "right" }} target={ref.current} plain>
					<Box
						animation="slideRight"
						margin="xsmall"
						pad="xsmall"
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
		<Box width="xxsmall" height="xxsmall">
			<Link to={"/Home"}>
				<Image fill src="logo2.png" />
			</Link>
		</Box>
	</Box>
);

const footerIconsMap = (color) => [
	<Github color={color} />,
	<Linkedin color={color} />,
	<Twitter color={color} />,
];

const iconsMap = (color) => [
	<Home color={color} />,
	<User color={color} />,
	<Code color={color} />,
	<MailOption color={color} />,
];

const SidebarButton = ({ iconName, index }) => {
	const [over, setOver] = useState();
	const tooltipColor = { color: "accent-3", opacity: 0.9 };

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
				{pages.map((page, i) => {
					return (
						<Link to={page.extension}>
							<SidebarButton key={page.name} iconName={page.name} index={i} />
						</Link>
					);
				})}
			</Nav>
		</Sidebar>
	);
};

export default SidebarNavigation;
