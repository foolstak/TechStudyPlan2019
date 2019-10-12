package com.foolstak.trc.taskservice.dao;

import com.foolstak.trc.taskservice.domain.Task;

import java.util.List;

public interface TaskDao {
    int createTask(Task task);

    Task findTaskById(int taskId);

    List<Task> getAllTasks();
}
