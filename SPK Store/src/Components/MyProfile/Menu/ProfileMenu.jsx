import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import {
    AssignmentOutlined as FileText,
    ShoppingBagOutlined as ShoppingBag,
    LocalShippingOutlined as Truck,
    GppGoodOutlined as ShieldCheck,
    Logout as LogOut,
    AccountCircleOutlined as UserIcon
} from '@mui/icons-material';

const ProfileMenu = () => {
    const [activeItem, setActiveItem] = useState('My orders');

    const menuItems = [
        { id: 'general', label: 'General Overview', icon: FileText },
        { id: 'orders', label: 'My orders', icon: ShoppingBag },
        { id: 'tracking', label: 'Orders Tracking', icon: Truck },
        { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
    ];

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            maxWidth: '363px',
            padding: '20px',
            bgcolor: '#fff',
            fontFamily: 'Poppins, sans-serif',
            
            mt: '10px'
        }}>
            {/* User Section */}
            <Box sx={{
                width: { xs: '100%', sm: '363px' },
                height: { xs: 'auto', sm: '133px' },
                minHeight: '133px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                padding: '0 25px',
                border: '1px solid #D1D1D1',
                borderRadius: '5px',
                bgcolor: '#FFFFFF',
                boxSizing: 'border-box'
            }}>
                <Box sx={{
                    width: '80px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    border: '4px solid #000'
                }}>
                    <UserIcon sx={{ fontSize: 60, color: '#000' }} />
                </Box>
                <Box>
                    <Typography sx={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#333',
                        m: 0,
                        fontFamily: 'Poppins'
                    }}>
                        Hello,
                    </Typography>
                    <Typography sx={{
                        fontSize: '24px',
                        fontWeight: 700,
                        color: '#000',
                        m: 0,
                        fontFamily: 'Poppins'
                    }}>
                        Nirmal Adithya
                    </Typography>
                </Box>
            </Box>

            {/* Menu Items */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {menuItems.map((item) => (
                    <Button
                        key={item.id}
                        onClick={() => setActiveItem(item.label)}
                        startIcon={<item.icon />}
                        sx={{
                            width: { xs: '100%', sm: '363px' },
                            height: '48px',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            gap: '15px',
                            padding: '0 20px',
                            border: '1px solid #D1D1D1',
                            borderRadius: '5px',
                            bgcolor: activeItem === item.label ? '#E8E8E8' : '#FFFFFF',
                            color: activeItem === item.label ? '#000' : '#666',
                            textTransform: 'none',
                            fontSize: '18px',
                            fontWeight: 500,
                            fontFamily: 'Poppins',
                            boxSizing: 'border-box',
                            '& .MuiButton-startIcon': {
                                mr: 1,
                                '& > *:nth-of-type(1)': {
                                    fontSize: 24,
                                }
                            },
                            '&:hover': {
                                bgcolor: activeItem === item.label ? '#DCDCDC' : '#F5F5F5',
                                transform: 'translateX(5px)',
                                transition: 'all 0.3s ease'
                            }
                        }}
                    >
                        {item.label}
                    </Button>
                ))}
            </Box>

            {/* Sign Out */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px',
                padding: '10px 20px',
                cursor: 'pointer',
                mt: '10px',
                width: 'fit-content',
                transition: 'all 0.2s ease',
                '&:hover': {
                    opacity: 0.7,
                    transform: 'translateX(5px)'
                }
            }}>
                <LogOut sx={{ fontSize: 30, color: '#FF4D4F' }} />
                <Typography sx={{
                    whiteSpace: 'nowrap',
                    height: '24px',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: '#FF4D4F',
                    display: 'flex',
                    alignItems: 'center',
                    fontFamily: 'Poppins'
                }}>
                    Sign Out
                </Typography>
            </Box>
        </Box>
    );
};

export default ProfileMenu;
