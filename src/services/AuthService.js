import React from "react";
import axios from "axios";

const SEC_API = "https://ssosecapi.fontys.nl/json.ashx?app=dEGRQ7sQZUGDmc5rVIQF4A"

class AuthService {

    getLoggedInPerson() {
        axios.get(SEC_API).then(response => console.log(response))
    }

}

export default new AuthService()