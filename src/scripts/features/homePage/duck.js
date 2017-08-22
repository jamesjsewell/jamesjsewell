import { combineReducers } from "redux"
import _ from "underscore"
import { createStructuredSelector } from "reselect"
// import Cookies from "universal-cookie"

// const cookies = new Cookies()



// // reducers
// const init_nav = {
// 	activeNavTab: "",
// 	routes: {
// 		homePath: "home",
// 		loginPath: "login",
// 		logoutPath: "logout",
// 		profilePath: "profile"
// 	}
// }

// function navLinkReducer(state = init_nav, action) {
// 	switch (action.type) {
// 		case SET_ACTIVE_NAV_LINK: {
// 			return _.extend({}, state, { activeNavTab: action.payload })
// 		}
// 	}

// 	return state
// }

// const init_sidebar = { sidebarVisible: false }

// function sidebarReducer(state = init_sidebar, action) {
// 	switch (action.type) {
// 		case SHOW_HIDE_SIDEBAR: {
// 			return _.extend({}, state, { sidebarVisible: action.payload })
// 		}
// 	}

// 	return state
// }

// export default combineReducers({
// 	navLink: navLinkReducer,
// 	sidebar: sidebarReducer
// })

// selectors
const nothing = state => 'lol'

export const selector = createStructuredSelector({
	nothing
})
