import React, {Component} from 'react';

class NoContentComponent extends Component {
    render() {
        return (
            <div className="h-100 w-100">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h1>You are almost there! Keep trying!</h1>
                    <h2>(FHICT services are not responding)</h2>
                </div>
            </div>
        );
    }
}

export default NoContentComponent;