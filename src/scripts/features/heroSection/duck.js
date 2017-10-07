import { combineReducers } from "redux"
import _ from "underscore"
import { createStructuredSelector } from "reselect"
// import Cookies from "universal-cookie"

// const cookies = new Cookies()


// actions




const init = { empty: 0 }


export default function heroReducer(state = init, action) {
	switch (action.type) {
		case "_": {
			return _.extend({}, state, { newerStacksDistance: action.payload })
		}
	
	}

	return state
}




// selectors
const empty = state => state.hero.empty
export const selector = createStructuredSelector({
	empty
})
