import React from 'react';
import autoBind from "auto-bind";
import '../styles/components/App.css';

import FavouriteTeachersComponent from "./Rostislav/FavouriteTeachersComponent"

import TeacherInfoComponent from "./Vasil/TeacherInfoComponent";

import SearchBar from "./Misho/SearchBar"

import ZoomInOutBtns from './Kris/ZoomInOutBtns';
import BackBtn from './Kris/BackBtn';

import  Map from './Map';

import AuthService from "../services/AuthService";


//Bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class StudentsView extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            building: "R10",
            floors: ["BG", "1e", "2e", "3e", "4e"],
            currentFloor: "BG",
            floorIndex: 0
        }

        autoBind(this)
    }


    handleFloorChange(action) {
        const length = this.state.floors.length //Length of floor array
        let index = this.state.floorIndex //Current floor

        //Change floor
        if (action === 1)
            index++
        if (action === -1)
            index--

        //Check not to go out of bound
        if (index > length - 1) {
            index = 0
        }
        if (index < 0) {
            index = length - 1
        }

        //Change state
        this.setState(state => ({
                floorIndex: index,
                currentFloor: state.floors[index]
            })
        )
    }

    render() {
        return (
            <div style={{ padding: "20px", backgroundColor: "rgb(224,224,224)", height: "100vh" }}>

                <Row style={{ height: "10%" }} className="mb-1">
                    <Col>
                        <div className="float-left">
                            <SearchBar />
                        </div>
                    </Col>

                    <Col>
                        <div className="float-right">
                            <FavouriteTeachersComponent />
                        </div>
                    </Col>
                </Row>

                <Row style={{ height: "80%" }} className="mb-1">
                    <Col>
                        {/*<div className="float-right" >*/}
                        {/*    <TeacherInfoComponent />*/}
                        {/*</div>*/}
                        <div className="map-container" className="mb-1">
                            <Map data={this.state} />
                        </div>
                    </Col>
                </Row>

                <Row style={{ height: "10%" }} className="mb-1">
                    <Col>
                        <div className="float-left">
                            <BackBtn />
                        </div>
                    </Col>
                    <Col>
                        <div className="float-right">
                            <ZoomInOutBtns handleFloorChange={this.handleFloorChange}/>
                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
}


export default StudentsView;
