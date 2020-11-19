import React, { Component } from 'react'
import autoBind from "auto-bind";
import { Button, Col, Row } from 'react-bootstrap';
import '../styles/components/map.css';

import ZoomInOutBtns from './Kris/ZoomInOutBtns';
import BackBtn from './Kris/BackBtn';

//connect to store
import { connect } from "react-redux";
import { getCurrentUserLocation } from "../store/actions/location/locationActions";
import { getOwnLocation, saveOwnLocation } from "../store/actions/user/userActions";

class Map extends Component {
    constructor(props) {
        super(props)
        this.state = {
            building: "R10",
            floors: ["BG", "1e", "2e", "3e", "4e"],
            currentFloor: "BG",
            floorIndex: 0,
            currentLocation: null,
            api: {
                mapHierarchyFloor: "EHV>R10>2e",
                mapCoordinate: {
                    x: 151.955109,
                    y: 54.03345
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
        this.props.getOwnLocation();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.ownLocation) {
            const convertedData = this.convertCoordinatesToMap(this.props.ownLocation[0])
            if (prevState.currentLocation !== convertedData) {
                console.log(prevState.currentLocation)
                console.log(convertedData)
                this.updateUserLocation()
            }
        }
    }

    convertCoordinatesToMap = (data) => {
        let f = data.mapInfo.mapHierarchyFloor
        const floor = f.includes('>') && f.substr(f.lastIndexOf('>') + 1).split(' ')[0]

        let kWidth = data.mapInfo.image.width / data.mapInfo.floorDimension.width
        let kHeight = data.mapInfo.image.height / data.mapInfo.floorDimension.length
        let width = kWidth * data.mapCoordinate.x
        let height = kHeight * data.mapCoordinate.y
        const convertedData = {
            x: width,
            y: height,
            floor: floor
        }
        return convertedData
    }

    updateUserLocation = () => {
        const convertedData = this.convertCoordinatesToMap(this.props.ownLocation[0])
        this.setState({
            ...this.state,
            currentLocation: convertedData,
            currentFloor: convertedData.floor
        })
    }

    handleFloorChange = (action) => {
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
        const data = this.state;
        return (
            <>
                <Row>
                    {data.currentLocation ?
                        <div>
                            <h3>{data.building} - Floor {data.currentFloor}</h3>
                            <h4>You are on the {data.currentLocation.floor} floor.</h4>
                            <Button onClick={() => this.props.saveOwnLocation(this.props.personalLocation)}>Save location</Button>
                            <div className="floor-map">
                                <img src={`https://api.fhict.nl/location/mapimage/EHV/R10/${data.currentFloor}`} style={{ position: "relative" }} width={data.api.image.width} height={data.api.image.height} alt="floor map" />
                                {
                                    (data.currentFloor === data.currentLocation.floor) &&
                                    <div className="profilepic" style={{ top: data.currentLocation.y, left: data.currentLocation.x }}>
                                        <img src={this.props.userPic} alt="me" />
                                    </div>
                                }
                            </div>
                        </div> :
                        null
                    }
                </Row>
                <Row style={{ height: "10%" }} className="mb-1">
                    <Col>
                        <div className="float-left">
                            <BackBtn />
                        </div>
                    </Col>
                    <Col>
                        <div className="float-right">
                            <ZoomInOutBtns handleFloorChange={this.handleFloorChange} />
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ownLocation: state.location.ownLocation
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentUserLocation: () => dispatch(getCurrentUserLocation()),
        getOwnLocation: () => dispatch(getOwnLocation()),
        saveOwnLocation: teacher => dispatch(saveOwnLocation(teacher))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);
