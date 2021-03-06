package com.example.citigrow.models;

import javax.persistence.*;
import lombok.*;


@Data
@Entity
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String userName;

    @Column(name = "age")
    private String firstName;

    @Column(name = "password")
    private String lastName;


}
