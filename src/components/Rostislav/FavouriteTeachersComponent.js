import React, { Component } from 'react';
import '../../styles/components/Rostislav/favouriteTeachersComponent.css';
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBContainer
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';

export default class FavouriteTeachersComponent extends Component {


    state = {
        collapseID: ''        
    };


    getFavouriteTeachers = () => {

    }

    toggleCollapse = collapseID => () => {
        this.setState(prevState => ({
            collapseID: prevState.collapseID !== collapseID ? collapseID : ''
        }));
    };

    render() {
        const teachers = [
            {
                name: 'Michael Koehorst',
                nowSharing: true
            },

            {
                name: 'Flip Wetzer',
                nowSharing: true
            },
            {
                name: 'Rafayel Avetyan',
                nowSharing: false
            }
        ]
        teachers.sort(function(a, b){              /* sorts to have teachers that are now sharing location on top */
            var keyA = a.nowSharing,
            keyB = b.nowSharing;

            if(keyA === true) return -1;
            if(keyA === keyB) return -1;
            if(keyA !== keyB) return 1;
            return 0;
        });

        let teachersList = teachers.map((d) => {                         /* gets all teachers objects  */
            if (d.nowSharing)
                return (<MDBNavItem key={d.name}>
                    <MDBNavLink to='#!' className="available">
                        {d.name}
                    </MDBNavLink>
                </MDBNavItem>);
            return (<MDBNavItem key={d.name}>
                <MDBNavLink to='#!' disabled className="unavailable">
                    {d.name}
                </MDBNavLink>
            </MDBNavItem>)
        });
        return (
            <Router>
                <MDBContainer id="favourites">
                    <MDBNavbar
                        light
                    >
                        <MDBContainer >
                            <div className="headOfContainer">
                                <MDBNavbarBrand>Favourite</MDBNavbarBrand>
                                <MDBNavbarToggler
                                    onClick={this.toggleCollapse('navbarCollapse1')}
                                />
                            </div>
                            <MDBCollapse
                                id='navbarCollapse1'
                                isOpen={this.state.collapseID}
                                navbar
                                
                            >
                                <MDBNavbarNav >   {/* left */}
                                    <MDBNavLink to='#!' disabled className="collapsedHeader">
                                        Teachers
                                    </MDBNavLink>
                                    {teachersList}                  {/* foreach teacher in favourites renders */}
                                    <MDBNavLink to='#!' disabled className="collapsedFooter">
                                        {teachersList.length}/10
                                    </MDBNavLink>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBContainer>
                    </MDBNavbar>
                </MDBContainer>
            </Router>
        );
    }
}