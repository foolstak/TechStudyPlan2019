import React from "react";
import './TaskPackSection.css';
import TaskPack from "./TaskPack";

function TaskPackSection(props){

    var noOfTaskPacksToRender = props.noOfTaskPacks;
    var taskPackList = []; 
    for(let i = 1; i <= noOfTaskPacksToRender; i++){ 
        taskPackList.push(<TaskPack key={ i } taskSets={ [Math.floor(Math.random() * 10) % 5, Math.floor(Math.random() * 10) % 5]}/>);
    }
    return (
    <div  className="TaskPackSection-main">
        <h3>TaskPacks</h3>
        { taskPackList.length > 0? taskPackList : <p>There are no TaskPacks defined. Define some to  see them below</p> }
    </div>
    );
}

export default TaskPackSection;