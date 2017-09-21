import * as types from './../Actions/typeConstants';

export const taskReducer = (state=[], action) => {
    switch (action.type) {
        case types.LOAD_TODOS:
            return action.payload;
        case types.ADD_TODO:
           return [...state, action.payload ]
        default:
            return state;
    } 
}

