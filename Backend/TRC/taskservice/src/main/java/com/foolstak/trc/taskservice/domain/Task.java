package com.foolstak.trc.taskservice.domain;

public interface Task {
    String getTaskName();
    TaskType getTaskType();
    void setTaskId(int newtaskId);
}
