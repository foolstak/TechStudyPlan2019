import React from "react";
import './TaskSetSection.css';
import Utils from '../../common/utils';
import TaskSet from './TaskSet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const onTaskSetButtonClicked = () => {
    console.log("add taskset button clicked");
}

function TaskSetSection(props){
    
        var noOfTaskSetsToRender = props.noOfTaskSets;
        var rows = [];
        var newArray = [];
        newArray.push(Utils(1));
        newArray.push(Utils(2));
        newArray.push(Utils(3));
        newArray.push(Utils(4));
        newArray.push(Utils(5));
        for(var i = 1 ; i <= noOfTaskSetsToRender; i++){
            rows.push(<TaskSet key={ i } componentName={ 'TaskSet' } componentKey={ i } tasks={ [newArray] }/>);
        }
        return (
        <div className="TaskSetSection-main">
            <h3>TaskSets</h3>
            <div className="TaskSetSection-taskSetList">
               { rows.length > 0 ? rows : <p>There are no TaskSets. Define some to see them below</p> }
            </div>
            <button id="addTaskSetButton" onClick={ onTaskSetButtonClicked }><FontAwesomeIcon icon={ faPlusCircle } /></button>
        </div>
        );
    
}
export default TaskSetSection;