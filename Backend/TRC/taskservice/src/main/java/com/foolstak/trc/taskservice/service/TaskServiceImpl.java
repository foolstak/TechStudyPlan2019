package com.foolstak.trc.taskservice.service;

import com.foolstak.trc.taskservice.dao.TaskDao;
import com.foolstak.trc.taskservice.domain.Task;
import com.foolstak.trc.taskservice.domain.impl.TaskBuilder;
import com.foolstak.trc.taskservice.domain.TaskType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskDao taskDao;

    @Override
    public boolean createTask(String taskName, TaskType taskType) {
        Task task = TaskBuilder.createTask(taskName, taskType);
        int taskId = taskDao.createTask(task);
        return taskId > 0;
    }

    @Override
    public List<Task> getAllTasks() {
        return taskDao.getAllTasks();
    }
}
