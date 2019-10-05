import React from 'react';
import { connect } from 'react-redux';
import { addTaskPack } from '../store/actions/actions.js';
import uuidv1 from "uuid";

function mapDispatchToProps(dispatch) {
    return {
      addTaskPack: taskPack => dispatch(addTaskPack(taskPack))
    };
  }

class ConnectedForm extends React.Component{

    constructor(){
        super();
        this.state = {
            taskPackName: "", 
            taskSetIdPriorityMap: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);    
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { taskPackName } = this.state;
        const id = uuidv1();
        this.props.addTaskPack({ taskPackId: id, taskPackName: taskPackName, taskSetIdPriorityMap: [] });
        this.setState({ taskPackName: "" });
    }
    render() {
        const { taskPackName } = this.state;
        return (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="taskPackName">Task Pack Name</label>
              <input
                type="text"
                className="form-control"
                id="taskPackName"
                value={ taskPackName }
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-success btn-lg">
              SAVE
            </button>
          </form>
        );
    }
    
}

const AddTaskPackForm = connect(null, mapDispatchToProps)(ConnectedForm);
export default AddTaskPackForm;