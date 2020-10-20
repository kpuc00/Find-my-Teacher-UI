import React from 'react';
import '../styles/components/App.css';
import TeacherInfoComponent from "./Vasil/TeacherInfoComponent";
import SearchBar from "./Misho/SearchBar"
import ZoomInOutBtns from './Kris/ZoomInOutBtns';
import BackBtn from './Kris/BackBtn';

function StudentsView() {
    return (
        <div className="App">
            <SearchBar />
            <TeacherInfoComponent/>
            <ZoomInOutBtns/>
            <BackBtn/>
        </div>
    );
}

export default StudentsView;
