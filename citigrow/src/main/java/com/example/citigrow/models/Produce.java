package com.example.citigrow.models;


import lombok.*;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Table(name="produce")
public class Produce {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String descrption;


}
