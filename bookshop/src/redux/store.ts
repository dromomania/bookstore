import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import { userReducer, cardsReducer, cartReducer } from './reducers'; //  uiReducer, postsReducer,
import { watcherUser } from './action-creators/user-action-creators';
import { watcherPost } from './action-creators';
//import { watcherCart } from './action-creators';

const sagaMiddleware = createSagaMiddleware();
function* rootSaga(){
  yield all([
    watcherPost(),
    watcherUser(),
    //watcherCart(),
  ])
}

const loadState = () => {
  try {
      const serialisedState = window.localStorage.getItem('prevState');

      if (!serialisedState) return undefined;

      // De-serialise the saved state, and return it.
      return JSON.parse(serialisedState);
  } catch (err) {
      // Return undefined if localStorage is not available,
      // or data could not be de-serialised,
      // or there was some other error
      return undefined;
  }
};

const oldState = loadState();

const store = createStore(combineReducers({
  cart: cartReducer,
  cards: cardsReducer,
  user: userReducer,
}), oldState, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const handleTrack = () => {
  const state = store.getState();
  localStorage.setItem('prevState', JSON.stringify(state))
}

store.subscribe(handleTrack)

export { store };
