import React, { Component } from "react";
import './TaskSetSection.css';
import Button from "../common/Button";
import getRandomNumber from '../common/utils';

class TaskSetSection extends Component{
    render(){
        var noOfTaskSetsToRender = this.props.noOfTaskSets;
        var rows = [];
        var newArray = [];
        newArray.push(getRandomNumber(1));
        newArray.push(getRandomNumber(2));
        newArray.push(getRandomNumber(3));
        newArray.push(getRandomNumber(4));
        newArray.push(getRandomNumber(5));
        for(var i = 1 ; i <= noOfTaskSetsToRender; i++){
            rows.push(<Button key={ i } componentName={ 'TaskSet' } componentKey={ i } tasks={ [newArray] }/>);
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