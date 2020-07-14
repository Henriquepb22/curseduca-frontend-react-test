import { User } from "./types";
import { LOGIN } from "./constants";

interface Login {
    type: typeof LOGIN;
    payload: User;
}

export type AuthActionTypes = Login;
