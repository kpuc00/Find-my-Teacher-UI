import React, {useState} from "react";
import InfoComponent from "./Vasil/InfoComponent";


const MapObject = ({person, currentFloor}) => {

    const [showInfo, setShowInfo] = useState(false)

    return (
        <>
            {
            (person.location.floor === currentFloor) &&
                <div>
                    <div className="profilepic" style={{top: person.location.y, left: person.location.x}}>
                        <img src={person.info.profilePic ? person.info.profilePic : ''} alt="me"
                             onClick={() => setShowInfo(!showInfo)}
                        />
                    </div>

                    <div className="teacherInfo" style={{
                        top: person.location.y - 100,
                        left: person.location.x + 60
                    }}>
                        {showInfo && <InfoComponent person={person.info}/>}
                    </div>
                </div>
            }
        </>
    )

}

export default MapObject