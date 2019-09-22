import React from "react";
import './TaskSection.css';
import Task from "./Task";

function TaskSection(props){
        const noOfTasksToRender = props.noOfTasks;
        const taskList  = [];
        for(let i= 1; i <= noOfTasksToRender; i++){
            taskList.push(<Task key={ i } componentKey={ i } componentName={ 'Task' }/>);
        }
        return (
        <div className="TaskSection-main">
            <h3>Tasks</h3>
            { taskList.length > 0? taskList : <p>There are no tasks defined. Define some to see them below</p> }
            </div>
        );
    
}
export default TaskSection;