import React from 'react';
import '../styles/components/App.css';
import FavouriteTeachersComponent from './Rostislav/FavouriteTeachersComponent';
import TeacherInfoComponent from "./Vasil/TeacherInfoComponent";

function App() {
    return (
        <div className="App">
            <TeacherInfoComponent/>
            <FavouriteTeachersComponent/>
        </div>
    );
}

export default App;
