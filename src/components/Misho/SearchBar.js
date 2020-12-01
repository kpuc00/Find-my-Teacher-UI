import React from 'react'
import Button from 'react-bootstrap/Button'

import '../../styles/components/Misho/SearchBar.css';
import {clearSelectedTeacher, getAllTeachers, getTeacherByiPcn} from "../../store/actions/teacher/teacherActions";
import {connect} from "react-redux";


import {BsStarFill, BsStar} from "react-icons/all";
import {editFavouriteTeachersIpcn, getFavouriteTeachersIpcn} from "../../store/actions/favourities/favouritesAction";
import {clearSelectedTeacherLocation, getTeacherLocation} from "../../store/actions/location/locationActions";

import "../../styles/star.css"

class AutoCompleteText extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            teachers: [],
            suggestions: [],
            favourites: [],
            text: "",
            showSuggestions: false
        }
    }

    componentDidMount() {
        this.props.getAllTeachers()
        this.props.getFavouriteTeachersIpcn(this.props.iPcn)

        let searchBar = document.querySelector('#searchbar')
        document.addEventListener('click', () => {
            this.setState({
                ...this.state,
                showSuggestions: document.activeElement === searchBar
            })
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.teachers && prevState.teachers !== this.props.teachers) {
            this.updateTeachers()
        }
        if (this.props.favourites && prevState.favourites !== this.props.favourites) {
            this.updateFavourites()
        }
        if (this.props.selectedTeacher && prevState.text === '') {
            this.updateSearchBar()
        }
    }

    updateTeachers = () => {
        this.setState({
            ...this.state,
            teachers: this.props.teachers
        })
    }

    updateFavourites = () => {
        this.setState({
            ...this.state,
            favourites: this.props.favourites
        })
    }

    updateSearchBar = () => {
        this.setState({
            ...this.state,
            text: this.props.selectedTeacher.displayName
        })
    }

    // getItemById(id) {
    //     for(let i=0; i<this.state.teachers.length; i++) {
    //         if(this.state.teachers[i].id === id) {
    //             return this.state.teachers[i]
    //         }
    //     }
    // }

    handleFavouriteInput(id) {
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

    handleTextInput = (event) => {
        const value = event.target.value
        if(value === ''){
            this.props.clearSelectedTeacher()
            this.props.clearSelectedTeacherLocation()
        }

        let suggestions = [];

        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            suggestions = this.state.teachers.sort().filter(v => regex.test(v.displayName))
        }

        this.setState(() => ({
            ...this.state,
            suggestions,
            text: value
        }))
    }

    suggestionSelected(teacher) {
        this.props.getTeacherLocation("i428100")
        this.props.getTeacherByiPcn(teacher.id)

        this.setState(() => ({
                text: teacher.displayName,
                suggestions: []
            })
        )
    }

    handleRemoveSelected = () => {
        this.props.clearSelectedTeacher();
        this.props.clearSelectedTeacherLocation();
        this.setState({
            ...this.state,
            text: ""
        })
    }

    renderSuggestions() {
        const suggestions = this.state.suggestions
        if (suggestions.length === 0) {
            return null;
        }

        return (
            <ul className="mt-2 rounded mb-1">
                {suggestions.map(item =>
                    <div key={item.id} className="d-flex p-1">
                        <li className="mr-auto" onClick={() => this.suggestionSelected(item)}>{item.displayName}</li>
                        <div className="star-div" key={item.id}
                             onClick={() => this.handleFavouriteInput(item.id)}>{this.state.favourites.includes(item.id) ?
                            <BsStarFill className="is-favourite" size="2em"/> :
                            <BsStar className="not-favourite" size="2em"/>}</div>
                    </div>)}
            </ul>

        )
    }

    render() {
        return (
            <div className="SearchBox">
                <div className="SearchBoxText">
                    <input id={'searchbar'} value={this.state.text} onChange={this.handleTextInput} type="text"
                           placeholder="Search..."
                           className="rounded mb-0"/>
                    {this.state.showSuggestions ? this.renderSuggestions() : null}
                </div>
                <div className="delete" onClick={() => this.handleRemoveSelected()}>X</div>
            </div>
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
        getTeacherByiPcn: iPcn => dispatch(getTeacherByiPcn(iPcn)),
        clearSelectedTeacher: () => dispatch(clearSelectedTeacher()),
        clearSelectedTeacherLocation: () => dispatch(clearSelectedTeacherLocation())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoCompleteText)