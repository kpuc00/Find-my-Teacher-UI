import React from 'react';
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
