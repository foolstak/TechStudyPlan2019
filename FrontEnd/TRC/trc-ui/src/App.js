import React from 'react';
import './App.css';
import TaskPackSection from './components/TaskPack/TaskPackSection';
import TaskSetSection from './components/TaskSet/TaskSetSection';
import TaskSection from './components/Task/TaskSection';

function App() {
  var noOfTaskPacks = 0;
  var noOfTaskSets = 0;
  var noOfTasks = 0;
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
