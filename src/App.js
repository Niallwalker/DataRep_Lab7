import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Content } from "./components/content";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, FormControl, Button } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Create } from "./components/create";
import { Read } from "./components/read";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <Switch>
            <Route path="/home" component={Content} exact /> 
            <Route path="/read" component={Read} exact /> 
            <Route path="/create" component={Create} exact /> 
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
//Read Component added & imported//
//Create Component added & imported//
//Read & Create Added to Navbar and Switches//
//Create Component added & imported//
