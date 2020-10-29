import React, { Component } from 'react'
import '../../styles/components/Alexander/followersInfoComponent.css';

export class FollowersInfoComponent extends Component {

    state = {
        name1: 'Vaseto',
        name2: 'Kriskata',
        name3: 'Sashkata',
        name4: 'Rosti',
        name5: 'Michael',
        componentIsOpen: false
    }

    toggleOpen = () => {
        let state = this.state;
        state = {...state, componentIsOpen: !state.componentIsOpen};
        this.setState({
            ...state,
        })
    }

    render() {
        const {name1, name2, name3, name4, name5, componentIsOpen} = this.state;

        if(componentIsOpen){
            return (
                <div className={"followers"}>
                    <div className={"container"}>
                        <div className={"header"}>
                            <span>Current Followers</span>
                            <span className={"button-close"} onClick={this.toggleOpen}>x</span>
                        </div>
                        <div className={"info"}>
                            <div className={"row"}>
                                <span>1. Name: {name1}</span>
                                <span><img alt="status" src="/resources/green_dot.png" className={"Blink"}></img></span>
                            </div>
                            <div className={"row"}>
                                <span>2. Name: {name2}</span>
                                <span><img alt="status" src="/resources/green_dot.png" className={"Blink"}></img></span>
                            </div>
                            <div className={"row"}>
                                <span>3. Name: {name3}</span>
                                <span><img alt="status" src="/resources/red_dot.png" className={"Blink"}></img></span>
                            </div>
                            <div className={"row"}>
                                <span>4. Name: {name4}</span>
                                <span><img alt="status" src="/resources/red_dot.png" className={"Blink"}></img></span>
                            </div>
                            <div className={"row"}>
                                <span>5. Name: {name5}</span>
                                <span><img alt="status" src="/resources/green_dot.png" className={"Blink"}></img></span>
                            </div>
                        </div>
                    </div>                    
                </div>
            );
        }
        else{
            return(
                <div className={"followers"} onClick={this.toggleOpen}>
                    <div className={"button-open"}>
                        <span>Open Current Followers</span>
                    </div>
                </div>
            );
        }
       
    }
}

export default FollowersInfoComponent
