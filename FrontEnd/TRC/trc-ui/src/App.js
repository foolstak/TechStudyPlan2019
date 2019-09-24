import React from 'react';
import './App.css';
import TaskPackSection from './components/TaskPack/TaskPackSection';
import TaskSetSection from './components/TaskSet/TaskSetSection';
import TaskSection from './components/Task/TaskSection';
const tasks = [
  {taskid:'t1', taskName:'Run Console Application', parameters:[{parameterName: 'runCommand', parameterValue:'C://Dev/Rates/Apps/ConsoleRunner.exe'}]},
  {taskid:'t2', taskName:'Connect to Database', parameters:[{parameterName:'connectionString', parameterValue:'Server=myServerAddress;Database=myDataBase;'},
  {parameterName:'userName', parameterValue:'app_owner'}, 
  {parameterName:'password',parameterValue:'sa'}]},
  {taskid:'t3', taskName:'Run Database query'},
  {taskid:'t4', taskName:'Connect to AWS'},
  {taskid:'t5', taskName:'Connect to Server'},
  {taskid:'t6', taskName:'Post to Server'},
  {taskid:'t7', taskName:'Get from Server'},
  {taskid:'t8', taskName:'Write file'},
  {taskid:'t9', taskName:'Read file'},
  {taskid:'t10', taskName:'Connect via FTP'}
];

const taskSets = [{taskSetId: 'ts1', taskSetName: 'Run Application on Server', taskIdPriorityMap:[{taskId: 't1', priority: 2}, {taskid: 't5', priority: 1}]},
{taskSetId: 'ts2', taskSetName: 'Write file to AWS', taskIdPriorityMap:[{taskId: 't4', priority: 1}, {taskid: 't8', priority: 2}]}];

const taskPacks = [{taskPackId: 'tp1', taskPackName: 'Write To AWS', taskSetIdPriorityMap:[{taskSetId:'ts1', priority: 1}, {taskSetId:'ts2', priority:2}]}];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Runner Central</h1>
      </header>
      <div id="container" className="App-content">
        <TaskPackSection taskPacks={ taskPacks } taskSets= { taskSets } tasks = { tasks }/>
        <TaskSetSection taskSets={ taskSets }/>
        <TaskSection tasks={ tasks }/>
      </div>
      <footer className="App-footer">
        <p>This is a footer trial</p>
      </footer>
    </div>
  );
}

export default App;
