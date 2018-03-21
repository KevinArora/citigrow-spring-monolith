package com.example.citigrow.repositories;
import com.example.citigrow.models.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}
