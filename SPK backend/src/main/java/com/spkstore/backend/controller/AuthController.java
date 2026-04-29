package com.spkstore.backend.controller;

import com.spkstore.backend.models.User;
import com.spkstore.backend.dto.request.LoginRequest;
import com.spkstore.backend.dto.request.SignupRequest;
import com.spkstore.backend.dto.request.TokenRequest;
import com.spkstore.backend.dto.request.ForgotPasswordRequest;
import com.spkstore.backend.dto.request.ResetPasswordRequest;
import com.spkstore.backend.dto.response.JwtResponse;
import com.spkstore.backend.dto.response.MessageResponse;
import com.spkstore.backend.security.JwtUtils;
import com.spkstore.backend.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private AuthService authService;

    /**
     * POST /api/auth/google/signup
     * Creates a new account via Google. Fails if email already exists.
     */
    @PostMapping("/google/signup")
    public ResponseEntity<?> googleSignup(@Valid @RequestBody TokenRequest tokenRequest) {
        try {
            User user = authService.googleSignup(tokenRequest.getIdToken());
            String jwt = jwtUtils.generateTokenFromEmail(user.getEmail(), true);
            return ResponseEntity.ok(new JwtResponse(
                    jwt,
                    user.getId(),
                    user.getFullName(),
                    user.getEmail(),
                    user.getRole().name()));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(new MessageResponse(e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new MessageResponse("Google signup failed: " + e.getMessage()));
        }
    }

    /**
     * POST /api/auth/google/login
     * Logs in an existing user via Google. Fails if email not found.
     */
    @PostMapping("/google/login")
    public ResponseEntity<?> googleLogin(@Valid @RequestBody TokenRequest tokenRequest) {
        try {
            User user = authService.googleLogin(tokenRequest.getIdToken());
            String jwt = jwtUtils.generateTokenFromEmail(user.getEmail(), true);
            return ResponseEntity.ok(new JwtResponse(
                    jwt, user.getId(), user.getFullName(), user.getEmail(), user.getRole().name()));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new MessageResponse(e.getMessage()));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(new MessageResponse("Google login failed: " + e.getMessage()));
        }
    }

    /**
     * POST /api/auth/login
     * Authenticates a user and returns a JWT token.
     */
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication, loginRequest.isRememberMe());

        org.springframework.security.core.userdetails.User userDetails = (org.springframework.security.core.userdetails.User) authentication
                .getPrincipal();

        // Fetch full user details to include in response
        User user = authService.getUserByEmail(userDetails.getUsername());

        return ResponseEntity.ok(new JwtResponse(
                jwt,
                user.getId(),
                user.getFullName(),
                user.getEmail(),
                user.getRole().name()));

    }

    /**
     * POST /api/auth/signup
     * Registers a new user.
     */
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignupRequest signupRequest) {
        try {
            User user = authService.registerUser(signupRequest);
            return ResponseEntity.ok(new MessageResponse(
                    "User registered successfully! Welcome, " + user.getFullName() + "."));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }

    /**
     * POST /api/auth/forgot-password
     * Generates OTP and sends email.
     */
    @PostMapping("/forgot-password")
    public ResponseEntity<?> forgotPassword(@Valid @RequestBody ForgotPasswordRequest request) {
        try {
            authService.processForgotPassword(request.getEmail());
            return ResponseEntity.ok(new MessageResponse("OTP sent to your email."));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }

    /**
     * POST /api/auth/reset-password
     * Verifies OTP and updates password.
     */
    @PostMapping("/reset-password")
    public ResponseEntity<?> resetPassword(@Valid @RequestBody ResetPasswordRequest request) {
        try {
            authService.resetPassword(request.getEmail(), request.getOtp(), request.getNewPassword());
            return ResponseEntity.ok(new MessageResponse("Password updated successfully."));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(new MessageResponse(e.getMessage()));
        }
    }
}
