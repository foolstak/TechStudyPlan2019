import React from 'react';
import { connect } from "react-redux";
import './TaskPack.css';

const mapStateToProps = state => {
    return { taskPacks: state.taskPacks };
  };
  
  const ConnectedList = ({ taskPacks }) => (
    <ul id="TaskPackList" className="list-group list-group-flush">
      {taskPacks.map(el => (
        <li id="TaskPackListItem" className="list-group-item" key={el.taskPackId}>
          {el.taskPackName}
        </li>
      ))}
    </ul>
  );

const TaskPackList = connect(mapStateToProps)(ConnectedList);
export default TaskPackList;