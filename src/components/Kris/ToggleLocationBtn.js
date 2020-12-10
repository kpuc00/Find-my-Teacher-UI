import React, {Component} from 'react'
import {Button} from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import {FaLocationArrow} from 'react-icons/fa';
import '../../styles/components/Kris/ToggleLocationBtn.css';
import {socket} from "../../services/socket";
import {connect} from "react-redux";

let counter = 1;
let interval;

class ToggleLocationBtn extends Component {

    state = {
        isSharing: false,
    }

    ToggleGPS = () => {
        this.setState({
            isSharing: !this.state.isSharing
        })

        const {user} = this.props.data
        const {api} = this.props.data

        const teacher = {
            iPcn: user.info.id,
            coordinates: {
                x: api.mapCoordinate.x,
                y: api.mapCoordinate.y,
                mapHierarchyFloor: api.mapHierarchyFloor
            }
        }

        function sendLocation() {
            counter++;
            teacher.coordinates.x -= counter;
            socket.send(teacher)
            return null;
        }

        if (this.state.isSharing) {
            clearInterval(interval)
        } else {
            sendLocation(teacher)
            interval = setInterval(sendLocation, 5000)
        }
    }

    render() {
        return (
            <div className="ToggleLocationBtnContainer">
                <ButtonGroup toggle className="mb-2">
                    <Button className="ToggleBtn" disabled={!this.props.isConnected} onClick={this.ToggleGPS}>
                        <FaLocationArrow/>
                    </Button>
                </ButtonGroup>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        isConnected: state.socket.isConnected
    }
}

export default connect(mapStateToProps)(ToggleLocationBtn);
