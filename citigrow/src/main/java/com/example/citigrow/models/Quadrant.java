package com.example.citigrow.models;

import lombok.*;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Table(name="quadrants")
public class Quadrant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "garden_id")
    private Long gardenId;

    @Column(name = "produce_id")
    private Long produceId;

    @Column(name = "user_id")
    private Long userId;

}
