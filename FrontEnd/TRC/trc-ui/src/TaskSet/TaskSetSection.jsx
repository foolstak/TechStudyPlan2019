import React, { Component } from "react";
import './TaskSetSection.css';
import TaskSet from './TaskSet';

class TaskSetSection extends Component{
    render(){
        return <div className="TaskSetSection-main">
            <h3>TaskSets</h3>
            <button className="TaskSet-row"><TaskSet /></button>
            <br></br>
            <button className="TaskSet-row"><TaskSet /></button>
            <br></br>
            <button className="TaskSet-row"><TaskSet /></button>
            <br></br>
            <button className="TaskSet-row"><TaskSet /></button>
            <br></br>
            <button className="TaskSet-row"><TaskSet /></button>
            <br></br>
            <button className="TaskSet-row"><TaskSet /></button>
            <br></br>
            </div>;
    }
}
export default TaskSetSection;