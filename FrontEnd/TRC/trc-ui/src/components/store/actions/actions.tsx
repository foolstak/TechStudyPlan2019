import { ADD_TASK,  ADD_TASKSET, ADD_TASKPACK} from './action-types';

export function addTaskPack(payload: any) {
  return { type: ADD_TASKPACK, payload }
};

export function addTask(payload: any) {
    return { type: ADD_TASK, payload }
  };

export function addTaskSet(payload: any) {
  console.log("Add taskset");
  console.log(payload);
    return { type: ADD_TASKSET, payload }
};



