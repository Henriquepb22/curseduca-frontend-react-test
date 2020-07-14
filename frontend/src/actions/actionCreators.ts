import { LOGIN } from "./constants";
import { AuthActionTypes } from "./actionTypes";
import { User } from "./types";

export const login = (user: User): AuthActionTypes => ({
    type: LOGIN,
    payload: user,
});
