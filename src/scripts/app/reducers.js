import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import nav from "../features/navbar/duck";
import util from "../util/index.js";

const rootReducer = combineReducers({ nav, util, form: formReducer });

export default rootReducer;
