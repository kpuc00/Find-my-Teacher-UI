import React from 'react';
import '../styles/components/App.css';
import ToggleLocationBtn from './Kris/ToggleLocationBtn';
import FollowersInfoComponent from './Alexander/FollowersInfoComponent';

function TeachersView() {
    return (
        <div className="App">
            <h3>Teachers view</h3>
            <ToggleLocationBtn />
            <FollowersInfoComponent />
        </div>
    );
}

export default TeachersView;
