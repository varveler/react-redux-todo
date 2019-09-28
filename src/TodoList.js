import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import * as actions from './redux/actions';
import { connect } from 'react-redux';

const TodoList = ({todos, deleteTodo, toggleCompleted}) => {
  return(
    <List>
      {
        todos.map((item, index) => {
        return(
          <ListItem button key={index} onClick={ () => toggleCompleted(index) }>
            <Checkbox color='primary' checked={item.completed}/>
            <ListItemText primary={item.value} />
            <ListItemSecondaryAction>
              <IconButton onClick={ () => deleteTodo(index) }>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        )
      })
      }
      </List>
  )
}

const mapStateToProps = ({todoReducer}) => {
  const {todos} = todoReducer;
  return {todos};
}

export default connect(mapStateToProps, actions)(TodoList);
