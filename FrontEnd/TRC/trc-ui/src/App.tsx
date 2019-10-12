import React from 'react';
import './App.css';
import TaskPackList from './components/TaskPack/TaskPackList';
import TaskList from './components/Task/TaskList';
import TaskSetList from './components/TaskSet/TaskSetList';
import AddTaskPackForm from './components/TaskPack/AddTaskPackForm'
import Modal from './common/Modal';
import AddTaskSetForm from './components/TaskSet/AddTaskSetForm';
import AddTaskForm from './components/Task/AddTaskForm';

type MyProps = { }
type MyState = { show: boolean, modalType: string }
class App extends React.Component<MyProps, MyState> {

  constructor(props: MyProps){
    super(props);
    this.state = { show: false, modalType:"Task" };
  }

  showModal = (modalType: string) => {
    this.setState({ show: true, modalType: modalType});
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  // onTaskPackClicked(taskPackId){
  //   this.setState({
  //     taskPacks: taskPacks,
  //     taskSets: taskSets,
  //     tasks: tasks,
  //     selectedTaskPacks: [],
  //     selectedTaskSets:[],
  //     selectedTasks: []
  //   });
  //     console.log("TaskPack clicked:" + taskPackId);
  //     this.setState({ selectedTaskSets : []});
  //     let selectedTaskPack = this.state.taskPacks.find(taskPack => taskPack.taskPackId === taskPackId);
  //     console.log(selectedTaskPack);
  //     let newTaskSetIds = [];
  //     selectedTaskPack.taskSetIdPriorityMap.forEach(mapEntry => {
  //       newTaskSetIds.push(mapEntry.taskSetId);
  //     });

  //     const newTaskSets = taskSets.filter(taskSet => newTaskSetIds.includes(taskSet.taskSetId));
  //     this.setState({taskSets: newTaskSets});
  //     console.log(newTaskSets);
  //     let newTaskIds = [];
  //     newTaskSets.forEach(taskSetEntry => {
  //       taskSetEntry.taskIdPriorityMap.forEach(mapEntry => {
  //         console.log(mapEntry.taskId)
  //         newTaskIds.push(mapEntry.taskId)})
  //       });
  //     // newTaskIds = newTaskIds.filter((v, i, a) => a.indexOf(v) === i); 
  //     const newTasks = tasks.filter(task => newTaskIds.includes(task.taskId));
  //     console.log(newTasks);

  //     this.setState({
  //       taskSets: newTaskSets,
  //       tasks: newTasks
  //     });
  // }

  // onTaskClicked(taskId){

  // }

  // onTaskSetClicked(taskSetId){

  // }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Task Runner</h1>
        </header>
        <div id="container" className="App-content">
          <div  className="TaskPackSection-main">
            <h3>TaskPacks</h3>
            <div className="TaskPackSection-taskPackList">
              <TaskPackList />
            </div>
            <div id="myButton">
              <button className="AddButton" onClick={()=>this.showModal("taskPack")}>
                Add TaskPack
              </button>
            </div>
          </div>  
          <div className="TaskSetSection-main">
            <h3>TaskSets</h3>
            <div className="TaskSetSection-taskSetList">
               <TaskSetList />
            </div>
            <button className="AddButton" onClick={()=>this.showModal("taskSet")}>
              Add TaskSet
            </button>
          </div>
          <div className="TaskSection-main">
              <h3>Tasks</h3>
              <div className="TaskSection-taskList">
                <TaskList />
              </div>
              <button className="AddButton" onClick={()=>this.showModal("task")}>
              Add Task
            </button>
          </div>
        </div>
        <footer className="App-footer">
          <p>This is a footer trial</p>
        </footer>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          
            {this.state.modalType === "TaskPack" ? <AddTaskPackForm  />
            : this.state.modalType === "TaskSet" ? <AddTaskSetForm />
            : <AddTaskForm />
    }
        </Modal>
      </div>
    );
  }
  
}

export default App;
