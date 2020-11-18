import React, {Component} from 'react';
import autoBind from "auto-bind";
import '../styles/components/App.css';

import FavouriteTeachersComponent from "./Rostislav/FavouriteTeachersComponent"

import SearchBar from "./Misho/SearchBar"

import ZoomInOutBtns from './Kris/ZoomInOutBtns';
import BackBtn from './Kris/BackBtn';

import Map from './Map';

//Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//connect to store
import {connect} from "react-redux";
import {getUserByIPcn, getUserPicture} from "../store/actions/user/userActions";
import {getUserLocationByIPcn} from "../store/actions/location/locationActions";

class StudentsView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            building: "R10",
            floors: ["BG", "1e", "2e", "3e", "4e"],
            currentFloor: "BG",
            floorIndex: 0,
            user: {
                currentLocation: {
                    floor: "",
                    x: 0,
                    y: 0
                },
                profilePic: null
            },
            api: {
                mapHierarchyFloor: "EHV>R10>2e",
                mapCoordinate: {
                    x: 151.844238,
                    y: 55.4845145
                },
                image: {
                    width: 2232,
                    height: 748
                },
                floorDimension: {
                    length: 108.27,
                    width: 331.36,
                }
            }
        }

        autoBind(this)
    }

    componentDidMount() {
        this.props.getUserLocationByIPcn('i428100');
        this.updateUserLocation();
        this.props.getUserPicture('i428100');
        this.props.getUserByIPcn('i428100');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.userAvatarData && prevState.user.profilePic !== this.props.userAvatarData.value){
            this.updateUserPicture();
        }
    }

    updateUserLocation = () => {
        let {api} = this.state

        let f = api.mapHierarchyFloor
        const floor = f.includes('>') && f.substr(f.lastIndexOf('>') + 1).split(' ')[0]

        let kWidth = api.image.width / api.floorDimension.width
        let kHeight = api.image.height / api.floorDimension.length
        let width = kWidth * api.mapCoordinate.x
        let height = kHeight * api.mapCoordinate.y

        this.setState({
            user: {
                ...this.state.user,
                currentLocation: {
                    floor: floor,
                    x: width,
                    y: height
                }
            },
            currentFloor: floor
        })
    }

    updateUserPicture = () => {
        this.setState({
            user: {
                ...this.state.user,
                profilePic: this.props.userAvatarData.value
            }
        })
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
            <div style={{padding: "20px", backgroundColor: "rgb(224,224,224)", height: "100vh"}}>

                <Row style={{height: "10%"}} className="mb-1">
                    <Col>
                        <div className="float-left">
                            <SearchBar/>
                        </div>
                    </Col>

                    <Col>
                        <div className="float-right">
                            <FavouriteTeachersComponent/>
                        </div>
                    </Col>
                </Row>

                <Row style={{height: "80%"}} className="mb-1">
                    <Col>
                        {/*<div className="float-right" >*/}
                        {/*    <TeacherInfoComponent />*/}
                        {/*</div>*/}
                        <div className="map-container mb-1">
                            <Map data={this.state}/>
                        </div>
                    </Col>
                </Row>

                <Row style={{height: "10%"}} className="mb-1">
                    <Col>
                        <div className="float-left">
                            <BackBtn/>
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

const mapStateToProps = (state) => {
    return {
        userAvatarData: state.user.userAvatarData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserPicture: iPcn => dispatch(getUserPicture(iPcn)),
        getUserLocationByIPcn: iPcn => dispatch(getUserLocationByIPcn(iPcn)),
        getUserByIPcn: iPcn => dispatch(getUserByIPcn(iPcn))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsView);
