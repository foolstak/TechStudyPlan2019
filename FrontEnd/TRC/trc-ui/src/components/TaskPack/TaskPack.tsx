import React from "react";
import './TaskPack.css';

type MyProps = { taskPackName?: string, taskSets: [ {taskSetName: string}], taskPackId: string }
type MyState = { show: boolean }

class TaskPack extends React.Component<MyProps, MyState>{

    constructor(props: Readonly<MyProps>){
        super(props);
        this.onTaskPackClicked = this.onTaskPackClicked.bind(this);
    }

    onTaskPackClicked(){
        // var taskSetIdPriorityMap = [...this.props.taskSetIdPriorityMap];
        var taskSets = [...this.props.taskSets];
        var taskPackId = this.props.taskPackId;
        console.log("TaskPack " + taskPackId + " clicked");
        console.log("Associated tasksets: ");
        taskSets.forEach(taskSet => {
            console.log(taskSet.taskSetName);
        });
        // this.props.onTaskPackClicked(this.props.taskPackId);
    }

    render(){
        return (
        <div className="TaskPack-main" onClick={ this.onTaskPackClicked }>
           {this.props.taskPackName}
        </div>
        
        );
    }
}

export default TaskPack;