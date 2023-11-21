import { IUserState } from "../../types";
import { SET_USER } from "../action-types";

const initialState = {
    user: null,
}

const getInitialState = () => {
    const cacheState = localStorage.getItem('prevState');
    if (cacheState) {
        const jsState = JSON.parse(cacheState);
        return jsState.user ?? initialState
    }
    return initialState;
}

const userReducer = (state: IUserState = getInitialState(), action: any) => {
    switch (action.type) {
        case SET_USER: {
            return ({
                ...state,
                user: action.user
            })
        }
        default: {
            return state;
        }
    }
}

export { userReducer }
