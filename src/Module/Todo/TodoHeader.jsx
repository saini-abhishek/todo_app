import React, { useCallback, useState } from "react";
import { useDispatch } from 'react-redux';

import BaseTextField from "../../Components/Fields/BaseTextField";
import BaseButton from "../../Components/Buttons/BaseButton";
import { addTodoItem } from "../../Actions/todoAction";

const styles = {
    header: {
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    inputField: {
        width: '300px', 
    },
    addBtn: {
        height: '56px',
        width: '84px', 

    },
};

const TodoHeader = () => {
    const [inputValue, setInputValue ] = useState('');
    const dispatch = useDispatch();
    
    const onAddBtnClick = useCallback(() => {
        if (inputValue && inputValue.trim()) {
            addTodoItem(dispatch, { name: inputValue.trim() });
        }
        setInputValue('');
    }, [inputValue, dispatch]);

    const onInputValueChange = useCallback((event) => {
        setInputValue(event.currentTarget.value);
    }, []);

    const onKeyUp = useCallback((event) => {
        if (event && event.keyCode === 13 && inputValue && inputValue.trim()) {
            onAddBtnClick()
        }
    }, [onAddBtnClick, inputValue]);

    return (
        <header style={styles.header}>
            <BaseTextField
                style={styles.inputField}
                variant="outlined"
                label="Add new task"
                value={inputValue}
                onKeyUp={onKeyUp}
                onChange={onInputValueChange}
            />
            <BaseButton
                style={styles.addBtn}
                variant="contained"
                color="primary"
                isDisabled={!inputValue}
                onClick={onAddBtnClick}
                term="Add"
            />
        </header>
    );
}

export default TodoHeader;
