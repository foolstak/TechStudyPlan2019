import React, { Component } from "react";
import './TaskPackSection.css';
import TaskPack from './TaskPack';

class TaskPackSection extends Component{
    render(){
        return <div  className="TaskPackSection-main">
                <h3>TaskPacks</h3>
                <a href="#" className="TaskPack-row"><TaskPack /></a>
                <br></br>
                <a href="#" className="TaskPack-row"><TaskPack /></a>
                <br></br>
                <a href="#" className="TaskPack-row"><TaskPack /></a>
                <br></br>  
            </div>;
    }
}
export default TaskPackSection;