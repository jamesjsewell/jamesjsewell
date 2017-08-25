import { combineReducers } from "redux"
import _ from "underscore"
import { createStructuredSelector } from "reselect"
// import Cookies from "universal-cookie"

// const cookies = new Cookies()

const SET_SCROLL_DISTANCE = "set_scroll_distance",
SET_NEXT_SCROLL_DISTANCE = "set_next_scroll_distance"

// actions

export function setScrollDistance(distance, sequence) {
	return function(dispatch) {
		if(sequence === "first"){
			dispatch({ type: SET_SCROLL_DISTANCE, payload: distance })
		}
		if(sequence === "next"){
			dispatch({ type: SET_NEXT_SCROLL_DISTANCE, payload: distance })
		}
		
	}
}



const init_carousel = { scrollDistance: 0 }


export default function headerCarouselReducer(state = init_carousel, action) {
	switch (action.type) {
		case SET_SCROLL_DISTANCE: {
			return _.extend({}, state, { scrollDistance: action.payload })
		}
		case SET_NEXT_SCROLL_DISTANCE: {
			return _.extend({}, state, { nextScrollDistance: action.payload })
		}
	}

	return state
}



// export default combineReducers({
// 	navLink: navLinkReducer,
// 	sidebar: sidebarReducer
// })

// selectors
const scrollDistance = state => state.headerCarousel.scrollDistance
const nextScrollDistance = state => state.headerCarousel.nextScrollDistance
export const selector = createStructuredSelector({
	scrollDistance,
	nextScrollDistance
})
