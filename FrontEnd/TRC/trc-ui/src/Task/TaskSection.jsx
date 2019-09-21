import React, { Component } from "react";
import './TaskSection.css';
import Button from "../common/Button";

class TaskSection extends Component{
    render(){
        var noOfTasksToRender = this.props.noOfTasks;
        var taskList  = [];
        for(let i= 0; i < noOfTasksToRender; i++){
            taskList.push(<Button key={ 't-' + i } componentName= { 'Task' }/>);
        }
        return (
        <div className="TaskSection-main">
            <h3>Tasks</h3>
            { taskList }
            </div>
        );
    }
}
export default TaskSection;