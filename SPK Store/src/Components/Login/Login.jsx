import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Checkbox,
    FormControlLabel,
    Link,
    Divider,
    CircularProgress,
    Alert,
    Dialog,
    DialogContent,
    IconButton,
    InputAdornment
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useGoogleLogin } from '@react-oauth/google';
import logoImg from '../../assets/Login/logo.webp';
import { loginUser, saveAuthData, googleLogin, forgotPassword, resetPassword, isAuthenticated } from '../../api/authApi';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (e) => e.preventDefault();

    React.useEffect(() => {
        // Auto-redirect if already logged in
        if (isAuthenticated()) {
            navigate('/home');
            return;
        }

        const rememberedEmail = localStorage.getItem('spk_remembered_email');
        if (rememberedEmail) {
            setEmail(rememberedEmail);
            setRememberMe(true);
        }
    }, [navigate]);

    // Forgot Password Flow State
    const [openForgot, setOpenForgot] = useState(false);
    const [resetPhase, setResetPhase] = useState(1); // 1: Email, 2: OTP, 3: New Pass, 4: Success
    const [resetEmail, setResetEmail] = useState('');
    const [otpCode, setOtpCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const [resetError, setResetError] = useState('');

    const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
    const handleClickShowConfirmNewPassword = () => setShowConfirmNewPassword((show) => !show);

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Please enter your email and password.');
            return;
        }

        setLoading(true);
        try {
            const data = await loginUser(email, password, rememberMe);
            if (rememberMe) {
                localStorage.setItem('spk_remembered_email', email);
            } else {
                localStorage.removeItem('spk_remembered_email');
            }
            saveAuthData(data, rememberMe);  // uses localStorage if rememberMe, else sessionStorage
            navigate('/home');             // redirect after login
        } catch (err) {
            const msg =
                err.response?.data?.message ||
                err.response?.data ||
                'Login failed. Please check your credentials.';
            setError(typeof msg === 'string' ? msg : 'Login failed.');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: async (response) => {
            setLoading(true);
            setError('');
            try {
                const data = await googleLogin(response.access_token);
                saveAuthData(data, false);
                navigate('/home');
            } catch (err) {
                const msg = err.response?.data?.message || 'Google Login failed. Please try again.';
                setError(typeof msg === 'string' ? msg : 'Google Login failed.');
            } finally {
                setLoading(false);
            }
        },
        onError: () => {
            setError('Google Login failed. Please try again.');
        }
    });

    const handleOpenForgot = (e) => {
        e.preventDefault();
        setOpenForgot(true);
        setResetPhase(1);
        setResetError('');
    };

    const handleCloseForgot = () => {
        setOpenForgot(false);
        setResetEmail('');
        setOtpCode('');
        setNewPassword('');
        setConfirmNewPassword('');
        setResetError('');
    };

    const handleNextPhase = async () => {
        setResetError('');
        if (resetPhase === 1) {
            if (!resetEmail) {
                setResetError('Please enter your email.');
                return;
            }
            setLoading(true);
            try {
                await forgotPassword(resetEmail);
                setResetPhase(2);
            } catch (err) {
                setResetError(err.response?.data?.message || 'Failed to send OTP. Please try again.');
            } finally {
                setLoading(false);
            }
        } else if (resetPhase === 2) {
            if (otpCode.length !== 6) {
                setResetError('Please enter a valid 6-digit code.');
                return;
            }
            // Frontend validation only, backend verifies in the next step
            setResetPhase(3);
        } else if (resetPhase === 3) {
            if (!newPassword || !confirmNewPassword) {
                setResetError('Please fill in all fields.');
                return;
            }
            if (newPassword !== confirmNewPassword) {
                setResetError('Passwords do not match.');
                return;
            }
            if (newPassword.length < 6) {
                setResetError('Password must be at least 6 characters.');
                return;
            }
            setLoading(true);
            try {
                await resetPassword(resetEmail, otpCode, newPassword);
                setResetPhase(4);
            } catch (err) {
                setResetError(err.response?.data?.message || 'Failed to reset password.');
            } finally {
                setLoading(false);
            }
        }
    };

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
                    minHeight: { xs: 'auto', md: '580px' },
                    bgcolor: '#F2F2F2',
                    borderRadius: '30px',
                    p: { xs: 3, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
                    position: 'relative',
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
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        textAlign: 'center',
                        color: '#000000',
                        mb: 0.5,
                        fontSize: { xs: '24px', md: '28px' }
                    }}
                >
                    WELCOME BACK
                </Typography>

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

                {/* Error Alert */}
                {error && (
                    <Alert severity="error" sx={{ width: '100%', maxWidth: '500px', mb: 2, borderRadius: '12px' }}>
                        {error}
                    </Alert>
                )}

                {/* Form */}
                <Box component="form" onSubmit={handleLogin} sx={{ width: '100%', maxWidth: '500px' }}>
                    <TextField
                        fullWidth
                        placeholder="E-mail"
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
                            '& .MuiInputBase-input': {
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 500,
                                px: 3
                            }
                        }}
                    />

                    <Box sx={{ position: 'relative', mb: 1.5, width: '100%' }}>
                        <TextField
                            fullWidth
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            variant="outlined"
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    bgcolor: '#FFFFFF',
                                    borderRadius: '15px',
                                    height: '50px',
                                    pr: 6, // space for icon
                                    '& fieldset': { border: 'none' },
                                },
                                '& .MuiInputBase-input': {
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 500,
                                    px: 3
                                }
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

                    {/* Remember me & Forgot Password */}
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    size="small"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    sx={{ color: '#D1D1D1', '&.Mui-checked': { color: '#FF7272' } }}
                                />
                            }
                            label={
                                <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: '#999999' }}>
                                    Remember me
                                </Typography>
                            }
                        />
                        <Link
                            href="#"
                            onClick={handleOpenForgot}
                            sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', color: '#FF7272', textDecoration: 'none', fontWeight: 500, cursor: 'pointer' }}
                        >
                            Forgot your password?
                        </Link>
                    </Box>

                    {/* Sign In Button */}
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
                        {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Sign In'}
                    </Button>

                    <Typography
                        sx={{ fontFamily: 'Poppins, sans-serif', fontSize: '13px', textAlign: 'center', color: '#333333', mb: 2 }}
                    >
                        Don't have an account?{' '}
                        <Link
                            component={RouterLink}
                            to="/signup"
                            sx={{ color: '#FF7272', fontWeight: 600, textDecoration: 'none' }}
                        >
                            Sign Up
                        </Link>
                    </Typography>

                    {/* Divider */}
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Divider sx={{ flex: 1, bgcolor: '#E0E0E0' }} />
                        <Typography sx={{ px: 2, color: '#999999', fontSize: '13px' }}>or</Typography>
                        <Divider sx={{ flex: 1, bgcolor: '#E0E0E0' }} />
                    </Box>

                    {/* Google Login */}
                    <Button
                        fullWidth
                        variant="outlined"
                        onClick={handleGoogleLogin}
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

            {/* Forgot Password Dialog */}
            <Dialog
                open={openForgot}
                onClose={handleCloseForgot}
                PaperProps={{
                    sx: {
                        borderRadius: '25px',
                        width: '100%',
                        maxWidth: '450px',
                        p: 1
                    }
                }}
            >
                <IconButton
                    onClick={handleCloseForgot}
                    sx={{ position: 'absolute', right: 16, top: 16, color: '#999999' }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent sx={{ p: { xs: 3, md: 4 }, textAlign: 'center' }}>
                    {resetPhase === 1 && (
                        <Box>
                            <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 700, mb: 1 }}>Forgot Password?</Typography>
                            <Typography sx={{ fontFamily: 'Poppins', color: '#666', mb: 3, fontSize: '14px' }}>
                                Enter your email to receive a 6-digit verification code.
                            </Typography>
                            {resetError && <Alert severity="error" sx={{ mb: 2, borderRadius: '10px' }}>{resetError}</Alert>}
                            <TextField
                                fullWidth
                                placeholder="E-mail"
                                value={resetEmail}
                                onChange={(e) => setResetEmail(e.target.value)}
                                sx={{
                                    mb: 3,
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: '#F2F2F2',
                                        borderRadius: '12px',
                                        height: '50px',
                                        '& fieldset': { border: 'none' },
                                    }
                                }}
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={handleNextPhase}
                                disabled={loading}
                                sx={{
                                    bgcolor: '#FF7272',
                                    height: '50px',
                                    borderRadius: '12px',
                                    fontFamily: 'Poppins',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    '&:hover': { bgcolor: '#FF5C5C' }
                                }}
                            >
                                {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Continue'}
                            </Button>
                        </Box>
                    )}

                    {resetPhase === 2 && (
                        <Box>
                            <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 700, mb: 1 }}>Verify Email</Typography>
                            <Typography sx={{ fontFamily: 'Poppins', color: '#666', mb: 3, fontSize: '14px' }}>
                                We've sent a code to <b>{resetEmail}</b>. Enter it below.
                            </Typography>
                            {resetError && <Alert severity="error" sx={{ mb: 2, borderRadius: '10px' }}>{resetError}</Alert>}
                            <TextField
                                fullWidth
                                placeholder="6-digit code"
                                value={otpCode}
                                onChange={(e) => setOtpCode(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
                                inputProps={{ maxLength: 6 }}
                                sx={{
                                    mb: 3,
                                    '& .MuiOutlinedInput-root': {
                                        bgcolor: '#F2F2F2',
                                        borderRadius: '12px',
                                        height: '50px',
                                        '& fieldset': { border: 'none' },
                                    },
                                    '& .MuiInputBase-input': { textAlign: 'center', letterSpacing: '4px', fontWeight: 600 }
                                }}
                            />
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={handleNextPhase}
                                disabled={loading}
                                sx={{
                                    bgcolor: '#FF7272',
                                    height: '50px',
                                    borderRadius: '12px',
                                    fontFamily: 'Poppins',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    '&:hover': { bgcolor: '#FF5C5C' }
                                }}
                            >
                                {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Verify Code'}
                            </Button>
                        </Box>
                    )}

                    {resetPhase === 3 && (
                        <Box>
                            <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 700, mb: 1 }}>Create New Password</Typography>
                            <Typography sx={{ fontFamily: 'Poppins', color: '#666', mb: 3, fontSize: '14px' }}>
                                Set a new, strong password for your account.
                            </Typography>
                            {resetError && <Alert severity="error" sx={{ mb: 2, borderRadius: '10px' }}>{resetError}</Alert>}
                            <Box sx={{ position: 'relative', mb: 2, width: '100%' }}>
                                <TextField
                                    fullWidth
                                    type={showNewPassword ? 'text' : 'password'}
                                    placeholder="New Password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            bgcolor: '#F2F2F2',
                                            borderRadius: '12px',
                                            height: '50px',
                                            pr: 6,
                                            '& fieldset': { border: 'none' },
                                        },
                                        '& .MuiInputBase-input': {
                                            px: 3
                                        }
                                    }}
                                />
                                <IconButton
                                    aria-label="toggle new password visibility"
                                    onClick={handleClickShowNewPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    sx={{
                                        position: 'absolute',
                                        right: 12,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: '#999'
                                    }}
                                >
                                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </Box>
                            <Box sx={{ position: 'relative', mb: 3, width: '100%' }}>
                                <TextField
                                    fullWidth
                                    type={showConfirmNewPassword ? 'text' : 'password'}
                                    placeholder="Confirm New Password"
                                    value={confirmNewPassword}
                                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            bgcolor: '#F2F2F2',
                                            borderRadius: '12px',
                                            height: '50px',
                                            pr: 6,
                                            '& fieldset': { border: 'none' },
                                        },
                                        '& .MuiInputBase-input': {
                                            px: 3
                                        }
                                    }}
                                />
                                <IconButton
                                    aria-label="toggle confirm new password visibility"
                                    onClick={handleClickShowConfirmNewPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    sx={{
                                        position: 'absolute',
                                        right: 12,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        color: '#999'
                                    }}
                                >
                                    {showConfirmNewPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </Box>
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={handleNextPhase}
                                disabled={loading}
                                sx={{
                                    bgcolor: '#FF7272',
                                    height: '50px',
                                    borderRadius: '12px',
                                    fontFamily: 'Poppins',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    '&:hover': { bgcolor: '#FF5C5C' }
                                }}
                            >
                                {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Reset Password'}
                            </Button>
                        </Box>
                    )}

                    {resetPhase === 4 && (
                        <Box>
                            <Box sx={{ color: '#4CAF50', mb: 2 }}>
                                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                            </Box>
                            <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 700, mb: 1 }}>Success!</Typography>
                            <Typography sx={{ fontFamily: 'Poppins', color: '#666', mb: 4, fontSize: '14px' }}>
                                Your password has been reset successfully. You can now sign in with your new password.
                            </Typography>
                            <Button
                                fullWidth
                                variant="contained"
                                onClick={handleCloseForgot}
                                sx={{
                                    bgcolor: '#000000',
                                    height: '50px',
                                    borderRadius: '12px',
                                    fontFamily: 'Poppins',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    '&:hover': { bgcolor: '#333333' }
                                }}
                            >
                                Back to Login
                            </Button>
                        </Box>
                    )}
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default Login;
