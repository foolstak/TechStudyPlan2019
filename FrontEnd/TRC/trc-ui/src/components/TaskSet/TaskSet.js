import React, { Component } from "react";
import './TaskSet.css';

class TaskSet extends Component{    
    constructor(props){
        super(props);
        this.onTaskSetClicked = this.onTaskSetClicked.bind(this);
    }

    onTaskSetClicked(){
        var taskSets = [...new Set(this.props.tasks)][0];
        console.log(taskSets);
        console.log("TaskSet " + this.props.number + " clicked");
        console.log("Associated Tasks: " + taskSets);
    }

    render(){
        return (
        <div className="TaskSet-main" onClick={ this.onTaskSetClicked }>
            TaskSet { this.props.taskSetName }
        </div>
        );
    }
}

export default TaskSet;