package com.example.event.service;

import com.example.event.model.Venue;
import com.example.event.repository.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class VenueService {

    @Autowired
    private VenueRepository venueRepository;

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Venue createVenue(Venue venue) {
        return venueRepository.save(venue);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN') or @venueSecurityService.hasAccessToVenue(#id)")
    public Optional<Venue> getVenueById(Long id) {
        return venueRepository.findById(id);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Venue> getAllVenues() {
        return venueRepository.findAll();
    }

    @PreAuthorize("hasRole('ROLE_ADMIN') or @venueSecurityService.hasAccessToVenue(#id)")
    public Venue updateVenue(Long id, Venue updatedVenue) {
        if (venueRepository.existsById(id)) {
            updatedVenue.setId(id);
            return venueRepository.save(updatedVenue);
        } else {
            throw new IllegalArgumentException("Venue with ID " + id + " does not exist.");
        }
    }

    @PreAuthorize("hasRole('ROLE_ADMIN') or @venueSecurityService.hasAccessToVenue(#id)")
    public void deleteVenue(Long id) {
        if (venueRepository.existsById(id)) {
            venueRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Venue with ID " + id + " does not exist.");
        }
    }
}
