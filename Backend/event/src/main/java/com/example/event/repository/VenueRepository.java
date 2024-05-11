package com.example.event.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.event.model.Venue;

public interface VenueRepository extends JpaRepository<Venue,Long>{
    
}
