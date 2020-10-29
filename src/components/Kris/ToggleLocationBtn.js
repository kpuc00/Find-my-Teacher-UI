import React, { Component, useState } from 'react'
import { ToggleButton } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { FaLocationArrow } from 'react-icons/fa';
import '../../styles/components/Kris/ToggleLocationBtn.css';

class ToggleLocationBtn extends Component {

    ToggleGPS() {
        console.log("toggle gps.")
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