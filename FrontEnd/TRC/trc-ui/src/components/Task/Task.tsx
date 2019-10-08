import React from "react";
import './Task.css';

type MyProps = { taskName: string, number: number }
type MyState = {}

class Task extends React.Component<MyProps, MyState>{

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
            Task { this.props.taskName }
        </div>
        );
    }
}

export default Task;