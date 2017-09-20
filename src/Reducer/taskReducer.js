export const taskReducer = (state=[], action) => {
    switch (action.type) {
        case 'LOAD_TODOS':
            return action.payload;
        case 'ADD_TODO':
           return [...state, action.payload ]
        default:
            return state;
    } 
}

