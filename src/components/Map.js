import React, {Component} from "react";
import {CalcPosition} from "../services/CalcPosition";
import MapObject from "../components/MapObject";

import {connect} from "react-redux";

class Map extends Component {

    constructTeacher = (api ) => {
        let teacherPosition = {}
        let teacherInfo = {}

        teacherPosition = CalcPosition(api.image, api.floorDimension, this.props.teacherLocation.coordinates)
        teacherInfo = this.props.selectedTeacher

        return {
            location: {
                x: teacherPosition.width,
                y: teacherPosition.height,
                floor: teacherPosition.floor[2]
            },
            info: teacherInfo
        }
    }

    render() {
        const {user, api, currentFloor} = this.props

        let teacher;
        if (this.props.teacherLocation) {
            teacher = this.constructTeacher(api)
        }

        return (

            <div>
                {/*<h3>{data.building} - Floor {data.currentFloor}</h3>*/}
                <h4>You are on the {user.location.floor} floor.</h4>
                <div className="floor-map">

                    <img src={`https://api.fhict.nl/location/mapimage/EHV/R10/${currentFloor}`}
                         style={{position: "relative"}} width={api.image.width}
                         height={api.image.height} alt="floor map"
                    />

                    <MapObject person={user} currentFloor={currentFloor}/>
                    {teacher && <MapObject person={teacher} currentFloor={currentFloor}/>}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        teacherLocation: state.location.teacherLocation,
        selectedTeacher: state.teacher.selectedTeacher
    }
}


export default connect(mapStateToProps, null)(Map)
