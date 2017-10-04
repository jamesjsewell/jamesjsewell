import { combineReducers } from "redux"
import _ from "underscore"
import { createStructuredSelector } from "reselect"
// import Cookies from "universal-cookie"

// const cookies = new Cookies()

const SET_NEW_STACKS_DISTANCE = "set_new_stacks_distance",
SET_PREVIOUS_STACKS_DISTANCE = "set_previous_stacks_distance"

// actions

export function setScrollDistance(distance, sequence) {
	return function(dispatch) {
		if(sequence === "new"){
			dispatch({ type: SET_NEW_STACKS_DISTANCE, payload: distance })
		}
		if(sequence === "previous"){
			dispatch({ type: SET_PREVIOUS_STACKS_DISTANCE, payload: distance })
		}
		
	}
}



const init_carousel = { newerStacksDistance: 0 }


export default function headerCarouselReducer(state = init_carousel, action) {
	switch (action.type) {
		case SET_NEW_STACKS_DISTANCE: {
			return _.extend({}, state, { newerStacksDistance: action.payload })
		}
		case SET_PREVIOUS_STACKS_DISTANCE: {
			return _.extend({}, state, { previousStacksDistance: action.payload })
		}
	}

	return state
}



// export default combineReducers({
// 	navLink: navLinkReducer,
// 	sidebar: sidebarReducer
// })

// selectors
const newerStacksDistance = state => state.headerCarousel.newerStacksDistance
const previousStacksDistance = state => state.headerCarousel.previousStacksDistance
export const selector = createStructuredSelector({
	newerStacksDistance,
	previousStacksDistance
})
