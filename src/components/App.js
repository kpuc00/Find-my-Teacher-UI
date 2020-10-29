import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import StudentsView from './StudentsView';
import TeachersView from './TeachersView';

function App() {
    return (
        <Router>
        <Switch>
            <Route path="/" exact component={StudentsView}/>
            <Route path="/teacher" component={TeachersView}/>
        </Switch>
        </Router>
    );
}

export default App;
