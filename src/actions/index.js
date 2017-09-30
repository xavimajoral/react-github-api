import axios from 'axios';
import { FETCH_USERS } from "../constants";

const ROOT_URL = 'https://api.github.com/users';
const PARAMETER = '?since=135';

export function fetchUsers() {

  const request = axios.get(`${ROOT_URL}${PARAMETER}`);

  return {
    type: FETCH_USERS,
    payload: request
  };
}