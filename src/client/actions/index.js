import * as types from "./types";
import axios from "../config/axiox";
import history from "../config/history";


export const authUser = (data) => async dispatch => {
	const res = await axios.post("/login", data);
	if (res.data && res.data.login) {
		history.push("/")
	}
	dispatch({
		type: types.LOGIN_USER,
		payload: res.data
	})
}
