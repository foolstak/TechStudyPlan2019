package com.foolstak.trc.taskservice.dao;

import com.foolstak.trc.taskservice.domain.Task;
import com.foolstak.trc.taskservice.domain.TaskType;
import com.foolstak.trc.taskservice.domain.impl.TaskBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Component;

import java.sql.*;
import java.util.List;

@Component
public class TaskDaoImpl implements TaskDao {

    private final String INSERT_SQL = "INSERT INTO TASK VALUES(?,?)";
    private final String GET_ALL_SQL = "SELECT * FROM TASK";

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @Override
    public int createTask(Task task) {
        KeyHolder holder = new GeneratedKeyHolder();
        jdbcTemplate.update(new PreparedStatementCreator() {
            @Override
            public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                PreparedStatement ps = connection.prepareStatement(INSERT_SQL, Statement.RETURN_GENERATED_KEYS);
                ps.setString(1, task.getTaskName());
                ps.setString(2, task.getTaskType().name());
                return ps;
            }
        }, holder);

        int newtaskId = holder.getKey().intValue();
        task.setTaskId(newtaskId);
        return newtaskId;
    }

    @Override
    public Task findTaskById(int taskId) {
        return null;
    }

    @Override
    public List<Task> getAllTasks() {
        return jdbcTemplate.query(GET_ALL_SQL, new TaskRowMapper());
    }

    class TaskRowMapper implements RowMapper< Task > {
        @Override
        public Task mapRow(ResultSet rs, int rowNum) throws SQLException {
            int id =  rs.getInt("task_id");
            String name = rs.getString("task_name");
            String taskType = rs.getString("task_type");
            Task task = TaskBuilder.createTask(name, TaskType.valueOf(taskType));
            task.setTaskId(id);
            return task;
        }
    }
}
