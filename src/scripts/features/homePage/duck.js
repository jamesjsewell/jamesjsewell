import { combineReducers } from "redux"
import _ from "underscore"
import { createStructuredSelector } from "reselect"
// import Cookies from "universal-cookie"

// const cookies = new Cookies()

const SET_SCROLL_DISTANCE = "set_scroll_distance"

// actions

export function setScrollDistance(distance) {
	return function(dispatch) {
		dispatch({ type: SET_SCROLL_DISTANCE, payload: -distance+"px" })
	}
}



const init_carousel = { scrollDistance: "0px" }


export default function headerCarouselReducer(state = init_carousel, action) {
	switch (action.type) {
		case SET_SCROLL_DISTANCE: {
			return _.extend({}, state, { scrollDistance: action.payload })
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

export const selector = createStructuredSelector({
	scrollDistance
})
