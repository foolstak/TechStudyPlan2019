import React from "react";
import './TaskSection.css';
import Task from "./Task";
import AddTask from "./AddTask";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

class TaskSection extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            addTask: 0
        };
        
        this.onAddTaskClicked = this.onAddTaskClicked.bind(this);
    }

    onAddTaskClicked() {
        this.setState({ addTask:this.addTask+1}); 
        console.log('Add task: ' + this.state.addTask);
    }

    render(){
        const noOfTasksToRender = this.props.noOfTasks;
        const taskList  = [];
        for(let i= 1; i <= noOfTasksToRender; i++){
            taskList.push(<Task key={ i } componentKey={ i } componentName={ 'Task' }/>);
        }
        return (
            <div className="TaskSection-main">
                <h3>Tasks</h3>
                
                    <div className="TaskSection-taskList">
                    { taskList.length > 0? taskList : <p>There are no tasks defined. Define some to see them below</p> }
                </div>
                <button id="addTaskButton" onClick={ this.onAddTaskClicked }><FontAwesomeIcon icon={ faPlusCircle } /></button>
            
                { this.addTask && <AddTask /> }
            </div>
        );
    }
}

export default TaskSection;