import { combineReducers } from "redux";

import loginReducer from "../container/LoginContainer/reducer";
import homeReducer from "../container/HomeContainer/reducer";
import profileReducer from "../container/ProfileContainer/reducer";
import discoverReducer from "../container/DiscoverContainer/reducer";

export default combineReducers({
  homeReducer,
  loginReducer,
  profileReducer,
  discoverReducer
});
