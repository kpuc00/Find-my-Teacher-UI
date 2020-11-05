import React, {useState, useEffect} from 'react'
import '../styles/components/map.css';


function Map(props) {

    return (
        <div>
            <h3>{props.data.building}</h3>
            <img src={`https://api.fhict.nl/location/mapimage/EHV/R10/${props.data.currentFloor}`} width="100%" alt="floor map" />
        </div>
    )

}

export default Map
