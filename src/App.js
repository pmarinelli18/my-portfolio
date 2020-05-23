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

function App(props) {
	const [i, setI] = useState(currentPage);
	const updateI = (s) => {
		setI(s);
	};

	return (
		<div>
			<Grommet theme={CustomTheme} full>
				<Grid
					fill
					rows={["auto", "flex"]}
					columns={["auto", "flex"]}
					areas={[
						{ name: "sidebar", start: [0, 1], end: [0, 1] },
						{ name: "main", start: [1, 1], end: [1, 1] },
					]}
					style={{ position: "fixed" }}
				>
					<Box
						gridArea="sidebar"
						direction="row"
						height={{ max: "100%", min: "100%" }}
					>
						<Sidebar />
					</Box>

					<Box
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
						height={{ max: "100%", min: "100%" }}
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
												<Box className="page" fill="vertical">
													<Component />
												</Box>
											</CSSTransition>
										)}
									</Route>
								);
							})}
						</Stack>
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
				</Grid>
			</Grommet>

			{/* <Nav direction="row" background="brand" pad="medium">
        <Text>Button</Text>
        <Text>Button1</Text>
        <Text>Button2</Text>
      </Nav>
            <Grommet >
    
  </Grommet> */}
		</div>
	);
}

export default App;
