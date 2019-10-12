package com.foolstak.trc.taskservice.domain.impl;

import com.foolstak.trc.taskservice.domain.Task;
import com.foolstak.trc.taskservice.domain.TaskType;

public class ConsoleRunnerTask implements Task {

    private String taskName;
    private TaskType taskType;
    private int taskId;

    public ConsoleRunnerTask(TaskBuilder taskBuilder) {
        ConsoleRunnerTaskBuilder consoleRunnerTaskBuilder = (ConsoleRunnerTaskBuilder) taskBuilder;
        this.taskName = consoleRunnerTaskBuilder.taskName;
        this.taskType = consoleRunnerTaskBuilder.taskType;
    }

    @Override
    public String getTaskName() {
        return this.taskName;
    }

    @Override
    public TaskType getTaskType() {
        return this.taskType;
    }

    @Override
    public void setTaskId(int newtaskId) {
        this.taskId = newtaskId;
    }

    public static class ConsoleRunnerTaskBuilder extends TaskBuilder{
        private String taskName;
        private TaskType taskType;

        public ConsoleRunnerTaskBuilder(String taskName, TaskType taskType){
            super(taskName, taskType);
        }

        public Task build() {
            return new ConsoleRunnerTask(this);
        }
    }
}
