import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../../styles/components/Kris/ZoomInOutBtns.css';

class ZoomInOutBtns extends Component {
    constructor(props) {
        super(props)
        this.ZoomIn=this.ZoomIn.bind(this)
    }

    componentDidMount(){
        console.log(this.props)
    }

    ZoomIn() {
        console.log("Zoomed in.")
        this.props.map()
    }

    ZoomOut() {
        console.log("Zoomed out.")
    }

    render() {
        return (
            <div className="ZoomInOutBtnContainer">
                <Button className="ZoomBtn" onClick={this.props.map}>
                    <FaPlus />
                </Button>
                <br />
                <Button className="ZoomBtn" onClick={this.ZoomOut}>
                    <FaMinus />
                </Button>
            </div>
        )
    }
}

export default ZoomInOutBtns;