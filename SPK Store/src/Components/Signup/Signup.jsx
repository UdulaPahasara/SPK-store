import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Link,
    Divider,
    CircularProgress,
    Alert,
    IconButton,
    InputAdornment
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import logoImg from '../../assets/Login/logo.webp';
import { signupUser, googleSignupApi, saveAuthData } from '../../api/authApi';

const Signup = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);
    const handleMouseDownPassword = (e) => e.preventDefault();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!fullName || !email || !password || !confirmPassword) {
            setError('All fields are required.');
            return;
        }
        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }
        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }

        setLoading(true);
        try {
            const data = await signupUser(fullName, email, password);
            setSuccess(data.message || 'Account created! Redirecting to login...');
            setTimeout(() => navigate('/login'), 1500);
        } catch (err) {
            const msg =
                err.response?.data?.message ||
                err.response?.data ||
                'Signup failed. Please try again.';
            setError(typeof msg === 'string' ? msg : 'Signup failed.');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignup = useGoogleLogin({
        onSuccess: async (response) => {
            setLoading(true);
            setError('');
            try {
                const data = await googleSignupApi(response.access_token);
                saveAuthData(data);
                navigate('/home');
            } catch (err) {
                const msg = err.response?.data?.message || 'Google Signup failed. Please try again.';
                setError(typeof msg === 'string' ? msg : 'Google Signup failed.');
            } finally {
                setLoading(false);
            }
        },
        onError: () => {
            setError('Google Signup failed. Please try again.');
        }
    });

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#FFFFFF',
                p: { xs: 1, md: 2 }
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    maxWidth: '500px',
                    minHeight: { xs: 'auto', md: '620px' },
                    bgcolor: '#F2F2F2',
                    borderRadius: '30px',
                    p: { xs: 3, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                    mt: { xs: 2, md: 0 }
                }}
            >
                {/* Logo */}
                <Box
                    component="img"
                    src={logoImg}
                    alt="SPK Logo"
                    sx={{ width: '80px', height: 'auto', mb: 2 }}
                />

                {/* Title */}
                <Box sx={{ position: 'relative', mb: 0.5 }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 700,
                            textAlign: 'center',
                            color: '#000000',
                            fontSize: { xs: '28px', md: '32px' },
                            letterSpacing: '1px'
                        }}
                    >
                        WELCOME
                    </Typography>
                </Box>

                {/* Subtitle */}
                <Typography
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '14px',
                        textAlign: 'center',
                        color: '#666666',
                        mb: 2,
                        maxWidth: '400px',
                        lineHeight: '1.4'
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </Typography>

                {/* Alerts */}
                {error && (
                    <Alert severity="error" sx={{ width: '100%', maxWidth: '500px', mb: 2, borderRadius: '12px' }}>
                        {error}
                    </Alert>
                )}
                {success && (
                    <Alert severity="success" sx={{ width: '100%', maxWidth: '500px', mb: 2, borderRadius: '12px' }}>
                        {success}
                    </Alert>
                )}

                {/* Form */}
                <Box component="form" onSubmit={handleSignup} sx={{ width: '100%', maxWidth: '500px' }}>
                    <TextField
                        fullWidth
                        placeholder="Enter Your Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        variant="outlined"
                        sx={{
                            mb: 2,
                            '& .MuiOutlinedInput-root': {
                                bgcolor: '#FFFFFF',
                                borderRadius: '15px',
                                height: '50px',
                                '& fieldset': { border: 'none' },
                            },
                            '& .MuiInputBase-input': { fontFamily: 'Poppins, sans-serif', fontWeight: 500, px: 3 }
                        }}
                    />

                    <TextField
                        fullWidth
                        placeholder="Enter Your Email Address"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        variant="outlined"
                        sx={{
                            mb: 2,
                            '& .MuiOutlinedInput-root': {
                                bgcolor: '#FFFFFF',
                                borderRadius: '15px',
                                height: '50px',
                                '& fieldset': { border: 'none' },
                            },
                            '& .MuiInputBase-input': { fontFamily: 'Poppins, sans-serif', fontWeight: 500, px: 3 }
                        }}
                    />

                    <Box sx={{ position: 'relative', mb: 2, width: '100%' }}>
                        <TextField
                            fullWidth
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    bgcolor: '#FFFFFF',
                                    borderRadius: '15px',
                                    height: '50px',
                                    pr: 6, // Make room for the absolute icon
                                    '& fieldset': { border: 'none' },
                                },
                                '& .MuiInputBase-input': { fontFamily: 'Poppins, sans-serif', fontWeight: 500, px: 3 }
                            }}
                        />
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            sx={{
                                position: 'absolute',
                                right: 12,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#999'
                            }}
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </Box>

                    <Box sx={{ position: 'relative', mb: 3, width: '100%' }}>
                        <TextField
                            fullWidth
                            type={showConfirmPassword ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    bgcolor: '#FFFFFF',
                                    borderRadius: '15px',
                                    height: '50px',
                                    pr: 6,
                                    '& fieldset': { border: 'none' },
                                },
                                '& .MuiInputBase-input': { fontFamily: 'Poppins, sans-serif', fontWeight: 500, px: 3 }
                            }}
                        />
                        <IconButton
                            aria-label="toggle confirm password visibility"
                            onClick={handleClickShowConfirmPassword}
                            onMouseDown={handleMouseDownPassword}
                            sx={{
                                position: 'absolute',
                                right: 12,
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#999'
                            }}
                        >
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </Box>

                    {/* Sign Up Button */}
                    <Button
                        fullWidth
                        type="submit"
                        variant="contained"
                        disabled={loading}
                        sx={{
                            bgcolor: '#FF7272',
                            color: '#FFFFFF',
                            borderRadius: '15px',
                            height: '50px',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 600,
                            fontSize: '16px',
                            textTransform: 'none',
                            mb: 2,
                            '&:hover': { bgcolor: '#FF5C5C' }
                        }}
                    >
                        {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Sign Up'}
                    </Button>

                    <Typography
                        sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', textAlign: 'center', color: '#333333', mb: 2 }}
                    >
                        Already have an account?{' '}
                        <Link
                            component={RouterLink}
                            to="/login"
                            sx={{ color: '#FF7272', fontWeight: 600, textDecoration: 'none' }}
                        >
                            Sign In
                        </Link>
                    </Typography>

                    {/* Divider */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Divider sx={{ flex: 1, bgcolor: '#E0E0E0' }} />
                        <Typography sx={{ px: 2, color: '#999999', fontSize: '13px' }}>or</Typography>
                        <Divider sx={{ flex: 1, bgcolor: '#E0E0E0' }} />
                    </Box>

                    {/* Google Signup */}
                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={handleGoogleSignup}
                        startIcon={<Box component="img" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" sx={{ width: 20, mr: 1 }} />}
                        sx={{
                            bgcolor: '#FFFFFF',
                            color: '#333333',
                            borderRadius: '15px',
                            height: '50px',
                            fontFamily: 'Poppins, sans-serif',
                            fontWeight: 500,
                            textTransform: 'none',
                            border: 'none',
                            '&:hover': { bgcolor: '#FAFAFA', border: 'none' }
                        }}
                    >
                        Google
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Signup;
