package com.foolstak.trc.taskservice.domain.impl;

import com.foolstak.trc.taskservice.domain.Task;
import com.foolstak.trc.taskservice.domain.TaskType;

public class TaskBuilder {
    private String taskName;
    private TaskType taskType;

    public TaskBuilder(String taskName, TaskType taskType) {
        this.taskName = taskName;
        this.taskType = taskType;
    }

    public static Task createTask(String taskName, TaskType taskType) {
        Task task;
        switch(taskType){
            case CONSOLE_RUNNER:
                task = new ConsoleRunnerTask.ConsoleRunnerTaskBuilder(taskName, taskType).build();
                break;
            case DB_RUNNER:
                task = new DBRunnerTask.DBRunnerTaskBuilder(taskName, taskType).build();
            default:
                task = new ConsoleRunnerTask.ConsoleRunnerTaskBuilder(taskName, taskType).build();
        }
        return task;
    }
}
