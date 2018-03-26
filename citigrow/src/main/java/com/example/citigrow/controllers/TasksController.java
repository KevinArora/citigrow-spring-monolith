package com.example.citigrow.controllers;

import com.example.citigrow.models.Task;
import com.example.citigrow.repositories.TaskRepo;
import javassist.NotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
public class TasksController{

    @Autowired
    private TaskRepo taskRepo;


    @GetMapping("/Tasks")
    public List<Task> findAllTasks() {
        return taskRepo.findAll();
    }

    @GetMapping("/Tasks/{TaskId}")
    public Task findTaskById(@PathVariable Long TaskId) throws NotFoundException {

        Task foundTask = taskRepo.findOne(TaskId);

        if (foundTask == null) {
            throw new NotFoundException("Task with ID of " + TaskId + " was not found!");
        }

        return foundTask;
    }

    @PostMapping("/Tasks")
    public Task createNewTask(@RequestBody Task newTask) {
        return taskRepo.save(newTask);
    }

    @DeleteMapping("/Tasks/{TaskId}")
    public HttpStatus deleteTaskById(@PathVariable Long TaskId) throws EmptyResultDataAccessException {

        taskRepo.delete(TaskId);
        return HttpStatus.OK;
    }

    @PatchMapping("/Tasks/{TaskId}")
    public Task updateTaskById(@PathVariable Long TaskId, @RequestBody Task userRequest) throws NotFoundException {
        Task userFromDb = taskRepo.findOne(TaskId);

        if (userFromDb == null) {
            throw new NotFoundException("Task with ID of " + TaskId + " was not found!");
        }

        userFromDb.setTitle(userRequest.getTitle());
        userFromDb.setDescription(userRequest.getDescription());

        return taskRepo.save(userFromDb);
    }

    // EXCEPTION HANDLERS

    @ExceptionHandler
    void handleTaskNotFound(
            NotFoundException exception,
            HttpServletResponse response) throws IOException {

        response.sendError(HttpStatus.NOT_FOUND.value(), exception.getMessage());
    }

    @ExceptionHandler
    void handleDeleteNotFoundException(
            EmptyResultDataAccessException exception,
            HttpServletResponse response) throws IOException {

        response.sendError(HttpStatus.NOT_FOUND.value());
    }
}
