import React, { Component } from "react";
import './TaskPackSection.css';
import Button from "../common/Button";

class TaskPackSection extends Component{
    
    render(){
        var noOfTaskPacksToRender = this.props.noOfTaskPacks;
        var taskPackList = []; 
        for(let i = 1; i <= noOfTaskPacksToRender; i++){ 
            taskPackList.push(<Button key={ i } componentName={ 'TaskPack' } componentKey={ i } taskSets={ [Math.floor(Math.random() * 10) % 5, Math.floor(Math.random() * 10) % 5]}/>);
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