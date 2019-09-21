import React from 'react';
import './App.css';
import TaskPackSection from './TaskPack/TaskPackSection';
import TaskSetSection from './TaskSet/TaskSetSection';
import TaskSection from './Task/TaskSection';

function App() {
  var noOfTaskPacks = 3;
  var noOfTaskSets = 5;
  var noOfTasks = 10;
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Runner Central</h1>
      </header>
      <div id="container" className="App-content">
        <TaskPackSection noOfTaskPacks={ noOfTaskPacks }/>
        <TaskSetSection noOfTaskSets={ noOfTaskSets }/>
        <TaskSection noOfTasks={ noOfTasks }/>
      </div>
      <footer className="App-footer">
        <p>This is a footer trial</p>
      </footer>
    </div>
  );
}

export default App;
