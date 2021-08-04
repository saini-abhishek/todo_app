import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import Divider from "@material-ui/core/Divider";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from '@material-ui/icons/Save';
import IconButton from '@material-ui/core/IconButton';

import BaseIconButton from "../../Components/Buttons/BaseIconButton";
import BaseTextField from "../../Components/Fields/BaseTextField";
import { removeTodoItem, updateTodoItem } from "../../Actions/todoAction";

const styles = {
    todo: {
        position: "relative",
        display: "flex",
        flexFow: "row",
        alignItems: 'center',
        justifyContent: "space-between"
    },
    divider: {
        position: "absolute",
        width: "100%",
        top: 0
    },
    inputField: {
        '& .MuiInput-underline:before': {
            borderBottom: '0 !important',
        },
        '& .MuiInput-underline:after': {
            borderBottom: '0 !important',
        },
    },
};

const TodoItem = ({ task = {} }) => {
    const { name: taskName, id } = task;
    const [value, setValue] = useState(taskName); 
    const [isEdit, setIsEdit] = useState(false);

    const dispatch = useDispatch();

    const removeTodo = useCallback(() => removeTodoItem(dispatch, { id }), [id, dispatch]);
    
    const updateTodo = useCallback(() => {
        if (value) {
            updateTodoItem(dispatch, { id, value });
        }
        setIsEdit(false);
    }, [id, value, dispatch]);

    const onInputValueChange = useCallback(event => setValue(event.currentTarget.value), []);
    
    return (
        <div key={id} style={styles.todo}>
            {<Divider style={styles.divider} />}
            { 
                !isEdit ? taskName :    
                  <BaseTextField
                      style={styles.inputField}
                      variant="standard"
                      value={value}
                      onChange={onInputValueChange}
                      InputLabelProps={{shrink: false}}
                      onBlur={updateTodo}
                      autoFocus
                      InputProps={{
                        endAdornment: (
                            <IconButton
                                disabled={!value}
                            >
                                <SaveIcon />
                            </IconButton>
                        ),
                      }}
                  />
            }
            <div>
                {
                    !isEdit && 
                    <BaseIconButton
                        onClick={() => setIsEdit(true)}
                        aria-label="edit"
                        toolTipTerm="edit task"
                    >
                        <EditIcon />
                    </BaseIconButton>
                }
                <BaseIconButton
                    onClick={removeTodo}
                    aria-label="delete"
                    toolTipTerm="delete task"
                    isDisabled={isEdit}
                >
                    <DeleteIcon />
                </BaseIconButton>
            </div>
        </div>
      )
};

TodoItem.propTypes = {
    task: PropTypes.objectOf(PropTypes.any),
}

export default TodoItem;
