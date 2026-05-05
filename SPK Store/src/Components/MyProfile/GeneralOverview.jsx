import React, { useState } from 'react';
import { Box, Typography, Button, TextField, IconButton, Drawer } from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import ProfileMenu from './Menu/ProfileMenu';

const CustomTextField = ({ label, placeholder, defaultValue, type = 'text', readOnly = false }) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', mb: '20px' }}>
        <Typography sx={{ fontSize: '14px', fontWeight: 500, fontFamily: 'Poppins, sans-serif' }}>
            {label}
        </Typography>
        <Box sx={{
            width: { xs: '100%', sm: '333px' },
            height: '30px',
            border: '0.5px solid #D1D1D1',
            borderRadius: '2px',
            px: '10px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <input
                type={type}
                defaultValue={defaultValue}
                placeholder={placeholder}
                readOnly={readOnly}
                style={{
                    width: '100%',
                    border: 'none',
                    outline: 'none',
                    fontSize: '14px',
                    fontFamily: 'Poppins, sans-serif',
                    color: '#666',
                    background: 'transparent'
                }}
            />
        </Box>
    </Box>
);

const GeneralOverview = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#fff', overflowX: 'hidden' }}>
            <NavBar />

            {/* Mobile Hamburger Button */}
            <Box sx={{ display: { xs: 'flex', lg: 'none' }, px: 1, mt: 0, p: 1 }}>
                <IconButton onClick={handleDrawerToggle} sx={{ bgcolor: '#F66A74', color: '#fff', '&:hover': { bgcolor: '#e05963' } }}>
                    <MenuIcon />
                </IconButton>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                mb: '60px',
                gap: { xs: '20px', lg: '34px' }, // 506 - (109 + 363) = 34
                alignItems: { xs: 'center', lg: 'flex-start' }
            }}>
                {/* Desktop Profile Menu */}
                <Box sx={{ display: { xs: 'none', lg: 'block' } }}>
                    <ProfileMenu />
                </Box>

                {/* Mobile Profile Menu Drawer */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', lg: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box' },
                    }}
                >
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                        <IconButton onClick={handleDrawerToggle}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <ProfileMenu />
                </Drawer>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    mt: { xs: 0, lg: '29px' }, // Matching ProfileMenu mt
                    width: '100%',
                    maxWidth: '814px',
                    px: { xs: 2, lg: 0 },
                    boxSizing: 'border-box'
                }}>

                    {/* General Overview Section */}
                    <Box sx={{
                        width: 'auto',
                        maxWidth: '814px',
                        height: 'auto',
                        minHeight: { lg: '407px' },
                        border: '1px solid #D1D1D1',
                        borderRadius: '5px',
                        padding: { xs: '20px', lg: '30px 40px' },
                        boxSizing: 'border-box',

                    }}>
                        <Typography sx={{ fontSize: '24px', fontWeight: 700, color: '#F66A74', mb: 3, fontFamily: 'Poppins, sans-serif' }}>
                            General Overview
                        </Typography>
                        <Typography sx={{ fontSize: '18px', fontWeight: 700, mb: 3, fontFamily: 'Poppins, sans-serif' }}>
                            Personal information
                        </Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            <CustomTextField label="First Name" defaultValue="Nirmal" />
                            <CustomTextField label="Last Name" defaultValue="Adithya" />
                            <CustomTextField label="Contact Number" defaultValue="0761105657" />
                            <CustomTextField label="Email" defaultValue="nirmaladithya@gmail.com" />
                            <CustomTextField label="Date of Birth" defaultValue="2004/02/23" />

                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', mb: '20px' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: { xs: '100%', sm: '333px' } }}>
                                    <Typography sx={{ fontSize: '14px', fontWeight: 500, fontFamily: 'Poppins, sans-serif' }}>
                                        Shipping Address
                                    </Typography>
                                    <Typography sx={{ fontSize: '12px', color: '#666', textDecoration: 'underline', cursor: 'pointer', fontFamily: 'Poppins, sans-serif' }}>
                                        Set as default address
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    width: { xs: '100%', sm: '333px' },
                                    height: '30px',
                                    border: '0.5px solid #D1D1D1',
                                    borderRadius: '2px',
                                    px: '10px',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <input
                                        defaultValue="Wellampitiya, Western Province 10620 No. 102"
                                        style={{ width: '100%', border: 'none', outline: 'none', fontSize: '14px', fontFamily: 'Poppins, sans-serif', color: '#666', textOverflow: 'ellipsis' }}
                                    />
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', mt: 2 }}>
                            <Button variant="outlined" sx={{
                                width: '140px',
                                height: '35px',
                                borderColor: '#F66A74',
                                color: '#F66A74',
                                fontWeight: 600,
                                fontFamily: 'Poppins, sans-serif',
                                '&:hover': { borderColor: '#F66A74', bgcolor: 'rgba(246, 106, 116, 0.05)' }
                            }}>
                                CANCEL
                            </Button>
                            <Button variant="contained" sx={{
                                width: '140px',
                                height: '35px',
                                bgcolor: '#F66A74',
                                fontWeight: 600,
                                fontFamily: 'Poppins, sans-serif',
                                boxShadow: 'none',
                                '&:hover': { bgcolor: '#F66A74', opacity: 0.9, boxShadow: 'none' }
                            }}>
                                SAVE
                            </Button>
                        </Box>
                    </Box>

                    {/* Change Password Section */}
                    <Box sx={{
                        width: 'auto',
                        maxWidth: '814px',
                        height: 'auto',
                        minHeight: { lg: '231px' },
                        border: '1px solid #D1D1D1',
                        borderRadius: '5px',
                        padding: { xs: '20px', lg: '30px 40px' },
                        boxSizing: 'border-box',

                    }}>
                        <Typography sx={{ fontSize: '18px', fontWeight: 700, mb: 3, fontFamily: 'Poppins, sans-serif' }}>
                            Change Password
                        </Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            <CustomTextField label="Old Password" type="password" defaultValue="********" />
                            <CustomTextField label="New Password" type="password" defaultValue="********" />
                            <CustomTextField label="Confirm Password" type="password" defaultValue="********" />

                            {/* Empty box to keep layout aligned for the action buttons */}
                            <Box sx={{ width: { xs: '100%', sm: '333px' }, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', gap: '20px', pb: '20px' }}>
                                <Button variant="outlined" sx={{
                                    width: '140px',
                                    height: '35px',
                                    borderColor: '#F66A74',
                                    color: '#F66A74',
                                    fontWeight: 600,
                                    fontFamily: 'Poppins, sans-serif',
                                    '&:hover': { borderColor: '#F66A74', bgcolor: 'rgba(246, 106, 116, 0.05)' }
                                }}>
                                    CANCEL
                                </Button>
                                <Button variant="contained" sx={{
                                    width: '140px',
                                    height: '35px',
                                    bgcolor: '#F66A74',
                                    fontWeight: 600,
                                    fontFamily: 'Poppins, sans-serif',
                                    boxShadow: 'none',
                                    '&:hover': { bgcolor: '#F66A74', opacity: 0.9, boxShadow: 'none' }
                                }}>
                                    SAVE
                                </Button>
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default GeneralOverview;
