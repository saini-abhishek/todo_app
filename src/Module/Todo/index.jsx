import React from "react";

import TodoHeader from './TodoHeader';
import TodoListContainer from './TodoListContainer';
import Typography from '@material-ui/core/Typography';

const styles = {
    main: {
        width: "100%",
        maxWidth: "400px",
        margin: "20px auto",
    },
};

const Todo = () => {
    return (
      <div id="main" style={styles.main}>
        <header>
            <Typography variant="h4" component="h2" gutterBottom>
                My Todo Application
            </Typography>
        </header>
        <TodoHeader />
        <TodoListContainer />
      </div>
    );
}

export default Todo;
