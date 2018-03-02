import { FETCH_PEOPLE } from './types';
import axios from 'axios';

const API_URL = "https://swapi.co/api";

export const fetchPeople = searchTerm => async dispatch => {
  if (searchTerm) {
    const result = await axios.get(`${API_URL}/people/?search=${searchTerm}`);
    dispatch({
      type: FETCH_PEOPLE,
      payload: result.data.results
    });
  } else {
    dispatch({
      type: FETCH_PEOPLE,
      payload: {}
    });
  }
}
