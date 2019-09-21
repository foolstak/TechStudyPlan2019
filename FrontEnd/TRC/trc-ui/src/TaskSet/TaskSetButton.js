import React, { Component } from 'react';
import './TaskSetSection.css';
import TaskSet from './TaskSet';

class TaskSetButton extends Component{
    render(){
        return (
            <div className="button-common">
                <button className="TaskSet-row"><TaskSet /></button>
                <br></br>
            </div>
        );
    }
}

export default TaskSetButton;