import React from "react";
import './TaskPackSection.css';
import TaskPack from "./TaskPack";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

function TaskPackSection(props){

    let taskPacks = [...props.taskPacks];
    let taskSets = props.taskSets;
    let taskSetIdPriorityMap = taskPacks.taskSetIdPriorityMap;
    // let taskSetId = taskPacks.taskSetIdPriorityMap.taskSetId;

    console.log(taskPacks);
    let taskPackList = []; 
    
    taskPacks.forEach(element => {
        console.log(element.taskPackId);
        console.log(element.taskPackName);
        taskPackList.push(<TaskPack key={ element.taskPackId } taskPackId = { element.taskPackId } taskPackName={ element.taskPackName } taskSetIdPriorityMap={ taskSetIdPriorityMap } taskSets={ taskSets }/>);
    });
    // for(let i = 1; i <= noOfTaskPacksToRender; i++){ 
    //     console.log(taskPacks[i]);
    //     taskPackList.push(<TaskPack key={ i } taskPackName={ taskPacks.taskPackName }taskSets={ [Math.floor(Math.random() * 10) % 5, Math.floor(Math.random() * 10) % 5]}/>);
    // }
    return (
    <div  className="TaskPackSection-main">
        <h3>TaskPacks</h3>
        { taskPackList.length > 0? taskPackList : <p>There are no TaskPacks defined. Define some to  see them below</p> }
        <FontAwesomeIcon icon={ faPlusCircle } />
    </div>
    );
}

export default TaskPackSection;