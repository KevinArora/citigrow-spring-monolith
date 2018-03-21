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

    @Column(name = "USER_NAME")
    private String userName;

    @Column(name = "FIRST_NAME")
    private String firstName;

    @Column(name = "LAST_NAME")
    private String lastName;


}
