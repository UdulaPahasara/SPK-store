package com.spkstore.backend.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.spkstore.backend.models.Role;
import com.spkstore.backend.models.User;
import com.spkstore.backend.dto.request.SignupRequest;
import com.spkstore.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.UUID;

import java.util.Random;
import java.time.LocalDateTime;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private EmailService emailService;

    /**
     * Google Sign-Up: creates a new user from Google account.
     * Throws if the email already exists in the database.
     */
    public User googleSignup(String accessToken) {
        String googleUserInfoUrl = "https://www.googleapis.com/oauth2/v3/userinfo?access_token=" + accessToken;
        RestTemplate restTemplate = new RestTemplate();
        try {
            JsonNode payload = restTemplate.getForObject(googleUserInfoUrl, JsonNode.class);
            if (payload == null || !payload.has("email")) {
                throw new IllegalArgumentException("Invalid Google Access Token");
            }

            String email = payload.get("email").asText();
            String name = payload.has("name") ? payload.get("name").asText() : "Google User";

            // Reject if email already registered
            if (userRepository.existsByEmail(email)) {
                throw new IllegalArgumentException(
                        "An account with this Google email already exists. Please Sign In instead.");
            }

            // Create new user
            User newUser = new User();
            newUser.setEmail(email);
            newUser.setFullName(name);
            newUser.setPassword(passwordEncoder.encode(UUID.randomUUID().toString()));
            newUser.setRole(Role.ROLE_USER);
            return userRepository.save(newUser);
        } catch (IllegalArgumentException e) {
            throw e;
        } catch (Exception e) {
            throw new IllegalArgumentException("Google verification failed: " + e.getMessage());
        }
    }

    /**
     * Google Sign-In: logs in an existing user.
     * Throws if the email is not found in the database.
     */
    public User googleLogin(String accessToken) {
        String googleUserInfoUrl = "https://www.googleapis.com/oauth2/v3/userinfo?access_token=" + accessToken;
        RestTemplate restTemplate = new RestTemplate();
        try {
            JsonNode payload = restTemplate.getForObject(googleUserInfoUrl, JsonNode.class);
            if (payload == null || !payload.has("email")) {
                throw new IllegalArgumentException("Invalid Google Access Token");
            }

            String email = payload.get("email").asText();

            // Reject if email not registered
            return userRepository.findByEmail(email)
                    .orElseThrow(() -> new IllegalArgumentException(
                            "No account found with this Google email. Please Sign Up first."));
        } catch (IllegalArgumentException e) {
            throw e;
        } catch (Exception e) {
            throw new IllegalArgumentException("Google verification failed: " + e.getMessage());
        }
    }

    /**
     * Generates a 6-digit OTP, saves it to the user, and sends an email.
     */
    public void processForgotPassword(String email) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("No account found with that email."));

        String otp = String.format("%06d", new Random().nextInt(999999));
        user.setOtpCode(otp);
        user.setOtpExpiry(LocalDateTime.now().plusMinutes(5));
        userRepository.save(user);

        emailService.sendOtpEmail(email, otp);
    }

    /**
     * Verifies the OTP and updates the password.
     */
    public void resetPassword(String email, String otp, String newPassword) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("No account found with that email."));

        if (user.getOtpCode() == null || !user.getOtpCode().equals(otp)) {
            throw new IllegalArgumentException("Invalid verification code.");
        }

        if (user.getOtpExpiry().isBefore(LocalDateTime.now())) {
            throw new IllegalArgumentException("Verification code has expired.");
        }

        user.setPassword(passwordEncoder.encode(newPassword));
        user.setOtpCode(null); // Clear OTP after success
        user.setOtpExpiry(null);
        userRepository.save(user);
    }

    /**
     * Registers a new user.
     * 
     * @return the saved User entity
     * @throws IllegalArgumentException if email already exists
     */
    public User registerUser(SignupRequest signupRequest) {
        if (userRepository.existsByEmail(signupRequest.getEmail())) {
            throw new IllegalArgumentException("Email is already in use!");
        }

        User user = new User();
        user.setFullName(signupRequest.getFullName());
        user.setEmail(signupRequest.getEmail());
        user.setPassword(passwordEncoder.encode(signupRequest.getPassword()));
        user.setRole(Role.ROLE_USER);

        return userRepository.save(user);
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new IllegalArgumentException("User not found: " + email));
    }
}
