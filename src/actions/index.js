import * as types from "../constants";

export const fetchData = payload => {
  return {
    type: types.FETCH_DATA,
    payload,
  };
};
