import React, {Component} from 'react';
import '../../styles/components/Rostislav/favouriteTeachersComponent.css';

import {Dropdown} from "react-bootstrap";
import {editFavouriteTeachersIpcn, getFavouriteTeachersIpcn} from "../../store/actions/favourities/favouritesAction";

import {connect} from "react-redux";
import autoBind from "auto-bind";
import {getAllTeachers, getTeacherByiPcn} from "../../store/actions/teacher/teacherActions";
import {BsStarFill} from "react-icons/all";
import {getTeacherLocation} from "../../store/actions/location/locationActions";

class FavouriteTeachersComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            teachers: [],
            favourites: []
        }

        autoBind(this)
    }

    componentDidMount() {
        this.props.getFavouriteTeachersIpcn(this.props.iPcn)
        this.props.getAllTeachers()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.favourites && prevState.favourites !== this.props.favourites) {
            this.updateFavourites()
        }

        if (this.props.teachers && prevState.teachers !== this.props.teachers) {
            this.updateTeachers()
        }
    }

    updateFavourites = () => {
        this.setState({
            favourites: this.props.favourites
        })
    }

    updateTeachers = () => {
        this.setState({
            teachers: this.props.teachers
        })
    }

    handleFavouriteInput = (id) => {
        let newFavourites = [...this.state.favourites]

        if (newFavourites.includes(id)) {
            for (let i = 0; i < newFavourites.length; i++) {
                if (newFavourites[i] === id) {
                    newFavourites.splice(i, 1)
                    this.props.editFavouriteTeachersIpcn({iPcn: this.props.iPcn, favourites: newFavourites})

                    this.setState({
                        favourites: newFavourites
                    })
                    return
                }
            }
        }

        newFavourites.push(id)
        this.props.editFavouriteTeachersIpcn({iPcn: this.props.iPcn, favourites: newFavourites})
        this.setState({
            favourites: newFavourites
        })

    }

    handleSelect = (teacher) => {
        this.props.getTeacherLocation("i428100")
        this.props.getTeacherByiPcn(teacher.id)
    }

    render() {

        const favouritesItem = this.state.teachers.map((teacher, index) => {
            if (this.state.favourites.includes(teacher.id)) {
                return (<Dropdown.Item key={index} className="d-flex align-items-center p-1"
                                       onClick={() => this.handleSelect(teacher)}>
                    <div className="mr-auto">{teacher.displayName}</div>
                    <div onClick={() => this.handleFavouriteInput(teacher.id)}><BsStarFill size="1.5em"/></div>
                </Dropdown.Item>)
            }
            return null;
        })

        return (
            <Dropdown className="btn btn-block">
                <Dropdown.Toggle id="dropdown-basic"
                                 style={{backgroundColor: "rgb(102, 51, 102)", borderStyle: "none"}}>
                    Favourite Teachers
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {favouritesItem}
                </Dropdown.Menu>
            </Dropdown>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        teachers: state.teacher.teachers,
        selectedTeacher: state.teacher.selectedTeacher,
        favourites: state.favourites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllTeachers: () => dispatch(getAllTeachers()),
        getFavouriteTeachersIpcn: iPcn => dispatch(getFavouriteTeachersIpcn(iPcn)),
        editFavouriteTeachersIpcn: student => dispatch(editFavouriteTeachersIpcn(student)),
        getTeacherLocation: iPcn => dispatch(getTeacherLocation(iPcn)),
        getTeacherByiPcn: iPcn => dispatch(getTeacherByiPcn(iPcn))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteTeachersComponent)
