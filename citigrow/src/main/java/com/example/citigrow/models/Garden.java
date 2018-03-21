package com.example.citigrow.models;

import javax.persistence.*;
import lombok.*;


@Data
@Entity
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Table(name = "gardens")
public class Garden {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME")
    private String userName;

    @Column(name = "ZIPCODE")
    private String firstName;

    @Column(name = "USER_ID")
    private int lastName;
}
