// Auth API — wraps all login/signup calls to the Spring Boot backend
import axiosInstance from '../config/axiosConfig';

const AUTH_URL = '/api/auth';

/**
 * Login with email + password.
 * Returns { token, type, email, role } on success.
 */
export const loginUser = async (email, password, rememberMe) => {
    const response = await axiosInstance.post(`${AUTH_URL}/login`, { email, password, rememberMe });
    return response.data;
};

/**
 * Register a new user.
 * Returns { message } on success.
 */
export const signupUser = async (fullName, email, password) => {
    const response = await axiosInstance.post(`${AUTH_URL}/signup`, { fullName, email, password });
    return response.data;
};

/**
 * Google Sign-Up: creates a new account. Rejects if email already exists.
 */
export const googleSignupApi = async (accessToken) => {
    const response = await axiosInstance.post('/api/auth/google/signup', { idToken: accessToken });
    return response.data;
};

/**
 * Google Sign-In: logs in an existing user. Rejects if email not found.
 */
export const googleLogin = async (accessToken) => {
    const response = await axiosInstance.post('/api/auth/google/login', { idToken: accessToken });
    return response.data;
};

export const forgotPassword = async (email) => {
    const response = await axiosInstance.post('/api/auth/forgot-password', { email });
    return response.data;
};

export const resetPassword = async (email, otp, newPassword) => {
    const response = await axiosInstance.post('/api/auth/reset-password', { email, otp, newPassword });
    return response.data;
};

/**
 * Persist JWT + user info after successful login.
 * Uses localStorage if rememberMe is true, sessionStorage otherwise.
 */
export const saveAuthData = (data, rememberMe = false) => {
    const storage = rememberMe ? localStorage : sessionStorage;
    storage.setItem('spk_token', data.token);
    storage.setItem('spk_user', JSON.stringify({
        fullName: data.fullName,
        email: data.email,
        role: data.role,
    }));
};

/**
 * Clear auth state (for logout) — clears both storages.
 */
export const logout = () => {
    localStorage.removeItem('spk_token');
    localStorage.removeItem('spk_user');
    sessionStorage.removeItem('spk_token');
    sessionStorage.removeItem('spk_user');
};

/**
 * Check if user is currently authenticated.
 * Checks both localStorage (remember me) and sessionStorage (session login).
 */
export const isAuthenticated = () => {
    return !!localStorage.getItem('spk_token') || !!sessionStorage.getItem('spk_token');
};
