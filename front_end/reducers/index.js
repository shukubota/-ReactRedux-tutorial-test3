import { combineReducers } from 'redux';

const initialState = {
  user: {
    email: '',
    password: '',
  },
  history: [],
  count: '',
  task: '',
  tasks: [],
};

function countReducers(state = initialState, action) {
  switch (action.type) {
    case 'INPUT_TASK':
      return {
        ...state,
        task: action,
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task]),
      };
    default:
      return state;
  }
}

function userReducers(state = initialState, action) {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
      };
    default:
      return state;
  }
}

const rootReducers = combineReducers({
  countReducers,
  userReducers,
});

export default rootReducers;
