import React, { useState } from 'react';
import {
    Box, Typography, Badge, IconButton,
    useMediaQuery, useTheme,
    Drawer, List, ListItem, ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';
import { logout as authLogout } from '../../api/authApi';

import logo from '../../assets/Login/logo.webp';
import userIcon from '../../assets/NavBar/user.webp';
import cartIcon from '../../assets/NavBar/Cart.webp';
import CartDrawer from './CartDrawer';

const NavBar = () => {
    const theme = useTheme();
    // Hamburger on phone + tablet (< 900px)
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const navigate = useNavigate();
    const location = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const handleCartToggle = () => setCartOpen(!cartOpen);

    const user = JSON.parse(
        localStorage.getItem('spk_user') || sessionStorage.getItem('spk_user') || 'null'
    );

    const handleUserClick = () => {
        if (user) {
            if (window.confirm('Do you want to logout?')) {
                authLogout();
                window.location.reload();
            }
        } else {
            navigate('/login');
        }
    };

    const navLinks = [
        { title: 'Home', path: '/home' },
        { title: 'Drone', path: '/drones' },
        { title: 'Gimbal', path: '/gimbals' },
        { title: 'Mobile Lens', path: '/mobile-lens' },
        { title: 'Other', path: '/other' },
    ];

    /* Phone drawer */
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Box sx={{ my: 2, display: 'flex', justifyContent: 'center' }}>
                <Box
                    component="img"
                    src={logo}
                    alt="SPK Logo"
                    sx={{ width: '80px', height: 'auto', cursor: 'pointer' }}
                    onClick={() => navigate('/')}
                />
            </Box>
            <List>
                {navLinks.map((item) => (
                    <ListItem key={item.title} disablePadding onClick={() => navigate(item.path)}>
                        <ListItemText
                            primary={item.title}
                            sx={{
                                textAlign: 'center',
                                '& .MuiTypography-root': {
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 600,
                                    fontSize: '15px',
                                    color: location.pathname === item.path ? '#F66A74' : '#000',
                                    py: 0.5,
                                },
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            bgcolor: '#fff',
            borderBottom: '1px solid #EAEAEA',
            position: 'sticky',
            top: 0,
            zIndex: 50,
            boxSizing: 'border-box'
        }}>
            <Box sx={{
                width: '100%',
                boxSizing: 'border-box',
                maxWidth: { xs: '100%', lg: '1440px' },
                height: { xs: '60px', sm: '70px', md: '86px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: { xs: 2, sm: 3, md: 5 },
                gap: { sm: 2, md: 0 },
            }}>

                {/* ── Logo ── */}
                <Box
                    onClick={() => navigate('/')}
                    sx={{
                        width: { xs: '52px', sm: '56px', md: '60px' },
                        flexShrink: 0,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <Box component="img" src={logo} alt="SPK Store Logo" sx={{ width: '100%', height: 'auto' }} />
                </Box>

                {/* ── Nav Links — desktop only (md+) ── */}
                {isDesktop && (
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        // Tighter gap on tablet, wider on desktop
                        gap: { sm: '14px', md: '28px', lg: '36px' },
                        flex: 1,
                        justifyContent: 'center',
                        overflow: 'hidden',
                    }}>
                        {navLinks.map((link) => (
                            <Box
                                key={link.title}
                                onClick={() => navigate(link.path)}
                                sx={{
                                    cursor: 'pointer',
                                    position: 'relative',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    flexShrink: 0,
                                    '&:hover .hover-bar': { width: '100%' },
                                }}
                            >
                                <Typography sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 600,
                                    // Smaller font on tablet, full size on desktop
                                    fontSize: { sm: '12px', md: '14px', lg: '16px' },
                                    color: location.pathname === link.path ? '#F66A74' : '#000',
                                    lineHeight: 1.3,
                                    whiteSpace: 'nowrap',
                                }}>
                                    {link.title}
                                </Typography>
                                {/* Active / hover underline */}
                                <Box
                                    className="hover-bar"
                                    sx={{
                                        width: location.pathname === link.path ? '100%' : '0%',
                                        height: '3px',
                                        bgcolor: '#F66A74',
                                        transition: 'width 0.25s ease',
                                        mt: '3px',
                                        borderRadius: '10px',
                                    }}
                                />
                            </Box>
                        ))}
                    </Box>
                )}

                {/* ── Right: User + Cart (+ hamburger on phone) ── */}
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: { xs: 1.5, sm: 2, md: 3 },
                    flexShrink: 0,
                }}>
                    {/* User */}
                    <Box
                        onClick={handleUserClick}
                        sx={{ display: 'flex', alignItems: 'center', gap: 0.75, cursor: 'pointer' }}
                    >
                        <Box
                            component="img"
                            src={userIcon}
                            alt="User Icon"
                            sx={{
                                width: { xs: '24px', sm: '26px', md: '31px' },
                                height: { xs: '27px', sm: '29px', md: '35px' },
                            }}
                        />
                        {/* Welcome text — desktop only */}
                        {isDesktop && (
                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600, fontSize: '11px', color: '#F66A74', lineHeight: 1 }}>
                                    {user ? 'Welcome,' : 'Welcome'}
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500, fontSize: '13px', color: '#000', mt: 0.5, lineHeight: 1 }}>
                                    {user ? user.fullName : 'Log In / Sign Up'}
                                </Typography>
                            </Box>
                        )}
                    </Box>

                    {/* Cart */}
                    <IconButton
                        onClick={handleCartToggle}
                        sx={{
                            p: 0,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            '&:hover': { bgcolor: 'transparent' }
                        }}
                    >
                        <Badge
                            badgeContent={3}
                            sx={{
                                '& .MuiBadge-badge': {
                                    bgcolor: '#F66A74',
                                    color: '#fff',
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 700,
                                    minWidth: '18px',
                                    height: '18px',
                                    fontSize: '10px',
                                    borderRadius: '50%',
                                },
                            }}
                        >
                            <Box
                                component="img"
                                src={cartIcon}
                                alt="Cart Icon"
                                sx={{
                                    width: { xs: '26px', sm: '28px', md: '35px' },
                                    height: { xs: '26px', sm: '28px', md: '35px' },
                                }}
                            />
                        </Badge>
                    </IconButton>

                    {/* Hamburger — phone + tablet (< 900px) */}
                    {isMobile && (
                        <IconButton
                            aria-label="open menu"
                            onClick={handleDrawerToggle}
                            sx={{ color: '#000', p: 0.5, ml: 0.5 }}
                        >
                            <MenuIcon fontSize="medium" />
                        </IconButton>
                    )}
                </Box>
            </Box>

            {/* Phone Drawer */}
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

            <CartDrawer open={cartOpen} onClose={handleCartToggle} />
        </Box>
    );
};

export default NavBar;
