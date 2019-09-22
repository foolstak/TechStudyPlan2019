import React from "react";
import './TaskSetSection.css';
import Utils from '../../common/utils';

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
               { rows.length > 0 ? rows : <p>There are no TaskSets. Define some to see them below</p> }
            </div>
        );
    
}
export default TaskSetSection;