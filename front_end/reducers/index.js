import { combineReducers } from 'redux';

const initialState = {
  count: 0,
  history: [],
};

function fetchUserReducers(state = {}, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        user: action.payload.user,
      };
    case 'REQUEST_FETCH_USER':
      return {
        ...state,
      };
    default:
      return state;
  }
}


const rootReducers = combineReducers({
  fetchUserReducers,
});

export default rootReducers;
