import { combineReducers } from "redux"
import _ from "underscore"
import { createStructuredSelector } from "reselect"


// actions



const init = { empty: null }

export default function footerReducer(state = init, action) {
	switch (action.type) {
		case "": {
			return _.extend({}, state, {})
		}
	}

	return state
}

// selectors
const empty = state => state.nav.navLink.activeNavTab


export const selector = createStructuredSelector({
	empty
})
