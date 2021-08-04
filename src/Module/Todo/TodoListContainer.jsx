import React from "react";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import { useSelector } from "react-redux";

import TodoItem from "./TodoItem";

const styles = {
    card: {
      padding: "20px",
      margin: "20px 0"
    },
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
};

const EmptyStateMsg = 'Great Job! your todo list is empty. Try to add some new task';
const containerHeading = 'Tasks you need to do';

const TodoListContainer = () => {
    const { todoList } = useSelector(({ todo }) => ({ todoList: todo }));

    return (
    <Card style={styles.card}>
        {!!todoList.length ?
            <FormGroup>
                <Typography variant="h5" gutterBottom>
                    {containerHeading}
                </Typography>
                <Divider />
                {todoList.map((task) => (
                    <TodoItem
                        key={task.id}
                        task={task}
                    />
                ))}
            </FormGroup>
            :
            EmptyStateMsg
        }
    </Card>
)};

export default TodoListContainer;
