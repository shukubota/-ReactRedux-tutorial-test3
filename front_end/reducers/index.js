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

export default function rootReducer(state = initialState, action) {
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
