package com.foolstak.trc.taskservice.web;

import com.foolstak.trc.taskservice.domain.Task;
import com.foolstak.trc.taskservice.domain.TaskType;
import com.foolstak.trc.taskservice.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TaskController {

    @Autowired
    private TaskService taskService;

    @RequestMapping(method = RequestMethod.POST, value="/task/create")
    @ResponseBody
    public boolean createTask(@RequestBody String taskName, @RequestBody TaskType taskType){
        return taskService.createTask(taskName, taskType);
    }

    @RequestMapping(method = RequestMethod.GET, value="/task/all")
    public List<Task> getAllTasks(){
        return taskService.getAllTasks();
    }
}
