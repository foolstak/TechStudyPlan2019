import React, { Component } from "react";
import './TaskSetSection.css';
import Button from "../common/Button";

class TaskSetSection extends Component{
    render(){
        var noOfTaskSetsToRender = this.props.noOfTaskSets;
        var rows = [];
        for(var i = 0 ; i < noOfTaskSetsToRender; i++){
            rows.push(<Button key={ 'ts-' + i } componentName={ 'TaskSet' }/>);
        }
        return (
        <div className="TaskSetSection-main">
            <h3>TaskSets</h3>
                { rows }
            </div>
        );
    }
}
export default TaskSetSection;