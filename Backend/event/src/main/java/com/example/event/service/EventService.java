package com.example.event.service;

import com.example.event.model.Event;
import com.example.event.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN') or @eventSecurityService.hasAccessToEvent(#id)")
    public Optional<Event> getEventById(Long id) {
        return eventRepository.findById(id);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }

    @PreAuthorize("hasRole('ROLE_ADMIN') or @eventSecurityService.hasAccessToEvent(#id)")
    public Event updateEvent(Long id, Event updatedEvent) {
        if (eventRepository.existsById(id)) {
            updatedEvent.setId(id);
            return eventRepository.save(updatedEvent);
        } else {
            throw new IllegalArgumentException("Event with ID " + id + " does not exist.");
        }
    }

    @PreAuthorize("hasRole('ROLE_ADMIN') or @eventSecurityService.hasAccessToEvent(#id)")
    public void deleteEvent(Long id) {
        if (eventRepository.existsById(id)) {
            eventRepository.deleteById(id);
        } else {
            throw new IllegalArgumentException("Event with ID " + id + " does not exist.");
        }
    }
}

