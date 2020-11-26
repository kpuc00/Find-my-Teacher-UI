import React, { Component } from 'react';
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
import { connect } from "react-redux";
import { getCurrentUser, getUserPicture } from "../store/actions/user/userActions";
import { getCurrentUserLocation } from "../store/actions/location/locationActions";
import authHeader from "../services/auth-header";


import axios from "axios"
import {Container, Jumbotron} from "react-bootstrap";
import ToggleLocationBtn from "./Kris/ToggleLocationBtn";


class StudentsView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            building: "R10",
            floors: ["BG", "1e", "2e", "3e", "4e"],
            currentFloor: "BG",
            floorIndex: 0,

            user: {
                info: {},
                location: {}
            },
            api: {}

        }


        autoBind(this)
    }

    componentDidMount() {
        this.props.getCurrentUser();
        this.props.getCurrentUserLocation();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (Object.keys(this.props.user).length > 0 && prevState.user.info !== this.props.user) {
            this.updateUserInfo();
        }

        if (Object.keys(this.props.locationCurrent).length > 0 && prevState.api !== this.props.locationCurrent) {
            this.updateApi()
        }
    }


    updateUserInfo = () => {
        this.setState({
            user: {
                ...this.state.user, //this is the component state
                info: this.props.user //this is the props object (global data)
            }
        })
    }

    updateApi = () => {

        const { locationCurrent } = this.props //destructure data

        const floor = locationCurrent.mapHierarchyFloor.split(">")

        //init all data
        const { image } = locationCurrent
        const { floorDimension } = locationCurrent
        const { mapCoordinate } = locationCurrent

        const kWidth = image.width / floorDimension.width
        const kHeight = image.height / floorDimension.length
        const width = kWidth * mapCoordinate.x
        const height = kHeight * mapCoordinate.y

        this.setState({
            ...this.state,
            building: floor[floor.length - 2],
            currentFloor: floor[floor.length - 1],
            user: {
                ...this.state.user,
                location: {
                    floor: floor[floor.length - 1],
                    x: width,
                    y: height,
                }
            },
            api: locationCurrent

        })

        // ...this.state.api,
        //     mapCoordinate: mapCoordinate,
        //     floorDimension: floorDimension,
        //     image: {
        // ...image,
        //         width: width,
        //         height: height
        // }
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
    };

    render() {
        return (
            <div className="p-3" style={{backgroundColor: "rgb(220,220,220)"}}>

                <div className="row">
                    <div className="col-lg-6">
                        {Object.keys(this.state.user.info).length > 0 && <SearchBar iPcn={this.state.user.info.id}/>}
                    </div>

                    <div className="col-lg-6">
                        {Object.keys(this.state.user.info).length > 0 && <FavouriteTeachersComponent iPcn={this.state.user.info.id}/>}
                    </div>
                </div>

                <div className="row my-3">
                    {Object.keys(this.state.user).length > 0 && Object.keys(this.state.api).length > 0 ?
                        <Map user={this.state.user} api={this.state.api} currentFloor={this.state.currentFloor}/> : "Loading..."
                    }
                </div>

                <div className="row">
                    <div className="col">
                        <div className="float-left">
                            <BackBtn />
                        </div>
                    </div>
                    <div className="col">
                        <div className="float-right">
                            <ZoomInOutBtns handleFloorChange={this.handleFloorChange} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        locationCurrent: state.location
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentUser: () => dispatch(getCurrentUser()),
        getCurrentUserLocation: () => dispatch(getCurrentUserLocation())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsView);
