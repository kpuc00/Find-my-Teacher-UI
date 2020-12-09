import React, {Component} from 'react';
import '../../styles/components/Vasil/teacherInfoComponent.css';


class InfoComponent extends Component {
    render() {
        return (
            <div className={"teacher-info"}>
                <div className={"container"}>
                    <span className={'header'}>Teacher's Information</span>
                    <div className={"info"}>
                        <div className={"row"}>
                            <span>Name: </span>
                            <span>{this.props.person.displayName}</span>
                        </div>
                        <div className={"row"}>
                            <span>Email: </span>
                            <span>{this.props.person.mail}</span>
                        </div>
                        <div className={"row"}>
                            <span>Employee number: </span>
                            <span>{this.props.person.employeeId}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InfoComponent;
