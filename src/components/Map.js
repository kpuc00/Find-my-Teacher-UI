import React, {Component} from 'react'
import '../styles/components/map.css';

class Map extends Component {

    state = {

    }

    render(){
        const data = this.props.data;
        return (
            <div>
                <h3>{data.building} - Floor {data.currentFloor}</h3>
                <h4>You are on the {data.user.currentLocation.floor} floor.</h4>
                <div className="floor-map">
                    <img src={`https://api.fhict.nl/location/mapimage/EHV/R10/${data.currentFloor}`} style={{ position: "relative" }} width={data.api.image.width} height={data.api.image.height} alt="floor map" />
                    {
                        (data.currentFloor === data.user.currentLocation.floor) &&
                        <div className="profilepic" style={{ top: data.user.currentLocation.y, left: data.user.currentLocation.x }}>
                            <img src={data.user.profilePic} alt="me" />
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Map
