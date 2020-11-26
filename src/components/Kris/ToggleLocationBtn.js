import React, { Component } from 'react'
import { ToggleButton } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { FaLocationArrow } from 'react-icons/fa';
import '../../styles/components/Kris/ToggleLocationBtn.css';
import {getCurrentUser} from "../../store/actions/user/userActions";
import {getCurrentUserLocation} from "../../store/actions/location/locationActions";
import {putTeacherLocation} from "../../store/actions/teacher/teacherActions";
import {connect} from "react-redux";
import autoBind from "auto-bind";

class ToggleLocationBtn extends Component {

    constructor(props) {
        super(props);
    }

    ToggleGPS = () => {
        const { user } = this.props.data
        const { api } = this.props.data


        const teacher = {
            iPcn: user.info.id,
            coordinates: {
                x: api.mapCoordinate.x,
                y: api.mapCoordinate.y,
                mapHierarchyFloor: api.mapHierarchyFloor
            }
        }

        putTeacherLocation(teacher)
    }

    render() {
        return (
            <div className="ToggleLocationBtnContainer">
                <ButtonGroup toggle className="mb-2">
                    <ToggleButton className="ToggleBtn"
                        type="checkbox"
                        checked={false}
                        value="1"
                        onChange={this.ToggleGPS}
                    >
                        <FaLocationArrow />
                    </ToggleButton>
                </ButtonGroup>
            </div>
        )
    }
}



export default ToggleLocationBtn;