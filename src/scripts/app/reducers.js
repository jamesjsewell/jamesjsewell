import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import nav from "../features/navbar/duck.js";
import util from "../util/index.js";
import headerCarouselReducer from "../features/homePage/duck.js"

const rootReducer = combineReducers({ nav, util, headerCarousel: headerCarouselReducer, form: formReducer });

export default rootReducer;
