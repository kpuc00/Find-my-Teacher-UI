import React, { Component } from 'react';
import '../../styles/components/Rostislav/favouriteTeachersComponent.css';

import {Dropdown} from "react-bootstrap";
import {editFavouriteTeachersIpcn, getFavouriteTeachersIpcn} from "../../store/actions/favourities/favouritesAction";

import {connect} from "react-redux";
import autoBind from "auto-bind";
import {getAllTeachers} from "../../store/actions/teacher/teacherActions";
import {BsStar, BsStarFill} from "react-icons/all";

class FavouriteTeachersComponent extends Component{

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

    render() {

        const favouritesItem = this.state.teachers.map((teacher, index) => {
            if (this.state.favourites.includes(teacher.id)) {
                return (<Dropdown.Item key={index} className="d-flex align-items-center p-1" onClick={() => console.log("get location")}><div className="mr-auto">{teacher.displayName}</div><div onClick={() => this.handleFavouriteInput(teacher.id)}><BsStarFill size="1.5em"/> </div></Dropdown.Item>)
            }
        })

        return (
            <Dropdown className="btn btn-block" >
                <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor: "rgb(102, 51, 102)", borderStyle: "none"}}>
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
        teachers: state.teacher,
        favourites: state.favourites
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllTeachers: () => dispatch(getAllTeachers()),
        getFavouriteTeachersIpcn: iPcn => dispatch(getFavouriteTeachersIpcn(iPcn)),
        editFavouriteTeachersIpcn: student => dispatch(editFavouriteTeachersIpcn(student))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavouriteTeachersComponent)



// export default class FavouriteTeachersComponent extends Component {
//
//
//     state = {
//         collapseID: ''
//     };
//
//
//     getFavouriteTeachers = () => {
//
//     }
//
//     toggleCollapse = collapseID => () => {
//         this.setState(prevState => ({
//             collapseID: prevState.collapseID !== collapseID ? collapseID : ''
//         }));
//     };
//
//     render() {
//         const teachers = [
//             {
//                 name: 'Michael Koehorst',
//                 nowSharing: true
//             },
//
//             {
//                 name: 'Flip Wetzer',
//                 nowSharing: true
//             },
//             {
//                 name: 'Rafayel Avetyan',
//                 nowSharing: false
//             }
//         ]
//         teachers.sort(function(a, b){              /* sorts to have teachers that are now sharing location on top */
//             var keyA = a.nowSharing,
//             keyB = b.nowSharing;
//
//             if(keyA === true) return -1;
//             if(keyA === keyB) return -1;
//             if(keyA !== keyB) return 1;
//             return 0;
//         });
//
//         let teachersList = teachers.map((d) => {                         /* gets all teachers objects  */
//             if (d.nowSharing)
//                 return (<MDBNavItem key={d.name}>
//                     <MDBNavLink to='#!' className="available">
//                         {d.name}
//                     </MDBNavLink>
//                 </MDBNavItem>);
//             return (<MDBNavItem key={d.name}>
//                 <MDBNavLink to='#!' disabled className="unavailable">
//                     {d.name}
//                 </MDBNavLink>
//             </MDBNavItem>)
//         });
//         return (
//             <Router>
//                 <MDBContainer id="favourites">
//                     <MDBNavbar
//                         light
//                     >
//                         <MDBContainer >
//                             <div className="headOfContainer">
//                                 <MDBNavbarBrand>Favourite</MDBNavbarBrand>
//                                 <MDBNavbarToggler
//                                     onClick={this.toggleCollapse('navbarCollapse1')}
//                                 />
//                             </div>
//                             <MDBCollapse
//                                 id='navbarCollapse1'
//                                 isOpen={this.state.collapseID}
//                                 navbar
//
//                             >
//                                 <MDBNavbarNav >   {/* left */}
//                                     <MDBNavLink to='#!' disabled className="collapsedHeader">
//                                         Teachers
//                                     </MDBNavLink>
//                                     {teachersList}                  {/* foreach teacher in favourites renders */}
//                                     <MDBNavLink to='#!' disabled className="collapsedFooter">
//                                         {teachersList.length}/10
//                                     </MDBNavLink>
//                                 </MDBNavbarNav>
//                             </MDBCollapse>
//                         </MDBContainer>
//                     </MDBNavbar>
//                 </MDBContainer>
//             </Router>
//         );
//     }
// }