export const SET_TOKEN = "SET_TOKEN";
export const CLEAR_TOKEN = "CLEAR_TOKEN";

const initialState = {
  token: false,
  nickname: "",
  username: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload.token,
        nickname: action.payload.nickname,
        username: action.payload.username,
      };
    case "CLEAR_TOKEN":
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
