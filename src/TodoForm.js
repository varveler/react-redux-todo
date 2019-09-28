import React from 'react';
import { TextField } from '@material-ui/core';
import * as actions from './redux/actions';
import { connect } from 'react-redux';

const TodoForm = ({value, updateValue, saveTodo}) => {
  return(
    <form onSubmit={(e) => {
        e.preventDefault();
        saveTodo()}}
        >
      <TextField
        label='nueva tarea'
        type='text'
        placeholder='pasear la tortuga'
        onChange = {(e) => updateValue(e.target.value)}
        value = {value}

      />
    </form>
  )
};

const mapStateToProps = ({todoReducer}) => {
  const { value } = todoReducer;
  return { value };
};

export default connect(mapStateToProps, actions)(TodoForm);
