package com.example.citigrow.repositories;

import com.example.citigrow.models.Task;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TaskRepo extends CrudRepository<Task, Long>{
    List<Task> findAll();
}
