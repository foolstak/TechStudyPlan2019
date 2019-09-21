import React, { Component } from "react";
import './TaskPackSection.css';
import TaskPackButton from "./TaskPackButton";

class TaskPackSection extends Component{
    
    render(){
        var noOfTaskPacksToRender = this.props.noOfTaskPacks;
        var rows = [];
        for(let i = 0; i < noOfTaskPacksToRender; i++){ 
            rows.push(<TaskPackButton />);
        }
        return (
        <div  className="TaskPackSection-main">
            <h3>TaskPacks</h3>
            { rows }
        </div>
        );
    }
}
export default TaskPackSection;