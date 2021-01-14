import {combineReducers} from 'redux';
import locationReducer from "./location/locationReducer";
import mapReducer from "./map/mapReducer";
import userReducer from "./user/userReducer";
import teacherReducer from "./teacher/teacherReducer";
import favouritesReducer from "./favourites/favouritesReducer";
import socketReducer from "./socket/socketReducer";
import connectionReducer from "./connection/connectionReducer";

const rootReducer = combineReducers({
    location: locationReducer,
    map: mapReducer,
    user: userReducer,
    socket: socketReducer,
    teacher: teacherReducer,
    favourites: favouritesReducer,
    connection: connectionReducer
})

export default rootReducer;