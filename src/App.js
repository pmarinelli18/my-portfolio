import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Attraction, Car } from "grommet-icons";
import { Route, Switch, Redirect } from "react-router-dom";
import {
	SwitchTransition,
	CSSTransition,
	TransitionGroup,
} from "react-transition-group";

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
	ResponsiveContext,
	Main,
} from "grommet";

import CustomTheme from "./components/CustomTheme/CustomTheme";
import Sidebar from "./components/Sidebar/Sidebar";

import Home from "./views/Home/Home";
import Projects from "./views/Projects/Projects";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import NotFound from "./views/NotFound/NotFound";

const routes = [
	{ path: "/Home", name: "Home", Component: Home, index: 0 },
	{ path: "/About", name: "About", Component: About, index: 1 },
	{ path: "/Projects", name: "Projects", Component: Projects, index: 2 },
	{ path: "/Contact", name: "Contact", Component: Contact, index: 3 },
	{ path: "/", name: "Home", Component: Home, index: 0 },
];

console.log(window.location.pathname);
let currentPage;
routes.map(({ path, index }) => {
	if (window.location.pathname == path) currentPage = index;
});
console.log(currentPage);

const ResponsiveGrid = ({ children, areas, style, ...props }) => {
	const size = React.useContext(ResponsiveContext);
	return (
		<Grid areas={areas[size]} style={style[size]} {...props}>
			{children}
		</Grid>
	);
};

function App(props) {
	const [i, setI] = useState(currentPage);
	const updateI = (s) => {
		setI(s);
	};

	return (
		<Box height={{ min: "100%" }}>
			{/* <Box> */}
			<Grommet theme={CustomTheme} full>
				{/* <Grommet theme={CustomTheme} full background="light-4"> */}
				{/* dark-2 */}
				<ResponsiveGrid
					fill
					rows={["auto", "flex"]}
					columns={["auto", "flex"]}
					areas={{
						xxsmall: [
							{ name: "sidebar", start: [1, 0], end: [1, 0] },
							{ name: "main", start: [1, 1], end: [1, 1] },
						],
						Xsmall: [
							{ name: "sidebar", start: [1, 0], end: [1, 0] },
							{ name: "main", start: [1, 1], end: [1, 1] },
						],
						small: [
							{ name: "sidebar", start: [1, 0], end: [1, 0] },
							{ name: "main", start: [1, 1], end: [1, 1] },
						],
						medium: [
							{ name: "sidebar", start: [0, 1], end: [0, 1] },
							{ name: "main", start: [1, 1], end: [1, 1] },
						],
						large: [
							{ name: "sidebar", start: [0, 1], end: [0, 1] },
							{ name: "main", start: [1, 1], end: [1, 1] },
						],
					}}
					style={{
						xxsmall: { position: "relative" },
						xsmall: { position: "relative" },
						small: { position: "relative" },
						medium: { position: "fixed" },
						large: { position: "fixed" },
					}}
				>
					<Box
						gridArea="sidebar"
						direction="row"
						height={{ min: "100%" }}
						background="dark-2"
					>
						<Sidebar />
					</Box>
					{/* <Main
						gridArea="main"
						direction="row-responsive"
						justify="center"
						align="center"
						pad={{
							left: "xlarge",
							right: "xlarge",
						}}
						background="dark-2"
						gap="medium"
						height={{ min: "100%" }}
						// fill="vertical"
					> */}
					<Box
						gridArea="main"
						direction="row-responsive"
						justify="center"
						align="center"
						pad={{
							left: "xlarge",
							right: "xlarge",
						}}
						background="dark"
						gap="medium"
						height={{ min: "100%" }}
						fill="vertical"
					>
						<Stack fill interactiveChild={i}>
							{routes.map(({ path, Component, index }) => {
								return (
									<Route key={path} exact path={path}>
										{({ match }) => (
											<CSSTransition
												in={match != null}
												timeout={30000}
												classNames="page"
												mountOnEnter={false}
												unmountOnExit={true}
												onEnter={(e) => updateI(index)}
											>
												<Box className="page" fill>
													<Component />
												</Box>
											</CSSTransition>
										)}
									</Route>
								);
							})}
						</Stack>
						{/* </Main> */}
					</Box>

					{/* <SwitchTransition mode={"out-in"}>
      <CSSTransition
            key={state}
            addEndListener={(node, done) => {
              node.addEventListener("transitionend", done, false);
            }}
            classNames="fade"
          >
    <Switch>
        <Route exact path='/Home' component={Home} />
        <Route exact path='/About' component={About} />
        <Route exact path='/Projects' component={Projects} />
        <Route exact path='/Contact' component={Contact} />

        
      <Route exact path='/'>
          <Redirect to='/Home' />
        </Route>
        <Route component={NotFound} />
      </Switch>
      </CSSTransition>
      </SwitchTransition> */}
				</ResponsiveGrid>
			</Grommet>

			{/* <Nav direction="row" background="brand" pad="medium">
        <Text>Button</Text>
        <Text>Button1</Text>
        <Text>Button2</Text>
      </Nav>
            <Grommet >
    
  </Grommet> */}
		</Box>
	);
}

export default App;
