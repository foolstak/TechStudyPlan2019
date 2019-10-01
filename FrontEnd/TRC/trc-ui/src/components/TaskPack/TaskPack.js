import React, { Component } from "react";
import './TaskPack.css';



class TaskPack extends Component{    

    constructor(props){
        super(props);
        this.onTaskPackClicked = this.onTaskPackClicked.bind(this);
    }

    onTaskPackClicked(){
        // var taskSetIdPriorityMap = [...this.props.taskSetIdPriorityMap];
        var taskSets = [...this.props.taskSets];
        var taskPackId = this.props.taskPackId;
        console.log("TaskPack " + taskPackId + " clicked");
        console.log("Associated tasksets: ");
        taskSets.forEach(taskSet => {
            console.log(taskSet.taskSetName);
        });
        this.props.onTaskPackClicked(this.props.taskPackId);
    }

    render(){
        return (
        <div className="TaskPack-main" onClick={ this.onTaskPackClicked }>
           {this.props.taskPackName}
        </div>
        
        );
    }
}

export default TaskPack;