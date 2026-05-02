import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Container } from '@mui/material';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import OneItem from './OneItem';

// Import assets
import cat1 from '../../assets/Home/Caegory/category1.webp';
import cat2 from '../../assets/Home/Caegory/category2.webp';
import cat3 from '../../assets/Home/Caegory/category3.webp';

const cartItems = [
    {
        id: 1,
        title: 'DJI Mavic Pro Drone with 3 Battery',
        price: 6000.00,
        oldPrice: 6500.00,
        img: cat1,
        quantity: 1
    },
    {
        id: 2,
        title: 'GoPro Hero 11 Black Professional',
        price: 6000.00,
        img: cat2,
        quantity: 1
    },
    {
        id: 3,
        title: 'Lexar Professional Memory Card 256GB',
        price: 6000.00,
        oldPrice: 6500.00,
        img: cat3,
        quantity: 2
    },
];

const GotoCart = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ bgcolor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <NavBar />

            <Container maxWidth="xl" sx={{ flex: 1, pt: { xs: 4, md: 8 }, pb: 10, px: { xs: 2, sm: 3, md: 4, lg: 8 } }}>
                {/* Page Title */}
                <Typography variant="h4" sx={{
                    fontWeight: 700,
                    fontFamily: 'Poppins',
                    mb: 5,
                    fontSize: { xs: '24px', md: '30px' },
                    textAlign: { xs: 'center', lg: 'left' }
                }}>
                    Your Cart{' '}
                    <Typography component="span" sx={{ fontSize: '0.6em', color: '#666', ml: 1, fontWeight: 500 }}>
                        ({cartItems.length} items)
                    </Typography>
                </Typography>

                {/* Main Layout: stacked on mobile, side-by-side on desktop */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    gap: 4,
                    alignItems: { xs: 'stretch', lg: 'flex-start' },
                    width: '100%'
                }}>
                    {/* Items List */}
                    <Box sx={{ flex: { xs: '1 1 100%', lg: '0 0 calc(62% - 16px)' } }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, alignItems: { xs: 'center', lg: 'flex-start' }, ml: { xs: '-5px', lg: 0 } }}>
                            {cartItems.map(item => (
                                <OneItem key={item.id} item={item} />
                            ))}
                        </Box>
                    </Box>

                    {/* Price Details */}
                    <Box sx={{ flex: { xs: '1 1 100%', lg: '0 0 38%' } }}>
                        <Box sx={{
                            bgcolor: '#F5F5F5',
                            borderRadius: '5px',
                            p: { xs: 3, md: 4 },
                            width: '100%',
                            boxSizing: 'border-box',
                            position: { lg: 'sticky' },
                            top: '100px'
                        }}>
                            <Typography sx={{
                                fontWeight: 700,
                                fontSize: '20px',
                                fontFamily: 'Poppins',
                                mb: 4,
                                display: 'flex',
                                alignItems: 'baseline',
                                gap: 1
                            }}>
                                Price Details{' '}
                                <Typography component="span" sx={{ fontSize: '13px', color: '#777', fontWeight: 500 }}>
                                    (3 items)
                                </Typography>
                            </Typography>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2.5 }}>
                                <Typography sx={{ color: 'rgba(0,0,0,0.5)', fontFamily: 'Poppins', fontSize: '15px' }}>
                                    Subtotal
                                </Typography>
                                <Typography sx={{ fontWeight: 600, fontFamily: 'Poppins', fontSize: '15px' }}>
                                    LKR 250,300.00
                                </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                                <Typography sx={{ color: 'rgba(0,0,0,0.5)', fontFamily: 'Poppins', fontSize: '15px' }}>
                                    Discount
                                </Typography>
                                <Typography sx={{ fontWeight: 600, fontFamily: 'Poppins', fontSize: '15px' }}>
                                    LKR 2000.00
                                </Typography>
                            </Box>

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                borderTop: '1px solid rgba(0,0,0,0.1)',
                                pt: 3,
                                mb: 5
                            }}>
                                <Typography sx={{ fontWeight: 700, fontSize: '20px', fontFamily: 'Poppins' }}>Total</Typography>
                                <Typography sx={{ fontWeight: 700, fontSize: '20px', fontFamily: 'Poppins' }}>LKR 248,300.00</Typography>
                            </Box>

                            <Button
                                onClick={() => navigate('/checkout')}
                                variant="contained"
                                fullWidth
                                sx={{
                                    bgcolor: '#F66A74',
                                    color: '#fff',
                                    height: '48px',
                                    borderRadius: '5px',
                                    fontSize: '16px',
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    fontFamily: 'Poppins',
                                    transition: 'all 0.3s ease',
                                    '&:hover': { bgcolor: '#e55a64', transform: 'translateY(-2px)' }
                                }}
                            >
                                Checkout
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>

            <Footer />
        </Box>
    );
};

export default GotoCart;
