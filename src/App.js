import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import TodoForm from './TodoForm';
//import TodoList from './TodoList';

function App() {
  return (
    <React.Fragment>
      <Typography variant='h2' align='center' gutterBottom>
        To-Do List
      </Typography>
      <Grid container justify='center'>
        <Grid item>
          <TodoForm />
        </Grid>
      </Grid>
      <Grid container justify='center'>
        <Grid item md={6}>
          {/*<TodoList
          todos={this.state.todos}
          toggledCompleted={this.toggledCompleted}
          deleteTodo={this.deleteTodo} />
        */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
