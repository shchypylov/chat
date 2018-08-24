import * as types from "./types";
import axios from "../config/axiox";
import history from "../config/history";


export const authUser = (data) => async dispatch => {
	const res = await axios.post("/login", data);
	console.log("--- 0", res.data);
	if (res.data && res.data.login) {
		console.log("--- 1", res.data);
		history.push("/");
		dispatch({
			type: types.LOGIN_USER,
			payload: res.data
		})
	} else {
		console.log("--- 2", res.data);
		dispatch({
			type: types.ERROR,
			payload: res.data
		})
	}

}
