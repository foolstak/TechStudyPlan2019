import React, {Component} from 'react';

import './Button.css';

import Task from '../Task/Task';
import TaskPack from '../TaskPack/TaskPack';
import TaskSet from '../TaskSet/TaskSet';

class Button extends Component{
    render(){
        var component = this.props.componentName;
        switch(component){
            case 'Task':
                return (
                    <button className="Button-common TaskButton-common"><Task /></button>
                );
            case 'TaskPack':
                return (
                    <button className="Button-common TaskPackButton-common"><TaskPack /></button>
                );
            case 'TaskSet': 
                return (
                    <button className="Button-common TaskSetButton-common"><TaskSet /></button>
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
