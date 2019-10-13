import React from 'react';
import { connect } from 'react-redux';
import { addTaskSet } from '../store/actions/actions';
import uuidv1 from "uuid";

function mapDispatchToProps(dispatch: any) {
    return {
      addTaskSet: (taskSet: any) => dispatch(addTaskSet(taskSet))
    };
}

type MyProps = { addTaskSet : Function }
type MyState = { taskSetName: string, taskIdPriorityMap?: []}

class ConnectedForm extends React.Component<MyProps, MyState>{

    constructor(props: MyProps){
        super(props);
        this.state = {
            taskSetName: "", 
            taskIdPriorityMap: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);    
    }

    handleChange(event: any) {
      let newState: MyState = { taskSetName: event.target.value } ;
      this.setState(newState);
    }

    handleSubmit(event: any) {
        event.preventDefault();
        const { taskSetName } = this.state;
        const id = uuidv1();
        this.props.addTaskSet({ taskSetId: id, taskSetName: taskSetName, taskIdPriorityMap: [] });
        this.setState({ taskSetName: "" });
    }
    render() {
        const { taskSetName } = this.state;
        return (
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="taskSetName">Task Set Name</label>
              <input
                type="text"
                className="form-control"
                id="taskSetName"
                value={ taskSetName }
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

const AddTaskSetForm = connect(null, mapDispatchToProps)(ConnectedForm);
export default AddTaskSetForm;