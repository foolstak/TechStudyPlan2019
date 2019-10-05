import React from 'react';
import { connect } from "react-redux";

import './Task.css';

const mapStateToProps = state => {
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

const TaskList = connect(mapStateToProps)(ConnectedTaskList);
export default TaskList;