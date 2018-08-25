/* --------------------------------------------------------
* Author Ngô An Ninh
* Email ninh.uit@gmail.com
* Phone 0978108807
*
* Created: 2018-08-25 17:33:33
*------------------------------------------------------- */

import { INCREMENT_REQUESTED, INCREMENT, DECREMENT_REQUESTED, DECREMENT } from '../actions/counter';

const initialState = {
    count: 0,
    isIncrementing: false,
    isDecrementing: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT_REQUESTED:
            return {
                ...state,
                isIncrementing: true
            }

        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
                isIncrementing: !state.isIncrementing
            }

        case DECREMENT_REQUESTED:
            return {
                ...state,
                isDecrementing: true
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
                isDecrementing: !state.isDecrementing
            }

        default:
            return state
    }
}

