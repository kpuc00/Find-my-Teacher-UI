import React, { Component } from 'react'
import '../styles/components/map.css';


import TeacherInfoComponent from "./Vasil/TeacherInfoComponent"

class Map extends Component {

    constructor(props) {
        super(props)
        this.state = {
            teacherInfoShows: false,
        }

        this.openTeacherInfo = this.openTeacherInfo.bind(this)
    }

    openTeacherInfo() {
        this.setState({ teacherInfoShows: !this.state.teacherInfoShows })
    }

    render() {
        return (
            <div>
                {/*<h3>{data.building} - Floor {data.currentFloor}</h3>*/}
                <h4>You are on the {this.props.data.user.location.floor} floor.</h4>
                <div className="floor-map">
                    <img src={`https://api.fhict.nl/location/mapimage/EHV/R10/${this.props.data.currentFloor}`}
                         style={{position: "relative"}} width={this.props.data.api.image.width}
                         height={this.props.data.api.image.height} alt="floor map"/>
                    {
                        (this.props.data.currentFloor === this.props.data.user.location.floor) &&
                        <div className="profilepic"
                             style={{top: this.props.data.user.location.y, left: this.props.data.user.location.x}}>
                            <img src={this.props.data.user.info.profilePic} alt="me" onClick={this.openTeacherInfo}/>
                        </div>
                    }
                    <div className="teacherInfo" style={{
                        top: this.props.data.user.location.y - 100,
                        left: this.props.data.user.location.x + 60
                    }}>
                        {this.state.teacherInfoShows ?
                            <TeacherInfoComponent componentIsOpen={true}/> :
                            null
                        }
                    </div>
                </div>
            </div>
        )

    }
}

export default Map
