import { v4 as uuidv4 } from 'uuid';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';

export const addTodoItem = (dispatch, { name }) => {
    const id = uuidv4();
    localStorage.setItem(id, name);
    dispatch({ 
        type: ADD_ITEM,
        payload: { 
            item: { id, name },
        },
    });
};

export const removeTodoItem = (dispatch, { id }) => {
    localStorage.removeItem(id);
    dispatch({ 
        type: REMOVE_ITEM,
        payload: { 
            id,
        },
    });
};

export const updateTodoItem = (dispatch, { id, value }) => {
    localStorage.setItem(id, value);
    dispatch({ 
        type: UPDATE_ITEM,
        payload: { 
            id,
            name: value,
        },
    });
};