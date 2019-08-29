import {TOGGLE_DRAWER, CLOSE_DRAWER} from '../actions'

const initialState = {
    drawerOpen: false,
}

const site = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DRAWER:
            return {
                ...state,
                drawerOpen: !state.drawerOpen
            }
        case CLOSE_DRAWER:
            return {
                ...state,
                drawerOpen: false
            }
        default:
            return state
    }
}

export default site
