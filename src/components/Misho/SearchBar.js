import React from 'react'
import Button from 'react-bootstrap/Button'

import '../../styles/components/Misho/SearchBar.css';
import {getCurrentUser, getUserPicture} from "../../store/actions/user/userActions";
import {getCurrentUserLocation} from "../../store/actions/location/locationActions";
import {getAllTeachers} from "../../store/actions/teacher/teacherActions";
import {connect, useSelector} from "react-redux";

class AutoCompleteText extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            suggestions: [],
            text: ""
        }
    }

    componentDidMount() {
        this.updateTeachers()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.teachers && prevState.items !== this.props.teachers) {
            this.updateTeachers()
        }
    }

    updateTeachers = () => {
        this.setState({items: this.props.teachers})
    }

    getItemById(id) {
        for(let i=0; i<this.state.items.teachers.length; i++) {
            if(this.state.items.teachers[i].id === id) {
                return this.state.items.teachers[i]
            }
        }
    }

    handleFavouriteInput(id) {
        let newItems = [...this.state.items.teachers]
        
        for(let i = 0; i < newItems.length; i++) {
            if (newItems[i].id === id) {
                newItems[i] = {
                        ...newItems[i],
                        favourite: !newItems[i].favourite
                    }
                break
            }
        }


        this.setState(state => ({
                items: newItems
        }))
    } 

    handleTextInput = (event) => {

        const value = event.target.value
        let suggestions = [];

        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            suggestions = this.state.items.teachers.sort().filter(v => regex.test(v.displayName))
        }

        this.setState(() => ({suggestions, text: value}))
    }

    suggestionSelected(value) {
        this.setState(() => ({
                text: value.displayName,
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
                {suggestions.map(item => <div key={item.id} className="d-flex p-1"><li className="mr-auto" onClick={() => this.suggestionSelected(item)}>{item.displayName}</li><Button variant="secondary " size="sm" onClick={() => this.handleFavouriteInput(item.id)}>{!this.getItemById(item.id).favourite ? "Add" : "Remove"}</Button></div>)}
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
        teachers: state.teacher
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllTeachers: () => dispatch(getAllTeachers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoCompleteText)