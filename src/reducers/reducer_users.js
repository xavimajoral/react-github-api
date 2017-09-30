import { FETCH_USERS } from "../constants";

const initialState = {
  loadingUsers: false,
  users: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return state;
    case 'FETCH_USERS_PENDING':
      return {
        ...state,
        loadingUsers: true
      };
    case 'FETCH_USERS_FULFILLED':
      return {
        ...state,
        users: action.payload.data,
        loadingUsers: false
      };
    case 'FETCH_USERS_REJECTED':
      alert('There is an error with Github API');
      return {
        ...state,
        loadingUsers: false
      };
    default:
      return state;
  }
}