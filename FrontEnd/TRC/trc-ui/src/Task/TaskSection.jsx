import React, { Component } from "react";
import './TaskSection.css';
import TaskButton from './TaskButton';

class TaskSection extends Component{
    render(){
        var noOfTasksToRender = this.props.noOfTasks;
        var rows  = [];
        for(let i= 0; i < noOfTasksToRender; i++){
            rows.push(<TaskButton />);
        }
        return (
        <div className="TaskSection-main">
            <h3>Tasks</h3>
            { rows }
            </div>
        );
    }
}
export default TaskSection;