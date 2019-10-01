import React from 'react';
import './App.css';
import TaskPack from './components/TaskPack/TaskPack';
import TaskSet from './components/TaskSet/TaskSet';
import Task from './components/Task/Task';
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

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      taskPacks: taskPacks,
      taskSets: taskSets,      
      tasks: tasks,
      selectedTaskPacks: [],
      selectedTaskSets: [],
      selectedTasks: [],
    }
    this.onTaskPackClicked = this.onTaskPackClicked.bind(this);
    this.onTaskSetClicked = this.onTaskSetClicked.bind(this);
    this.onTaskClicked = this.onTaskClicked.bind(this);
  }

  onTaskPackClicked(taskPackId){
    this.setState({
      taskPacks: taskPacks,
      taskSets: taskSets,
      tasks: tasks,
      selectedTaskPacks: [],
      selectedTaskSets:[],
      selectedTasks: []
    });
      console.log("TaskPack clicked:" + taskPackId);
      this.setState({ selectedTaskSets : []});
      let selectedTaskPack = this.state.taskPacks.find(taskPack => taskPack.taskPackId === taskPackId);
      console.log(selectedTaskPack);
      let newTaskSetIds = [];
      selectedTaskPack.taskSetIdPriorityMap.forEach(mapEntry => {
        newTaskSetIds.push(mapEntry.taskSetId);
      });

      const newTaskSets = taskSets.filter(taskSet => newTaskSetIds.includes(taskSet.taskSetId));
      this.setState({taskSets: newTaskSets});
      console.log(newTaskSets);
      let newTaskIds = [];
      newTaskSets.forEach(taskSetEntry => {
        taskSetEntry.taskIdPriorityMap.forEach(mapEntry => {
          console.log(mapEntry.taskId)
          newTaskIds.push(mapEntry.taskId)})
        });
      // newTaskIds = newTaskIds.filter((v, i, a) => a.indexOf(v) === i); 
      const newTasks = tasks.filter(task => newTaskIds.includes(task.taskId));
      console.log(newTasks);

      this.setState({
        taskSets: newTaskSets,
        tasks: newTasks
      });
  }

  onTaskClicked(taskId){

  }

  onTaskSetClicked(taskSetId){

  }

  render(){
    this.state.taskPacks.forEach(taskPack => {
        this.state.selectedTaskPacks.push(
        <TaskPack key={ taskPack.taskPackId } 
          taskPackId = { taskPack.taskPackId } 
          taskPackName={ taskPack.taskPackName } 
          taskSetIdPriorityMap={ taskPack.taskSetIdPriorityMap } 
          taskSets = { this.state.taskSets }
          onTaskPackClicked = { this.onTaskPackClicked }/>);
    });

    this.state.taskSets.forEach(taskSet => {
        this.state.selectedTaskSets.push(<TaskSet key={ taskSet.taskSetId }
        taskSetId = { taskSet.taskSetId }
        taskSetName = { taskSet.taskSetName }
        taskIdPriorityMap = { taskSet.taskIdPriorityMap } 
        onTaskSetClicked = { this.onTaskSetClicked }/>);
    });

    this.state.tasks.forEach(task => {
        this.state.selectedTasks.push(<Task key={ task.taskId } 
        taskId={ task.taskId }
        taskName = { task.taskName }
        onTaskClicked = {this.onTaskClicked }/>);
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1>Task Runner Central</h1>
        </header>
        <div id="container" className="App-content">
          <div  className="TaskPackSection-main">
            <h3>TaskPacks</h3>
            <div className="TaskPackSection-taskPackList">
              { this.state.selectedTaskPacks.length > 0 ? this.state.selectedTaskPacks : <p>There are no TaskPacks defined. Define some to  see them below</p> }
            </div>
          </div>  
          <div className="TaskSetSection-main">
            <h3>TaskSets</h3>
            <div className="TaskSetSection-taskSetList">
               { this.state.selectedTaskSets.length > 0 ? this.state.selectedTaskSets : <p>There are no TaskSets. Define some to see them below</p> }
            </div>
          </div>
          <div className="TaskSection-main">
                <h3>Tasks</h3>
                    <div className="TaskSection-taskList">
                    { this.state.selectedTasks.length > 0 ? this.state.selectedTasks : <p>There are no tasks defined. Define some to see them below</p> }
                </div>
            </div>
        </div>
        <footer className="App-footer">
          <p>This is a footer trial</p>
        </footer>
      </div>
    );
  }
  
}

export default App;
