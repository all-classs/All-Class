import { persistReducer } from "redux-persist"; // 추가
import storage from "redux-persist/lib/storage";

// state , useState
// selector , dispatch

const persistConfig = {
  key: "root",
  storage,
};

const initialState = {
  token: false,
};

const rootReducer = (state = initialState, action) => {
  let temp = { ...state };
  switch (action.type) {
    case "SET_TOKEN":
      temp.token = action.payload;
      return temp;
    case "CLEAR_TOKEN":
      temp.token = false;
      return temp;
    default:
      return state;
  }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
