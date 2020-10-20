import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import StudentsView from './StudentsView';


function App() {
    return (
        <Router>
        <Switch>
            <Route path="/" exact component={StudentsView}/>
        </Switch>
        </Router>
    );
}

export default App;
