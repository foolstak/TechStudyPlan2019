import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskPackSection from './TaskPack/TaskPackSection';
import TaskSetSection from './TaskSet/TaskSetSection';
import TaskSection from './Task/TaskSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Task Runner Central</h1>
      </header>
      <div id="container" className="App-content">
        <TaskPackSection />
        <TaskSetSection />
        <TaskSection />
      </div>
      <footer className="App-footer">
        <p>This is a footer trial</p>
      </footer>
    </div>
  );
}

export default App;
