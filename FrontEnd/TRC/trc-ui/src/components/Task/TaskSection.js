import React, { useState } from "react";
import './TaskSection.css';
import Task from "./Task";
import AddTask from "./AddTask";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function TaskSection(props){
        const noOfTasksToRender = props.noOfTasks;
        const taskList  = [];
        const [onAddTaskClicked, setAddTaskClicked] = useState(0);
        for(let i= 1; i <= noOfTasksToRender; i++){
            taskList.push(<Task key={ i } componentKey={ i } componentName={ 'Task' }/>);
        }
        return (
            <div className="TaskSection-main">
                <h3>Tasks</h3>
                    <div className="TaskSection-taskList">
                    { taskList.length > 0? taskList : <p>There are no tasks defined. Define some to see them below</p> }
                </div>
                <button id="addTaskButton" onClick={ () => setAddTaskClicked(1) }><FontAwesomeIcon icon={ faPlusCircle } /></button>
            
                <div className="Form-placeholder"> { onAddTaskClicked ? <AddTask /> : null }</div>
            </div>
        );
    }


export default TaskSection;