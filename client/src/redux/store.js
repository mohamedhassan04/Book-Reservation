import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { alertsReducer } from "./reducers/alertsReducer";
import { booksReducer } from "./reducers/booksReducer";

const composeEnhancers = composeWithDevTools({});
const rootReducer = combineReducers({
  booksReducer,
  alertsReducer,
});
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
