import React, {Component} from 'react';
import '../../styles/components/Vasil/teacherInfoComponent.css';

class TeacherInfoComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            room: '2.06',
            componentIsOpen: false,
        }
        this.toggleOpen = this.toggleOpen.bind(this)
    }
   

    toggleOpen = () => {
        let state = this.state;
        state = {...state, componentIsOpen: !state.componentIsOpen};
        this.setState({
            ...state,
        })
    }

    componentDidMount(){
        this.setState({componentIsOpen: this.props.componentIsOpen})
    }

    render() {
        const {name, email, room, componentIsOpen} = this.state;

        if (componentIsOpen) {
            return (
                <div className={"teacher-info"}>
                    <div className={"container"}>
                        <div className={"header"}>
                            <span>Teacher's Information</span>
                            <span className={"button-close"} onClick={this.toggleOpen}>x</span>
                        </div>
                        <div className={"info"}>
                            <div className={"row"}>
                                <span>Name: </span>
                                <span>{name}</span>
                            </div>
                            <div className={"row"}>
                                <span>Email: </span>
                                <span>{email}</span>
                            </div>
                            <div className={"row"}>
                                <span>Room: </span>
                                <span>{room}</span>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
               /*  <div className={"teacher-info"} onClick={this.toggleOpen}>
                    <div className={"button-open"}>
                        <span>Open Teacher's Information</span>
                    </div>
                </div> */
                <div></div>
            );
        }
    }
}

export default TeacherInfoComponent;
