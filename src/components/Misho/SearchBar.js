import React from 'react'
import Button from 'react-bootstrap/Button'

import '../../styles/components/Misho/SearchBar.css';

class AutoCompleteText extends React.Component {
    constructor(porps) {
        super(porps)

        this.state = {
            items: [
                {
                    id: 1,
                    name: "david",
                    favourite: false
                },
                {
                    id: 2,
                    name: "nick",
                    favourite: true
                },
                {
                    id: 3,
                    name: "peter",
                    favourite: false
                },
                {
                    id: 4,
                    name: "damien",
                    favourite: false
                },
                {
                    id: 5,
                    name: "deter",
                    favourite: false
                },
            ],
            suggestions: [],
            text: ""
        }
    }

    getItemById(id) {
        for(let i=0; i<this.state.items.length; i++) {
            if(this.state.items[i].id === id) {
                return this.state.items[i]
            }
        }
    }

    handleFavouriteInput(id) {
        let newItems = [...this.state.items]
        
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
        console.log(id)
    } 

    handleTextInput = (event) => {

        const value = event.target.value
        let suggestions = [];

        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i')
            suggestions = this.state.items.sort().filter(v => regex.test(v.name))
        }

        this.setState(() => ({suggestions, text: value}))
    }

    suggestionSelected(value) {
        this.setState(() => ({
                text: value,
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
                {suggestions.map(item => <div key={item.id} className="d-flex p-1"><li className="mr-auto" onClick={() => this.suggestionSelected(item.name)}>{item.name}</li><Button variant="secondary " size="sm" onClick={() => this.handleFavouriteInput(item.id)}>{!this.getItemById(item.id).favourite ? "Add" : "Remove"}</Button></div>)}
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

export default AutoCompleteText