import { createStore, applyMiddleware } from "redux";
import rootReducer from "../Reducer";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

store.subscribe(() => {
  console.log(store.getState());
});
