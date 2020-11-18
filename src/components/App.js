import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import StudentsView from './StudentsView';
import TeachersView from './TeachersView';


import '../styles/components/App.css';

function App() {
    return (
        <Router>
            <Switch>
                {/*Student path*/}
                <Route exact path={`/student`} component={StudentsView}/>
                
                {/*Teacher path*/}
                <Route exact path={`/teacher`} component={TeachersView}/>
            </Switch>
        </Router>
    );
}

export default App;
