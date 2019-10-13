import React from 'react';
import { connect } from "react-redux";

import './Task.css';

const mapTaskStateToProps = state => {
    return { tasks: state.tasks };
  };
  
  const ConnectedTaskList = ({ tasks }) => (
    <ul id="TaskList" className="list-group list-group-flush">
      {tasks.map(el => (
        <li id="TaskListItem" className="list-group-item" key={el.taskId}>
          {el.taskName}
        </li>
      ))}
    </ul>
  );

const TaskList = connect(mapTaskStateToProps)(ConnectedTaskList);
export default TaskList;