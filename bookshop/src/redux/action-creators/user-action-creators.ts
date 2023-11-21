import { takeEvery, put } from "redux-saga/effects";
import { IRegistrationActivation, ISignIn, ISignUp, ITokensResponse, IUserInfo } from "../../types";
import { ACTIVATION_REGISTRATION, GET_USER_INFO, SET_USER, SIGN_IN, SIGN_UP } from "../action-types";
import { getToken } from "../../utils";

const activateRegistration = (activationInfo: IRegistrationActivation) => ({
    type: ACTIVATION_REGISTRATION,
    activationInfo,
})

const signUp = (signUpInfo: ISignUp) => ({
    type: SIGN_UP,
    signUpInfo,
})

const signIn = (signInInfo: ISignIn) => ({
    type: SIGN_IN,
    signInInfo,
})

const getUserInfo = () => ({
    type: GET_USER_INFO,
})

const setUser = (user: IUserInfo | null) => ({
    type: SET_USER,
    user,
})

function* fetchActivationRegistration(action: any) {
    const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/activation/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(action.activationInfo)
    })

}

function* fetchSignUp(action: any) {
  const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/', {
      method: 'POST',
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(action.signUpInfo)
  });
  if (response.status === 201) {
    window.location.pathname = '/signin'
  } else {
    response.json().then((data: any) => {
      const errors = Object.values(data).join('\n');
      if (errors) alert(errors);
    });
  }
}

function* fetchSignIn(action: any) {
    const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/jwt/create/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(action.signInInfo)
    });
    if (response.status === 200 || response.status === 304) {
        const { refresh, access }: ITokensResponse = yield response.json();
        localStorage.setItem('access', access)
        localStorage.setItem('refresh', refresh)
        yield put(getUserInfo())
    }
}

function* fetchUserInfo() {
    const token: string = yield getToken();
    const response: Response = yield fetch('https://studapi.teachmeskills.by/auth/users/me/', {
        headers: {
            "Authorization": `Bearer ${token}`
        },
    });
    const data: IUserInfo = yield response.json();
    yield put(setUser(data))
    window.location.pathname = '/'
}

function* watcherUser() {
    yield takeEvery(ACTIVATION_REGISTRATION, fetchActivationRegistration)
    yield takeEvery(SIGN_UP, fetchSignUp)
    yield takeEvery(SIGN_IN, fetchSignIn)
    yield takeEvery(GET_USER_INFO, fetchUserInfo)
}

export {
    activateRegistration,
    setUser,
    signUp,
    signIn,
    watcherUser,
}
