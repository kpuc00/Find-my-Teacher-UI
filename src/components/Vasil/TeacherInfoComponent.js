import React from 'react';
import '../../styles/components/Vasil/teacherInfoComponent.css';
import {Container, Jumbotron, Card, ListGroup, ListGroupItem} from "react-bootstrap";


const TeacherInfoComponent = ({user}) => {
    return (
        <div className={"teacher-info"}>
            <div className={"container"}>
                <div className={"header"}>
                    <span>Teacher's Information</span>
                </div>
                <div className={"info"}>
                    <div className={"row"}>
                        <span>Name: </span>
                        <span>{user.displayName}</span>
                    </div>
                    <div className={"row"}>
                        <span>Email: </span>
                        <span>{user.mail}</span>
                    </div>
                    <div className={"row"}>
                        <span>Employee number: </span>
                        <span>{user.employeeId}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherInfoComponent;
