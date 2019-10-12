package com.foolstak.trc.taskservice.service;

import com.foolstak.trc.taskservice.domain.Task;
import com.foolstak.trc.taskservice.domain.TaskType;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface TaskService {
    boolean createTask(String taskName, TaskType taskType);

    List<Task> getAllTasks();
}
