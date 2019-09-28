import {UPDATE_VALUE, SAVE_TODO, TOGGLE_COMPLETED, DELETE_TODO} from './actionTypes';

export const updateValue = (value) => {
  return {
    type: UPDATE_VALUE,
    payload: value
  };
};

export const saveTodo = () => {
  return {
    type: SAVE_TODO,
    payload: undefined
  };
};

export const toggleCompleted = index => {
  return {
    type: TOGGLE_COMPLETED,
    payload: index
  };
};
export const deleteTodo = index => {
  return {
    type: DELETE_TODO,
    payload: index
  };
};
