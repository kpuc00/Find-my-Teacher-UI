import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import StudentsView from './StudentsView';
import '../styles/components/App.css';
import {Authenticate} from "react-oidc-client";
import {WebStorageStateStore} from "oidc-client";

function App() {

    const url = window.location.href
    const id_token = new URLSearchParams(url).get('https://find-my-teacher.azurewebsites.net/student#access_token')

    if(id_token){
        localStorage.setItem("my_token", id_token)
    }

    return (
        <Router>
            <Switch>
                {/*<Route exact path="/" component={() =>*/}
                {/*    window.location.href = "https://identity.fhict.nl/connect/authorize?client_id=i431062-findmyteac&scope=fhict%20fhict_location%20fhict_personal&response_type=token&redirect_uri=https://find-my-teacher.azurewebsites.net/student"}*/}
                {/*    return null*/}
                {/*/>*/}

                {/*<Route path="/student" component={StudentsView} />*/}

                <Authenticate
                    loginCompletePath="/student"
                    logoutPath="/my_logout_path"
                    userManagerSettings={{
                        loadUserInfo: true,
                        userStore: new WebStorageStateStore({
                            store: localStorage
                        }),
                        authority: "https://identity.fhict.nl/connect/authorize",
                        client_id: "i431062-findmyteac",
                        scope: "fhict fhict_location fhict_personal",
                        response_type: "token",
                        redirect_uri: "https://find-my-teacher.azurewebsites.net/student"
                    }}
                >

                    <StudentsView/>

                </Authenticate>
            </Switch>
        </Router>
    );
}

export default App;
