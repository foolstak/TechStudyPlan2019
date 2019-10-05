import ADD_TASK from './action-types';

export function addTask(payload) {
    return { type: ADD_TASK, payload }
  };