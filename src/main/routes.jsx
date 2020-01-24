import React from 'react'
import { BrowserRouter as Router, Route, Redirect, HashRouter, Switch } from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={HashRouter}>
        <Switch>
            <Route path='/todos' component={Todo}/>
            <Route path='/about' component={About}/>
            <Redirect from='*' to='/todos'/>
        </Switch>
    </Router>
)