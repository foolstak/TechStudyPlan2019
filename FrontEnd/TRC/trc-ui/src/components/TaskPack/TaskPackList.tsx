import React from 'react';
import { connect } from "react-redux";
import './TaskPack.css';

const mapTaskPackStateToProps = state => {
    return { taskPacks: state.taskPacks };
  };
  
  const ConnectedList = ({ taskPacks }) => (
    <ul id="TaskPackList" className="list-group list-group-flush">
      { taskPacks.length > 0 ? 
      taskPacks.map(el => (
        <li id="TaskPackListItem" className="list-group-item" key={el.taskPackId}>
          {el.taskPackName}
        </li>
      )) 
      : 
      <p>There are currently no Task Packs defined</p> } 
    </ul>
  );

const TaskPackList = connect(mapTaskPackStateToProps)(ConnectedList);
export default TaskPackList;