import React, { Component } from "react";
import TaskPack from './TaskPack';
import './TaskPackSection.css';

class TaskPackButton extends Component{
    render() {
        return (
            <div className="button-common">
                <button className="TaskPack-row"><TaskPack /></button>
            </div>
        );
    }
}

export default TaskPackButton;