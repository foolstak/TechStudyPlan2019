import React from 'react';
import { connect } from "react-redux";
import './TaskSet.css';

const mapStateToProps = state => {
    return { taskSets: state.taskSets };
  };
  
const ConnectedList = ({ taskSets }) => (
    <ul id="TaskSetList" className="list-group list-group-flush">
      {taskSets.map(el => (
        <li id="TaskSetListItem" className="list-group-item" key={el.taskSetId}>
          {el.taskSetName}
        </li>
      ))}
    </ul>
  );

const TaskSetList = connect(mapStateToProps)(ConnectedList);

export default TaskSetList;