import React, { Component } from "react";
import './Task.css';

class Task extends Component{    

    constructor(props){
        super(props);
        this.onTaskClicked = this.onTaskClicked.bind(this);
    }
    onTaskClicked(){
        console.log("Task " + this.props.number + " clicked");
    }
    render(){
        return (
        <div className="Task-main" onClick={ this.onTaskClicked }>
            Task { this.props.number }
        </div>
        );
    }
}

export default Task;