import React, { Component } from "react";
import './TaskPack.css';

class TaskPack extends Component{    

    constructor(props){
        super(props);
        this.onTaskPackClicked = this.onTaskPackClicked.bind(this);
    }

    onTaskPackClicked(){
        var taskSets = [...new Set(this.props.taskSets)].filter(x => Number(x));
        console.log("TaskPack " + this.props.number + " clicked");
        console.log("Associated tasksets: " + taskSets);
    }

    render(){
        
        return (
        <div className="TaskPack-main" onClick={ this.onTaskPackClicked }>
           TaskPack { this.props.number }
        </div>
        );
    }
}

export default TaskPack;