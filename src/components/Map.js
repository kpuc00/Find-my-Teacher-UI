<<<<<<< HEAD
import React, {useEffect, useState} from 'react'
=======
import React, {Component, useState} from 'react'
>>>>>>> develop
import '../styles/components/map.css';


import InfoComponent from "./Vasil/InfoComponent"
import autoBind from "auto-bind";
<<<<<<< HEAD
import ToggleLocationBtn from "./Kris/ToggleLocationBtn";

const Map = ({user, api, currentFloor}) => {



    const [teacherInfoShows, setTeacherInfoShows] = useState(false)

    return (
        <>

        <div className="col">
                <ToggleLocationBtn user={user} api={api}/>

                {/*<h3>{data.building} - Floor {data.currentFloor}</h3>*/}
                <h4>You are on the {user.location.floor} floor.</h4>
                <div className="floor-map">
                    <img src={`https://api.fhict.nl/location/mapimage/EHV/R10/${currentFloor}`}
                         style={{position: "relative"}} width={api.image.width}
                         height={api.image.height} alt="floor map" />
                    {
                        (currentFloor === user.location.floor) &&
                        <div className="profilepic"
                             style={{top: user.location.y, left: user.location.x}}>
                            <img src={user.info.profilePic} alt="me" onClick={() => setTeacherInfoShows(!teacherInfoShows)}/>
                        </div>
                    }

                        {/*{*/}
                        {/*    (currentFloor === teacher.location.floor) &&*/}
                        {/*    <div className="profilepic"*/}
                        {/*         style={{top: teacher.location.y, left: teacher.location.x}}>*/}
                        {/*        <img src={teacher.info.profilePic} alt="me" onClick={() => setTeacherInfoShows(!teacherInfoShows)}/>*/}
                        {/*    </div>*/}
                        {/*}*/}

                    <div className="teacherInfo" style={{
                        top: user.location.y - 100,
                        left: user.location.x + 60
                    }}>

                    { teacherInfoShows && <TeacherInfoComponent user={user.info}/> }
=======
import {getCurrentUser} from "../store/actions/user/userActions";
import {getCurrentUserLocation} from "../store/actions/location/locationActions";
import {connect} from "react-redux";
import {CalcPosition} from "../services/CalcPosition";
import MapObject from "../components/MapObject"

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
        const { user, api, currentFloor } = this.props

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

                    <MapObject  person={user} currentFloor={currentFloor}/>
                    {teacher && <MapObject  person={teacher} currentFloor={currentFloor}/>}
>>>>>>> develop

                    </div>
                </div>

            </div>
<<<<<<< HEAD
        </>
    )
=======
        )
    }
>>>>>>> develop
}

const mapStateToProps = (state) => {
    return {
        teacherLocation: state.location.teacherLocation,
        selectedTeacher: state.teacher.selectedTeacher
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         getTeacher: iPcn
//     }
// }

export default connect(mapStateToProps, null)(Map)
