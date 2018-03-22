package com.example.citigrow.repositories;

import com.example.citigrow.models.Produce;
import org.springframework.data.repository.CrudRepository;

public interface ProduceRepo extends CrudRepository <Produce, Long> {
}
