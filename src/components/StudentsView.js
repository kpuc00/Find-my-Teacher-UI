import React from 'react';

import '../styles/components/App.css';

import FavouriteTeachersComponent from "./Rostislav/FavouriteTeachersComponent"

import TeacherInfoComponent from "./Vasil/TeacherInfoComponent";

import SearchBar from "./Misho/SearchBar"

import ZoomInOutBtns from './Kris/ZoomInOutBtns';
import BackBtn from './Kris/BackBtn';


//Bootstrap
import Container from 'react-bootstrap/Container' 
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function StudentsView() {
    return (

        <div style={{padding: "20px", backgroundColor: "rgba(122, 122, 122, 0.6)", height: "100vh"}}>
            <Row style={{height: "10%"}}>
                <Col>
                    <div className="float-left">
                        <SearchBar/>
                    </div>
                </Col>

                <Col>
                    <div className="float-right">
                        <FavouriteTeachersComponent />
                    </div>
                </Col>
            </Row>

            <Row style={{height: "80%"}}>
                <Col>
                    <div className="float-right" >
                    <TeacherInfoComponent/>
                    </div>
                </Col>
            </Row>

            <Row style={{height: "10%"}}>
                <Col>
                    <div className="float-left">
                        <BackBtn />
                    </div>
                </Col>
                <Col>
                    <div className="float-right">
                        <ZoomInOutBtns />
                    </div>
                </Col>
            </Row>

        </div>
    );
}


export default StudentsView;
