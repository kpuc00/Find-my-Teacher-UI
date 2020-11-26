import React from 'react'
import Button from 'react-bootstrap/Button'

import '../../styles/components/Misho/SearchBar.css';
import {getAllTeachers, getTeacherByiPcn} from "../../store/actions/teacher/teacherActions";
import {connect} from "react-redux";



import {BsStarFill, BsStar} from "react-icons/all";
import {editFavouriteTeachersIpcn, getFavouriteTeachersIpcn} from "../../store/actions/favourities/favouritesAction";
import {getTeacherLocation} from "../../store/actions/location/locationActions";

import "../../styles/star.css"

class AutoCompleteText extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            teachers: [],
            suggestions: [],
            favourites: [],
            text: ""
        }
    }

    componentDidMount() {
        this.props.getAllTeachers()
        this.props.getFavouriteTeachersIpcn(this.props.iPcn)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.teachers && prevState.teachers !== this.props.teachers) {
            this.updateTeachers()
        }

        if (this.props.favourites && prevState.favourites !== this.props.favourites) {
            this.updateFavourites()
        }
    }

    updateTeachers = () => {
        this.setState({teachers: this.props.teachers})
    }

    updateFavourites = () => {
        this.setState({favourites: this.props.favourites})
    }

    // getItemById(id) {
    //     for(let i=0; i<this.state.teachers.length; i++) {
    //         if(this.state.teachers[i].id === id) {
    //             return this.state.teachers[i]
    //         }
    //     }
    // }

    handleFavouriteInput(id) {
        console.log("search fav")
        let newFavourites  = [...this.state.favourites]

        if (newFavourites.includes(id)) {
            for (let i = 0; i < newFavourites.length; i++) {
                if (newFavourites[i] === id) {
                    newFavourites.splice(i, 1)
                    this.props.editFavouriteTeachersIpcn({ iPcn: this.props.iPcn, favourites: newFavourites})

                    this.setState({
                        favourites: newFavourites
                    })
                    return
                }
            }
        }

        newFavourites.push(id)
        this.props.editFavouriteTeachersIpcn({ iPcn: this.props.iPcn, favourites: newFavourites})
        this.setState({
            favourites: newFavourites
        })

    }

    handleTextInput = (event) => {

        const value = event.target.value
        let suggestions = [];

        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            suggestions = this.state.teachers.sort().filter(v => regex.test(v.displayName))
        }

        this.setState(() => ({suggestions, text: value}))
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


    renderSuggestions() {
        const suggestions  = this.state.suggestions
        if (suggestions.length === 0) {
            return null;
        }

        return (
            <ul className="mt-2 rounded mb-1">
                {suggestions.map(item =>
                    <div key={item.id} className="d-flex p-1">
                        <li className="mr-auto" onClick={() => this.suggestionSelected(item)}>{item.displayName}</li>
                        <div className="star-div" key={item.id} onClick={() => this.handleFavouriteInput(item.id)}>{this.state.favourites.includes(item.id) ? <BsStarFill className="is-favourite"  size="2em"/> : <BsStar className="not-favourite" size="2em"/>}</div>
                    </div>)}
            </ul>

        )
    }



    render() {

        return (
            <div className="SearchBox">
                <div className="SearchBoxText">
                    <input value={this.state.text} onChange={this.handleTextInput} type="text" placeholder="Search..."  className="rounded mb-0"/>
                    {this.renderSuggestions()}
                </div>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        teachers: state.teacher.teachers,
        favourites: state.favourites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllTeachers: () => dispatch(getAllTeachers()),
        getFavouriteTeachersIpcn: iPcn => dispatch(getFavouriteTeachersIpcn(iPcn)),
        editFavouriteTeachersIpcn: student => dispatch(editFavouriteTeachersIpcn(student)),
        getTeacherLocation: iPcn => dispatch(getTeacherLocation(iPcn)),
        getTeacherByiPcn : iPcn => dispatch(getTeacherByiPcn(iPcn))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoCompleteText)