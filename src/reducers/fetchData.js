import * as types from "../constants";

export const fetchData = (state = { searched: false }, action) => {
  switch (action.type) {
    case types.FETCH_DATA:
      console.log("FETCHDATA REDUCER", action.payload.data.results);
      return [{ searched: true }, action.payload.data.results];
    default:
      return state;
  }
};
