import * as types from "./types";
import axios from "../config/axiox";


export const authUser = (data) => async dispatch => {
	const res = await axios.post("/login", data);
	dispatch({
		type: types.LOGIN_USER,
		payload: res.data
	})
}
