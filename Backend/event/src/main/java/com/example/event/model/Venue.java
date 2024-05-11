package com.example.event.model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "_venue")
public class Venue{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id ;
    private String venueName ;
    private int capacity ;
    private String location ;
    private String phoneNo ;
    private String email ;
    private String imageUrl ;
}
