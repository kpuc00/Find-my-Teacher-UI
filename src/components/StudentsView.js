import React from 'react';

import '../styles/components/App.css';

import TeacherInfoComponent from "./Vasil/TeacherInfoComponent";

import SearchBar from "./Misho/SearchBar"

import ZoomInOutBtns from './Kris/ZoomInOutBtns';
import BackBtn from './Kris/BackBtn';
import FavouriteTeachersComponent from './Rostislav/FavouriteTeachersComponent';


//Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function StudentsView() {
    return (
        <Container fluid>
            <Row>
                <Col>
                    <div style={{width: "60%"}}>
                        <SearchBar/>
                    </div>
                </Col>
                <Col>

                </Col>
            </Row>

            <Row>
                <TeacherInfoComponent/>
            </Row>

            <Row >
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
        </Container>
    );
}

export default StudentsView;
