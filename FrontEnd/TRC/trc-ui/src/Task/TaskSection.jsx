import React, { Component } from "react";
import './TaskSection.css';
import Task from './Task';

class TaskSection extends Component{
    render(){
        return <div className="TaskSection-main">
            <h3>Tasks</h3>
            <a href="#" className="Task-row"><Task /></a>
            <br></br>
            <a href="#" className="Task-row"><Task /></a>
            <br></br>
            <a href="#" className="Task-row"><Task /></a>
            <br></br>
            <a href="#" className="Task-row"><Task /></a>
            <br></br>
            <a href="#" className="Task-row"><Task /></a>
            <br></br>
            <a href="#" className="Task-row"><Task /></a>
            <br></br>
            <a href="#" className="Task-row"><Task /></a>
            <br></br>
            <a href="#" className="Task-row"><Task /></a>
            <br></br>
            <a href="#" className="Task-row"><Task /></a>
            <br></br>
            <a href="#" className="Task-row"><Task /></a>
            <br></br>
            </div>;
    }
}
export default TaskSection;