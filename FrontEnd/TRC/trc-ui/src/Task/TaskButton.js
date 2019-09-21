import React, { Component } from "react";
import './TaskSection.css';
import Task from './Task';

class TaskButton extends Component{
    render() {
        return (
            <div className="button-common">
                <button className="Task-row"><Task /></button>
                <br></br>
            </div>
        );
    }
}

export default TaskButton;