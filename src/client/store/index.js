import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import UserReducer from "./UserReducer";
import ErrorReducer from "./ErrorReducer";

export default combineReducers({
	form: formReducer,
	user: UserReducer,
	error: ErrorReducer
})
