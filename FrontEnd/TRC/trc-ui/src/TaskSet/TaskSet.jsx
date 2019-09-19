import React, { Component } from "react";
import './TaskSet.css';

class TaskSet extends Component{    
    render(){
        return (
        <div className="TaskSet-main">
            TaskSet { Math.floor(Math.random() * 100) }
        </div>
        );
    }
}

export default TaskSet;