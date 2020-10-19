import React from 'react';
import '../styles/components/App.css';
import TeacherInfoComponent from "./Vasil/TeacherInfoComponent";
import SearchBar from "./Misho/SearchBar"


function App() {
    return (
        <div className="App">
            <SearchBar />
            <TeacherInfoComponent/>
        </div>
    );
}

export default App;
