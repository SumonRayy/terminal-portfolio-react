import React, { useState } from 'react'
import { Route,  BrowserRouter as Router, Switch } from 'react-router-dom'
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home'
import Projects from './pages/Projects';

function Routes() {
    

    return (
        <Router>
            <Switch>

                <Route path="/" exact>                
                    <Home/>
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/projects">
                    <Projects />
                </Route>

                <Route path="/contact">
                    <Contact />
                </Route>

            </Switch>
        </Router>
    )
}

export default Routes
