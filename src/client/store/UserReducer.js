import * as types from "../actions/types";

export default function (state = {}, action) {
	switch (action.type) {
		case types.LOGIN_USER:
			console.log("--- action", action.payload);
			return action.payload;
		default:
			return state
	}
}
