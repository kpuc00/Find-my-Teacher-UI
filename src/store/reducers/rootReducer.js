import {combineReducers} from 'redux';
import locationReducer from "./location/locationReducer";
import mapReducer from "./map/mapReducer";
import userReducer from "./user/userReducer";
import teacherReducer from "./teacher/teacherReducer";
import favouritesReducer from "./favourites/favouritesReducer";

const rootReducer = combineReducers({
    location: locationReducer,
    map: mapReducer,
    user: userReducer,
    teacher: teacherReducer,
    favourites: favouritesReducer
})

export default rootReducer;