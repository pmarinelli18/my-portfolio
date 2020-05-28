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
	Header,
	Heading,
	Avatar,
	Drop,
	grommet,
	Collapsible,
	Menu,
	Stack,
	Grid,
	ResponsiveContext,
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
	Menu as MenuIcon,
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
					<Box pad={{ vertical: "xxsmall" }} align="center">
						{footerIconsMap(hover ? "black" : "white")[index]}
					</Box>
				)}
			</Button>
			{ref.current && over && (
				<Drop align={{ left: "right" }} target={ref.current} plain>
					<Box
						animation="slideRight"
						margin="xsmall"
						pad="xxsmall"
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
	<Box pad={{ left: "small", right: "small", top: "xsmall" }}>
		<Box width="xxsmall" height="xxsmall">
			<Link to={"/Home"}>
				<Image fill src="Artboard 1.png" />
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
					<Box pad={{ vertical: "xsmall" }} align="center">
						{/* here */}
						{iconsMap(hover ? "black" : "white")[index]}
					</Box>
				)}
			</Button>
			{ref.current && over && (
				<Drop align={{ left: "right" }} target={ref.current} plain>
					<Box
						animation="slideRight"
						margin="xxsmall"
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

const SidebarNavigation = () => {
	const [openNotification, setOpenNotification] = React.useState();
	return (
		<ResponsiveContext>
			{(responsive) =>
				responsive === "small" ? (
					// <div>
					// 	<Box fill>
					// 		<Box
					// 			as="header"
					// 			direction="row"
					// 			align="center"
					// 			pad={{ vertical: "small", horizontal: "medium" }}
					// 			justify="between"
					// 			background="brand"
					// 			elevation="large"
					// 			style={{ zIndex: "1000" }}
					// 		>
					// 			<Heading level={3} margin="none" color="white">
					// 				<strong>My App</strong>
					// 			</Heading>
					// 			<Button
					// 				onClick={() => setOpenNotification(!openNotification)}
					// 				icon={<MenuIcon color="white" />}
					// 			/>
					// 		</Box>
					// 	</Box>

					// 	<Stack anchor="center">
					// 		<Box flex direction="row">
					// 			<Collapsible direction="horizontal" open={openNotification}>
					// 				<Box
					// 					flex
					// 					width="medium"
					// 					background="light-2"
					// 					pad="small"
					// 					elevation="small"
					// 				>
					// 					<Text size="xlarge">Sidebar</Text>
					// 				</Box>
					// 			</Collapsible>
					// 		</Box>
					// 	</Stack>
					// </div>
					<Box width="full">
						<Header background="brand" pad="small" width="full">
							<Box
								width="full"
								direction="row"
								align="center"
								gap="small"
								width="xxsmall"
								height="xxsmall"
							>
								<Link to={"/Home"}>
									<Image fill src="logo2.png" />
								</Link>
							</Box>
							<Button
								onClick={() => setOpenNotification(!openNotification)}
								icon={<MenuIcon color="white" />}
							/>
						</Header>
						<Collapsible direction="vertical" open={openNotification}>
							<Box
								flex
								width="medium"
								background="light-2"
								pad="small"
								elevation="small"
							>
								{pages.map((page, i) => {
									return (
										<Link
											to={page.extension}
											onClick={() => setOpenNotification(!openNotification)}
										>
											{page.name}
											{/* <SidebarButton
												key={page.name}
												iconName={page.name}
												index={i}
											/> */}
										</Link>
									);
								})}
							</Box>
						</Collapsible>
					</Box>
				) : (
					<Sidebar
						overflow="auto"
						background="brand"
						header={<SidebarHeader />}
						footer={<SidebarFooter />}
						pad="none"
						gap="medium"
					>
						<Nav>
							{pages.map((page, i) => {
								return (
									<Link to={page.extension}>
										<SidebarButton
											key={page.name}
											iconName={page.name}
											index={i}
										/>
									</Link>
								);
							})}
						</Nav>
					</Sidebar>
				)
			}
		</ResponsiveContext>
	);
};

export default SidebarNavigation;
