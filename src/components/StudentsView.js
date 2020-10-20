import React from 'react';
import '../styles/components/App.css';
import TeacherInfoComponent from "./Vasil/TeacherInfoComponent";
import SearchBar from "./Misho/SearchBar"

function StudentsView() {
    return (
        <div className="App">
            <SearchBar />
            <TeacherInfoComponent/>
        </div>
    );
}

export default StudentsView;
