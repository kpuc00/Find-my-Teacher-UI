import {combineReducers} from 'redux';
import locationReducer from "./location/locationReducer";
import mapReducer from "./map/mapReducer";
import userReducer from "./user/userReducer";
import teacherReducer from "./teacher/teacherReducer";

const rootReducer = combineReducers({
    location: locationReducer,
    map: mapReducer,
    user: userReducer,
    teacher: teacherReducer
})

export default rootReducer;