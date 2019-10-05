import ADD_TASK from './action-types';
import ADD_TASKSET from './action-types';
import ADD_TASKPACK from './action-types';

export function addTaskPack(payload) {
  return { type: ADD_TASKPACK, payload }
};

export function addTask(payload) {
    return { type: ADD_TASK, payload }
  };

export function addTaskSet(payload) {
    return { type: ADD_TASKSET, payload }
};



