import { combineReducers } from 'redux';

const initialState = {
  count: 0,
  countHistory: [],
  isAddButton: true,
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
      const thisHistory = `${getTime()}足したにゃ`;
      return {
        ...state,
        count: action.payload.count + 1,
        countHistory: action.payload.countHistory.concat([thisHistory]),
      };
    }
    case 'REDUCE': {
      const thisHistory = `${getTime()}引いたにゃ`;
      return {
        ...state,
        count: action.payload.count - 1,
        countHistory: action.payload.countHistory.concat([thisHistory]),
      };
    }
    default:
      return state;
  }
}

function toggleButton(state = initialState, action) {
  switch (action.type) {
    case 'TOGGLE': {
      return {
        ...state,
        isAddButton: !action.payload.isAddButton,
      };
    }
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  fetchUserReducers,
  handleCount,
  toggleButton,
});

export default rootReducers;
