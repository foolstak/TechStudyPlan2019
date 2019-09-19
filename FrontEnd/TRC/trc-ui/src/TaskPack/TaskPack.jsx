import React, { Component } from "react";
import './TaskPack.css';

class TaskPack extends Component{    
    render(){
        return (
        <div className="TaskPack-main">
           TaskPack { Math.floor(Math.random() * 100) }
        </div>
        );
    }
}

export default TaskPack;