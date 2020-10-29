import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import '../../styles/components/Kris/BackBtn.css';

class BackBtn extends Component {

    GoBack() {
        console.log("Went back.")
    }

    render() {
        return (
            <div className="BackBtnContainer">
                <Button className="BackBtn" onClick={this.GoBack}>
                    <FaArrowLeft />
                </Button>
            </div>
        )
    }
}

export default BackBtn;