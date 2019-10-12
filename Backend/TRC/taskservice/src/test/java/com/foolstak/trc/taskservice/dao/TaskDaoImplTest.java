package com.foolstak.trc.taskservice.dao;

import com.foolstak.trc.taskservice.domain.Task;
import com.foolstak.trc.taskservice.domain.TaskType;
import com.foolstak.trc.taskservice.domain.impl.TaskBuilder;
import org.junit.Test;
import org.junit.runner.RunWith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import static org.junit.Assert.assertEquals;

@RunWith(SpringJUnit4ClassRunner.class)
public class TaskDaoImplTest {

    @Autowired
    private TaskDao taskDao;

    @Test
    public void createUser() {
        Task expectedTask = getTask();
        int expectedTaskId = taskDao.createTask(expectedTask);
        Task userFromDb = taskDao.findTaskById(expectedTaskId);
        assertEquals(expectedTask.getTaskName(), userFromDb.getTaskName());
        assertEquals(expectedTask.getTaskType(), userFromDb.getTaskType());
    }

    private Task getTask() {
        Task task = TaskBuilder.createTask("Test Task", TaskType.CONSOLE_RUNNER);
        return task;
    }

}
