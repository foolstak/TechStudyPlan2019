package com.foolstak.trc.taskservice.domain.impl;

import com.foolstak.trc.taskservice.domain.Task;
import com.foolstak.trc.taskservice.domain.TaskType;

class DBRunnerTask implements Task {
    private int taskId;
    private String taskName;
    private TaskType taskType;

    @Override
    public String getTaskName() {
        return null;
    }

    @Override
    public TaskType getTaskType() {
        return null;
    }

    @Override
    public void setTaskId(int newtaskId) {
        this.taskId = newtaskId;
    }

    public DBRunnerTask(DBRunnerTaskBuilder taskBuilder) {
        DBRunnerTaskBuilder consoleRunnerTaskBuilder = (DBRunnerTaskBuilder) taskBuilder;
        this.taskName = consoleRunnerTaskBuilder.taskName;
        this.taskType = consoleRunnerTaskBuilder.taskType;
    }

    public static class DBRunnerTaskBuilder extends TaskBuilder {
        private String taskName;
        private TaskType taskType;

        public DBRunnerTaskBuilder(String taskName, TaskType taskType) {
            super(taskName, taskType);
        }

        public Task build() {
            return new DBRunnerTask(this);
        }
    }
}
