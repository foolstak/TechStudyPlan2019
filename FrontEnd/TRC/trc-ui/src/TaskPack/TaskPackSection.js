import React, { Component } from "react";
import './TaskPackSection.css';
import Button from "../common/Button";

class TaskPackSection extends Component{
    
    render(){
        var noOfTaskPacksToRender = this.props.noOfTaskPacks;
        var taskPackList = [];
        for(let i = 0; i < noOfTaskPacksToRender; i++){ 
            taskPackList.push(<Button key={ 'tp-' + i } componentName={ 'TaskPack' }/>);
        }
        return (
        <div  className="TaskPackSection-main">
            <h3>TaskPacks</h3>
            { taskPackList }
        </div>
        );
    }
}
export default TaskPackSection;