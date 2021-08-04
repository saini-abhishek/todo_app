import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM } from "../Actions/todoAction";

const initialState = Object.keys(localStorage).map(id => ({
    id,
    name: localStorage.getItem(id),
}));

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [ ...state, action.payload.item];
        case REMOVE_ITEM:
            return [ ...state.filter(({ id }) => !(id === action.payload.id))];
        case UPDATE_ITEM:
            return [ ...state.map(({ id, name }) => ({
                id,
                name: id === action.payload.id ? action.payload.name : name,
            }))];
        default:
          return state;
    }
}

export default todoReducer;
