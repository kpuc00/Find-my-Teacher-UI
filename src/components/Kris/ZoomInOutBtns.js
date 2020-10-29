import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../../styles/components/Kris/ZoomInOutBtns.css';

class ZoomInOutBtns extends Component {

    ZoomIn(){
        console.log("Zoomed in.")
    }

    ZoomOut(){
        console.log("Zoomed out.")
    }

    render() {
        return (
            <div className="ZoomInOutBtnContainer">
                <Button className="ZoomBtn" onClick={this.ZoomIn}>
                    <FaPlus />
                </Button>
                <br/>
                <Button className="ZoomBtn" onClick={this.ZoomOut}>
                    <FaMinus />
                </Button>
            </div>
        )
    }
}

export default ZoomInOutBtns;