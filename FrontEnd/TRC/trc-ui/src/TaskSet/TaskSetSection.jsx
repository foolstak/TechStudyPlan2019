import React, { Component } from "react";
import './TaskSetSection.css';
import TaskSet from './TaskSet';

class TaskSetSection extends Component{
    render(){
        return <div className="TaskSetSection-main">
            <h3>TaskSets</h3>
            <a href="#" className="TaskSet-row"><TaskSet /></a>
            <br></br>
            <a href="#" className="TaskSet-row"><TaskSet /></a>
            <br></br>
            <a href="#" className="TaskSet-row"><TaskSet /></a>
            <br></br>
            <a href="#" className="TaskSet-row"><TaskSet /></a>
            <br></br>
            <a href="#" className="TaskSet-row"><TaskSet /></a>
            <br></br>
            <a href="#" className="TaskSet-row"><TaskSet /></a>
            <br></br>
            </div>;
    }
}
export default TaskSetSection;