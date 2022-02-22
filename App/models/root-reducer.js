import { combineReducers } from "redux";
import { reducer as userReducer} from "./user/reducer";

const reducer = combineReducers({
    user : userReducer,
})

export {reducer};