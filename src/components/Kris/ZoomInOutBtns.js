import React  from 'react'
import { Button } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../../styles/components/Kris/ZoomInOutBtns.css';

function ZoomInOutBtns(props) {

        return (
            <div className="ZoomInOutBtnContainer">
                <Button className="ZoomBtn" onClick={() =>  props.handleFloorChange(1)} >
                    <FaPlus />
                </Button>
                <br />
                <Button className="ZoomBtn" onClick={() => props.handleFloorChange(-1)}>
                    <FaMinus />
                </Button>
            </div>
        )

}

export default ZoomInOutBtns;