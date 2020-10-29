import React from 'react';
import '../styles/components/App.css';
import TeacherInfoComponent from "./Vasil/TeacherInfoComponent";
import SearchBar from "./Misho/SearchBar"
import ZoomInOutBtns from './Kris/ZoomInOutBtns';
import BackBtn from './Kris/BackBtn';
import FavouriteTeachersComponent from './Rostislav/FavouriteTeachersComponent';

function StudentsView() {
    return (
        <div className="App">
            <SearchBar />
            <TeacherInfoComponent/>
            <ZoomInOutBtns/>
            <BackBtn/>
            <FavouriteTeachersComponent/>
        </div>
    );
}

export default StudentsView;
