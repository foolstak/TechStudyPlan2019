import React, { Component } from "react";
import './TaskPackSection.css';
import TaskPack from './TaskPack';

class TaskPackSection extends Component{
    render(){
        return <div  className="TaskPackSection-main">
                <h3>TaskPacks</h3>
                <button className="TaskPack-row"><TaskPack /></button>
                <br></br>
                <button className="TaskPack-row"><TaskPack /></button>
                <br></br>
                <button className="TaskPack-row"><TaskPack /></button>
                <br></br>  
            </div>;
    }
}
export default TaskPackSection;