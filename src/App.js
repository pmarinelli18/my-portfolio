import React, { useRef, useState } from "react";
import logo from './logo.svg';
import './App.css';
import { Attraction, Car } from "grommet-icons";
import { Route, Switch, Redirect } from 'react-router-dom';


import { Grommet, Anchor, Box, Button, Text, Nav,Avatar, Drop, grommet, Stack, Grid} from "grommet";

import Sidebar from './components/Sidebar/Sidebar';

import Home from './views/Home/Home';
import Projects from './views/Projects/Projects';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import NotFound from './views/NotFound/NotFound';

function App() {


  return (
    <div>
<Grommet theme={grommet} full>
  <Grid
    fill
    rows={["auto", "flex"]}
    columns={["auto", "flex"]}
    areas={[
      { name: "sidebar", start: [0, 1], end: [0, 1] },
      { name: "main", start: [1, 1], end: [1, 1] }
    ]}
  >
    <Box gridArea = "sidebar" direction="row" height={{ max: "100%", min: '100%' }}>
      <Sidebar/>
    </Box>
    <Box
      gridArea = "main"
      direction="row-responsive"
      justify="center"
      align="center"
      pad="xlarge"
      background="dark-2"
      gap="medium"
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

    </Box>
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
