import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import StudentsView from './StudentsView';
import TeachersView from './TeachersView';


import '../styles/components/App.css';
import TeacherInfoComponent from "./Vasil/TeacherInfoComponent";
import FollowersInfoComponent from "./Alexander/FollowersInfoComponent";

function App() {
    return (
        <div className="App">
            <TeacherInfoComponent/>
            <FollowersInfoComponent/>
        </div>

    );
}

export default App;
