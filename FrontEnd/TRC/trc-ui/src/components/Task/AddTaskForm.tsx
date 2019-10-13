import React from 'react';
import { connect } from 'react-redux';
import { addTask } from '../store/actions/actions';
import uuidv1 from "uuid";

function mapDispatchToProps(dispatch: any) {
    return {
      addTask: (task: any) => dispatch(addTask(task))
    };
}

type MyProps = { addTask : Function }
type MyState = { taskName: string }

class ConnectedForm extends React.Component<MyProps, MyState>{

    constructor(props: MyProps){
        super(props);
        this.state = {
            taskName: "" 
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);    
    }

    handleChange(event: any) {
      let newState: MyState = { taskName: event.target.value } ;
      this.setState(newState);
    }

    handleSubmit(event: any) {
        event.preventDefault();
        const { taskName } = this.state;
        const id = uuidv1();
        this.props.addTask({ taskId: id, taskName: taskName });
        this.setState({ taskName: "" });
    }
    render() {
        const { taskName } = this.state;
        return (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="taskPackName">Task Name</label>
              <input
                type="text"
                className="form-control"
                id="taskName"
                value={ taskName }
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

const AddTaskForm = connect(null, mapDispatchToProps)(ConnectedForm);
export default AddTaskForm;