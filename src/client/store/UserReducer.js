import * as types from "../actions/types";

export default function (state = {}, action) {
	switch (action.type) {
		case types.LOGIN_USER:
			return action.payload;
		default:
			return state
	}
}
