import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import StudentsView from './StudentsView';
import TeachersView from './TeachersView';
import '../styles/components/App.css';
import SocketTest from "./Vasil/SocketTest";

function App() {
    return (
        <Router>
            <Switch>
                {/*Student path*/}
                <Route exact path={`/student`} component={StudentsView}/>
                
                {/*Teacher path*/}
                <Route exact path={`/teacher`} component={TeachersView}/>

                <Route exact path={'/socket'} component={SocketTest}/>
            </Switch>
        </Router>
    );
}

export default App;
