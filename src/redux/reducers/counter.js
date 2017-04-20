import {
    INCREMENT,
    DECREMENT,
    SET
} from '../actions/counter';

const initialState = {
    count : 0
}

export function counter (state = initialState, action){
    switch( action.type ){
        case INCREMENT:
            return {
                ...state,
                count : state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        case SET:
            return {
                ...state,
                count : action.count
            }
    }
}