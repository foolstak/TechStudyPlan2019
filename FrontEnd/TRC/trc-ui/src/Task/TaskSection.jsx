import React, { Component } from "react";
import './TaskSection.css';
import Task from './Task';

class TaskSection extends Component{
    render(){
        return <div className="TaskSection-main">
            <h3>Tasks</h3>
            <button className="Task-row"><Task /></button>
            <br></br>
            <button className="Task-row"><Task /></button>
            <br></br>
            <button className="Task-row"><Task /></button>
            <br></br>
            <button className="Task-row"><Task /></button>
            <br></br>
            <button className="Task-row"><Task /></button>
            <br></br>
            <button className="Task-row"><Task /></button>
            <br></br>
            <button className="Task-row"><Task /></button>
            <br></br>
            <button className="Task-row"><Task /></button>
            <br></br>
            <button className="Task-row"><Task /></button>
            <br></br>
            <button className="Task-row"><Task /></button>
            <br></br>
            </div>;
    }
}
export default TaskSection;