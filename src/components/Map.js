import React, {useState} from 'react'
import '../styles/components/map.css';


import TeacherInfoComponent from "./Vasil/TeacherInfoComponent"
import autoBind from "auto-bind";

const Map = ({user, api, currentFloor}) => {

    const [teacherInfoShows, setTeacherInfoShows] = useState(false)

    return (
        <div>
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

                <div className="teacherInfo" style={{
                    top: user.location.y - 100,
                    left: user.location.x + 60
                }}>

                { teacherInfoShows && <TeacherInfoComponent user={user.info}/> }

                </div>
            </div>
        </div>
    )
}

export default Map
