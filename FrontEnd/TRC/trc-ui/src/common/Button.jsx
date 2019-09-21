import React, {Component} from 'react';

import './Button.css';

import Task from '../Task/Task';
import TaskPack from '../TaskPack/TaskPack';
import TaskSet from '../TaskSet/TaskSet';

class Button extends Component{
    
    constructor(props){
        super(props);
        this.trial = this.trial.bind(this);
    }
   trial(clickedName){
      console.log(clickedName + ' clicked');
   }

    render(){
        var componentKey = this.props.componentKey;
        var component = this.props.componentName;
        
        switch(component){
            case 'Task':
                return (
                    <button className="Button-common TaskButton-common"><Task key={ componentKey } number={ componentKey } /></button>
                );
            case 'TaskPack':
                var taskSets = this.props.taskSets;
                return (
                    <button className="Button-common TaskPackButton-common"><TaskPack key={ componentKey } number={ componentKey } taskSets={ taskSets }/></button>
                );
            case 'TaskSet': 
            var tasks = this.props.tasks;
                return (
                    <button className="Button-common TaskSetButton-common"><TaskSet key={ componentKey } number={ componentKey } tasks={ tasks }/></button>
                );
            
            default: 
                return (
                    <div className="button-common">
                    </div>
                );
        }            
    }
        
}

export default Button;
