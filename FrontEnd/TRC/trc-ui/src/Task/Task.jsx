import React, { Component } from "react";
import './Task.css';

class Task extends Component{    
    render(){
        return (
        <div className="Task-main">
            Task { Math.floor(Math.random() * 100) }
        </div>
        );
    }
}

export default Task;