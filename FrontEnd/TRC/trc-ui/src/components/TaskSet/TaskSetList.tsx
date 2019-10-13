import React from 'react';
import { connect } from "react-redux";
import './TaskSet.css';

const mapTaskSetStateToProps = state => {
    return { taskSets: state.taskSets };
  };
  
const ConnectedTaskSetList = ({ taskSets }) => (
    <ul id="TaskSetList" className="list-group list-group-flush">
      {taskSets.map(el => (
        <li id="TaskSetListItem" className="list-group-item" key={el.taskSetId}>
          {el.taskSetName}
        </li>
      ))}
    </ul>
  );

const TaskSetList = connect(mapTaskSetStateToProps)(ConnectedTaskSetList);

export default TaskSetList;