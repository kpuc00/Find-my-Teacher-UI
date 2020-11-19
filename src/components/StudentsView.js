import React, { Component } from 'react';
import autoBind from "auto-bind";
import '../styles/components/App.css';

import FavouriteTeachersComponent from "./Rostislav/FavouriteTeachersComponent"

import SearchBar from "./Misho/SearchBar"

import Map from './Map';

//Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

//connect to store
import { connect } from "react-redux";
import { getCurrentUser, getUserPicture } from "../store/actions/user/userActions";
import { getAllTeachers } from "../store/actions/teacher/teacherActions";

class StudentsView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {
                profilePic: ""
            }
        }

        autoBind(this)
    }

    componentDidMount() {
        this.props.getUserPicture('i428100');
        this.props.getAllTeachers();
        this.props.getCurrentUser();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.userAvatarData && prevState.user.profilePic !== this.props.userAvatarData.value) {
            this.updateUserPicture();
        }
    }

    updateUserPicture = () => {
        this.setState({
            user: {
                ...this.state.user,
                profilePic: this.props.userAvatarData.value
            }
        })
    }

    render() {
        return (
            <div style={{ padding: "20px", backgroundColor: "rgb(224,224,224)", height: "100vh" }}>

                <Row style={{ height: "10%" }} className="mb-1">
                    <Col>
                        <div className="float-left">
                            <SearchBar />
                        </div>
                    </Col>

                    <Col>
                        <div className="float-right">
                            <FavouriteTeachersComponent />
                        </div>
                    </Col>
                </Row>

                <Row style={{ height: "80%" }} className="mb-1">
                    <Col>
                        {/*<div className="float-right" >*/}
                        {/*    <TeacherInfoComponent />*/}
                        {/*</div>*/}
                        <div className="map-container mb-1">
                            <Map userPic={this.state.user.profilePic} />
                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userAvatarData: state.user.userAvatarData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserPicture: iPcn => dispatch(getUserPicture(iPcn)),
        getCurrentUser: () => dispatch(getCurrentUser()),
        getAllTeachers: () => dispatch(getAllTeachers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsView);
