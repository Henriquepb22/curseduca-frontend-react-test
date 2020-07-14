import { AuthActionTypes } from "../actions/actionTypes";
import { LOGIN } from "../actions/constants";
import { User } from "../actions/types";

const initialState: User = {
    email: "",
    password: "",
};

export default function authReducer(
    state = initialState,
    action: AuthActionTypes
) {
    switch (action.type) {
        case LOGIN:
            return state;
        default:
            return state;
    }
}
