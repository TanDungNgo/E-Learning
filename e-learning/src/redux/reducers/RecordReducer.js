import { GET_ALL_RECORDS, GET_ALL_USER_RECORDS } from "../types/RecordTypes";

const stateDefault = {
  recordsDefault: [],
  userRecords: [],
};

export const RecordReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_ALL_RECORDS:
      state.recordsDefault = action.value;
      return { ...state };

    case GET_ALL_USER_RECORDS:
      state.userRecords = action.value;
      return { ...state };
    default:
      return { ...state };
  }
};
