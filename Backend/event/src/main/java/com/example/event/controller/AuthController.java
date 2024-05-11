package com.example.event.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.event.dto.request.AuthRequest;
import com.example.event.dto.request.UserRequest;
import com.example.event.dto.response.AuthRespose;
import com.example.event.dto.response.UserResponse;
import com.example.event.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserService  service;

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(
        @RequestBody UserRequest request
    ){
        return ResponseEntity.ok(service.register(request));
    }
    @PostMapping("/login")
    public ResponseEntity<AuthRespose> register(
        @RequestBody AuthRequest request
    ){
        return ResponseEntity.ok(service.authenticate(request));
    }
}
