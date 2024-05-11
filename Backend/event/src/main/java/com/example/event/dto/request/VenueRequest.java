package com.example.event.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class VenueRequest {
    private String venueName ;
    private int capacity ;
    private String location ;
    private String phoneNo ;
    private String email ;
    private String imageUrl ;
}
