import React from 'react';
import { Box, Typography, Grid, Container, Divider } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import DroneCard from '../Drone/droneCard';

// Sample images for related products
import d1 from '../../assets/Drone/Drones/Rectangle 609.webp';
import d2 from '../../assets/Drone/Drones/Rectangle 609 (1).webp';
import d3 from '../../assets/Drone/Drones/Rectangle 609 (2).webp';
import d4 from '../../assets/Drone/Drones/Rectangle 609 (3).webp';

const Confirmation = () => {
    const orderData = {
        orderNumber: '#234-563-345',
        timePlaced: '27 apr 2024 at 12:51:21 PM',
        total: 'LKR 200,545.00',
        shipping: {
            name: 'Amal Perera',
            address: 'Wellampitiya, Western Province 10620\nNo. 102/6, Donald Perera Mawatha,\nKohilawatta, Sri Lanka',
            phone: '0761105657'
        },
        payment: {
            itemsCount: 1,
            itemsPrice: 'LKR 400,000',
            shippingFee: 'LKR 1000',
            saved: 'LKR 700',
            orderTotal: 'LKR 401,000'
        }
    };

    const relatedProducts = [
        { id: 1, name: 'DJI Mavic Pro Drone with 3 Battery', price: 379500, originalPrice: 399500, img: d1 },
        { id: 2, name: 'DJI Mavic Mini Drone - White', price: 88000, originalPrice: null, img: d2 },
        { id: 3, name: 'DJI Mavic Pro Drone with 3 Battery', price: 379500, originalPrice: 399500, img: d3 },
        { id: 4, name: 'DJI Mavic Pro Drone with 3 Battery', price: 379500, originalPrice: 399500, img: d4 }
    ];

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', bgcolor: '#fff', ml: { xs: 2 } }}>
            <NavBar />

            <Container maxWidth="lg" sx={{ mt: { xs: 4, md: 8 }, mb: 8, flex: 1 }}>
                {/* Success Banner */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, gap: 1.5 }}>
                    <CheckCircleIcon sx={{ color: '#F66A74', fontSize: { xs: '28px', md: '36px' } }} />
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 700,
                            color: '#F66A74',
                            fontSize: { xs: '18px', md: '28px' },
                            letterSpacing: '1px'
                        }}
                    >
                        YOUR ORDER WAS PLACED SUCCESSFULLY
                    </Typography>
                </Box>
                <Typography sx={{ fontFamily: 'Poppins', color: '#666', mb: 6, fontSize: '14px', ml: { md: 6 } }}>
                    Check your email for your order confirmation.
                </Typography>

                <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 700, mb: 4, fontSize: '24px' }}>
                    Confirmation
                </Typography>

                <Grid container spacing={4}>
                    {/* Left Column: Order Information & Shipping details */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ mb: 6 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 6 }}>
                                <Typography variant="h6" sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '24px', color: '#000' }}>
                                    Order information
                                </Typography>
                                <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                                    <LocalMallOutlinedIcon sx={{ fontSize: '24px', color: '#000' }} />
                                    <Typography sx={{
                                        position: 'absolute',
                                        fontSize: '8px',
                                        fontWeight: 900,
                                        bottom: '6px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        color: '#000'
                                    }}>✓</Typography>
                                </Box>
                            </Box>

                            <Box sx={{ mt: 2 }}>
                                <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 700, mb: 3, fontSize: '20px' }}>
                                    Shipping details
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '14px', mb: 0.5 }}>{orderData.shipping.name}</Typography>
                                <Typography sx={{ fontFamily: 'Poppins', color: '#000', fontSize: '13px', lineHeight: 1.6, whiteSpace: 'pre-line', mb: 1 }}>
                                    {orderData.shipping.address}
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', color: '#000', fontSize: '13px' }}>{orderData.shipping.phone}</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    {/* Middle Column: Order Metadata */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ mt: { md: 10 } }}>
                            {[
                                { label: 'Time placed', value: orderData.timePlaced },
                                { label: 'Order number', value: orderData.orderNumber },
                                { label: 'Total', value: orderData.total }
                            ].map((item, index) => (
                                <Box key={index} sx={{ display: 'flex', mb: 1.5, alignItems: 'flex-start' }}>
                                    <Typography sx={{
                                        width: '140px',
                                        fontFamily: 'Poppins',
                                        color: '#717171',
                                        fontSize: '14px'
                                    }}>
                                        {item.label}
                                    </Typography>
                                    <Typography sx={{
                                        flex: 1,
                                        fontFamily: 'Poppins',
                                        fontWeight: 500,
                                        fontSize: '14px',
                                        color: '#000'
                                    }}>
                                        {item.value}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    {/* Right Column: Payment information */}
                    <Grid item xs={12} md={4}>
                        <Box sx={{ ml: { md: 4 } }}>
                            <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 700, mb: 4, fontSize: '20px' }}>
                                Payment information
                            </Typography>
                            <Box sx={{ mb: 6 }}>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 500, color: '#000' }}>{orderData.payment.itemsCount} item</Typography>
                                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 500, color: '#000' }}>{orderData.payment.itemsPrice}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 500, color: '#000' }}>Shipping Fee</Typography>
                                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 500, color: '#000' }}>{orderData.payment.shippingFee}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 500, color: '#000' }}>Saved</Typography>
                                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', fontWeight: 500, color: '#F66A74' }}>-{orderData.payment.saved}</Typography>
                                </Box>
                                <Divider sx={{ my: 2, bgcolor: 'rgba(0,0,0,0.1)' }} />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '16px', color: '#000' }}>Order Total</Typography>
                                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: '16px', color: '#000' }}>{orderData.payment.orderTotal}</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>

                {/* Related Products Section */}
                <Box sx={{ mt: 10 }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: '18px', mb: 4 }}>
                        Related Products
                    </Typography>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                            md: 'repeat(3, 1fr)',
                            lg: 'repeat(4, 1fr)'
                        },
                        gap: 3,
                        justifyItems: 'center'
                    }}>
                        {relatedProducts.map((product) => (
                            <DroneCard
                                key={product.id}
                                image={product.img}
                                name={product.name}
                                price={product.price}
                                originalPrice={product.originalPrice}
                            />
                        ))}
                    </Box>
                </Box>
            </Container>
           <Box sx={{ml:{md:-2}}}>
             <Footer />
           </Box>
            
        </Box>
    );
};

export default Confirmation;
