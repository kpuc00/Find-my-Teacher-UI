import React, {Component} from 'react';
import '../../styles/components/Vasil/teacherInfoComponent.css';
import {Container, Jumbotron, Card, ListGroup, ListGroupItem} from "react-bootstrap";


class InfoComponent extends Component {
    render() {
        return (
            <div className={"teacher-info"}>
                <div className={"container"}>
                    <div className={"header"}>
                        <span>Teacher's Information</span>
                    </div>
                    <div className={"info"}>
                        <div className={"row"}>
                            <span>Name: </span>
                            <span>{this.props.person.displayName}</span>
                        </div>
                        <div className={"row"}>
                            <span>Email: </span>
                            <span>{this.props.person.mail}</span>
                        </div>
                        <div className={"row"}>
                            <span>Employee number: </span>
                            <span>{this.props.person.employeeId}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoComponent;