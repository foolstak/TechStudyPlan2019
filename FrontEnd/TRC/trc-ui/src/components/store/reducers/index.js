import ADD_TASK  from '../actions/action-types';
import ADD_TASKSET  from '../actions/action-types';
import ADD_TASKPACK  from '../actions/action-types';

const tasks = [
    {taskId:'t1', taskName:'Run Console Application', parameters:[{parameterName: 'runCommand', parameterValue:'C://Dev/Rates/Apps/ConsoleRunner.exe'}]},
    {taskId:'t2', taskName:'Connect to Database', parameters:[{parameterName:'connectionString', parameterValue:'Server=myServerAddress;Database=myDataBase;'},
    {parameterName:'userName', parameterValue:'app_owner'}, 
    {parameterName:'password',parameterValue:'sa'}]},
    {taskId:'t3', taskName:'Run Database query'},
    {taskId:'t4', taskName:'Connect to AWS'},
    {taskId:'t5', taskName:'Connect to Server'},
    {taskId:'t6', taskName:'Post to Server'},
    {taskId:'t7', taskName:'Get from Server'},
    {taskId:'t8', taskName:'Write file'},
    {taskId:'t9', taskName:'Read file'},
    {taskId:'t10', taskName:'Connect via FTP'}
  ];
  
  const taskSets = [{taskSetId: 'ts1', taskSetName: 'Run Application on Server', taskIdPriorityMap:[{taskId: 't1', priority: 2}, {taskId: 't5', priority: 1}]},
  {taskSetId: 'ts2', taskSetName: 'Write file to AWS', taskIdPriorityMap:[{taskId: 't4', priority: 1}, {taskId: 't8', priority: 2}]}];
  
  const taskPacks = [{taskPackId: 'tp1', taskPackName: 'Write To AWS', 
  taskSetIdPriorityMap:[{taskSetId:'ts1', priority: 1}, {taskSetId:'ts2', priority:2}]},
  {taskPackId: 'tp2', taskPackName: 'Write To Server', 
  taskSetIdPriorityMap:[{taskSetId:'ts1', priority: 1}, {taskSetId:'ts2', priority:2}]}];
  
const initialState = {
    taskPacks: taskPacks,
    taskSets: taskSets,      
    tasks: tasks
  };

  function rootReducer(state = initialState, action) {
      if(action.type === ADD_TASK){
        return Object.assign({}, state, {
            tasks: state.tasks.concat(action.payload)
          });
      }
      if(action.type === ADD_TASKSET){
        return Object.assign({}, state, {
          taskSets: state.taskSets.concat(action.payload)
        });
      }
      if(action.type === ADD_TASKPACK){
        return Object.assign({}, state, {
          taskPacks: state.taskPacks.concat(action.payload)
        });
      }
    return state;
  };
  
  export default rootReducer;