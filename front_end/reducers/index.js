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

function getTime() {
  const Time = new Date();
  return `${Time.getHours()}時${Time.getMinutes()}分`;
}

function handleCount(state = initialState, action) {
  switch (action.type) {
    case 'ADD': {
      const thisHistory = ['ADD', getTime()];
      return {
        ...state,
        count: action.payload.count + 1,
        history: [action.payload.history, thisHistory],
      };
    }
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  fetchUserReducers,
  handleCount,
});

export default rootReducers;
