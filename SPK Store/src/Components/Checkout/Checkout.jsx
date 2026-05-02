import React, { useState } from 'react';
import { Box, Typography, Button, Radio, TextField, Grid, Container } from '@mui/material';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

// Importing assets
import bankTransferImg from '../../assets/Checkout/BankTranfer.webp';
import cashOnDeliveryImg from '../../assets/Checkout/CashOnDelevery.webp';
import card1 from '../../assets/Checkout/card1.webp';
import card2 from '../../assets/Checkout/card2.webp';
import card3 from '../../assets/Checkout/card3.webp';
import CardDetail from './CheckoutDetail/CardDetail';
import BankDetail from './CheckoutDetail/BankDetail';
import CashOnDeliveryDetail from './CheckoutDetail/CashOnDeliveryDetail';

const Checkout = () => {
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [isSlipUploaded, setIsSlipUploaded] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        district: ''
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.phone) newErrors.phone = 'Phone is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.city) newErrors.city = 'City is required';
        if (!formData.district) newErrors.district = 'District is required';

        if (!paymentMethod) {
            newErrors.paymentMethod = 'Please select a payment method';
        } else if ((paymentMethod === 'bank' || paymentMethod === 'cod') && !isSlipUploaded) {
            newErrors.paymentMethod = 'Please upload your bank slip before proceeding';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleConfirmAndPay = () => {
        if (validateForm()) {
            alert('Order placed successfully!');
            // Here you would typically call your API
        } else {
            alert('Please fix the errors before proceeding.');
        }
    };

    return (
        <Box sx={{ bgcolor: '#fff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <NavBar />

            {/* Red Banner Header */}
            <Box sx={{
                bgcolor: '#F66A74',
                color: '#fff',
                width: '100%',
                py: { xs: 3, md: 4 },
                textAlign: 'center'
            }}>
                <Typography variant="h4" sx={{ fontWeight: 700, fontFamily: 'Poppins', fontSize: { xs: '24px', md: '30px' } }}>
                    Checkout <Typography component="span" sx={{ fontSize: '0.6em', fontWeight: 500 }}>(03 items)</Typography>
                </Typography>
            </Box>

            <Container maxWidth="xl" sx={{ flex: 1, py: { xs: 4, md: 8 }, px: { xs: 2, sm: 3, md: 4, lg: 8 } }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    gap: { xs: 4, lg: 6 },
                    justifyContent: 'center',
                    alignItems: { xs: 'center', lg: 'flex-start' },
                    width: '100%'
                }}>

                    {/* Left Column - Forms */}
                    <Box sx={{
                        flex: { xs: '1 1 100%', lg: '0 0 auto' },
                        width: '100%',
                        maxWidth: '811px'
                    }}>

                        {/* Pay With Section */}
                        <Box sx={{
                            border: errors.paymentMethod ? '2px solid #F66A74' : '1px solid rgba(0,0,0,0.1)',
                            mb: 6,
                            transition: 'border 0.3s ease'
                        }}>
                            {errors.paymentMethod && (
                                <Typography sx={{ color: '#F66A74', fontSize: '12px', fontFamily: 'Poppins', p: 1, ml: 1 }}>
                                    {errors.paymentMethod}
                                </Typography>
                            )}
                            {/* Pay with header */}
                            <Box sx={{ p: 2, borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
                                <Typography sx={{ fontWeight: 700, fontFamily: 'Poppins', fontSize: '18px' }}>
                                    Pay with
                                </Typography>
                            </Box>

                            {/* Option 1: Add new card */}
                            <Box
                                onClick={() => {
                                    setPaymentMethod('card');
                                    setIsSlipUploaded(false);
                                }}
                                sx={{
                                    display: 'flex', alignItems: 'flex-start', p: 2, borderBottom: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer',
                                    bgcolor: paymentMethod === 'card' ? 'rgba(0,0,0,0.02)' : 'transparent'
                                }}
                            >
                                <Radio
                                    checked={paymentMethod === 'card'}
                                    sx={{ p: { xs: 0.5, sm: 1 }, mt: -0.5, color: paymentMethod === 'card' ? '#F66A74' : 'rgba(0,0,0,0.5)', '&.Mui-checked': { color: '#F66A74' } }}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column', ml: { xs: 0, sm: 1 }, width: '100%' }}>
                                    <Typography sx={{ fontFamily: 'Poppins', fontSize: '16px', mb: 1 }}>Add new card</Typography>
                                    <Box sx={{ display: 'flex', gap: 1, ml: { xs: '-3px' } }}>
                                        <Box component="img" src={card1} alt="card" sx={{ width: '67px', height: '25px', objectFit: 'contain', border: '1px solid rgba(0,0,0,0.1)' }} />
                                        <Box component="img" src={card2} alt="card" sx={{ width: '67px', height: '25px', objectFit: 'contain', border: '1px solid rgba(0,0,0,0.1)' }} />
                                        <Box component="img" src={card3} alt="card" sx={{ width: '67px', height: '25px', objectFit: 'contain', border: '1px solid rgba(0,0,0,0.1)' }} />
                                    </Box>
                                    {paymentMethod === 'card' && <CardDetail />}
                                </Box>
                            </Box>

                            {/* Option 2: Bank Transfer */}
                            <Box
                                onClick={() => setPaymentMethod('bank')}
                                sx={{
                                    display: 'flex', alignItems: 'flex-start', p: 2, borderBottom: '1px solid rgba(0,0,0,0.1)', cursor: 'pointer',
                                    bgcolor: paymentMethod === 'bank' ? 'rgba(0,0,0,0.02)' : 'transparent'
                                }}
                            >
                                <Radio
                                    checked={paymentMethod === 'bank'}
                                    sx={{ p: { xs: 0.5, sm: 1 }, mt: 0.5, color: paymentMethod === 'bank' ? '#F66A74' : 'rgba(0,0,0,0.5)', '&.Mui-checked': { color: '#F66A74' } }}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column', ml: { xs: 0, sm: 1 }, width: '100%' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box component="img" src={bankTransferImg} alt="Bank Transfer" sx={{ width: '43px', height: '42px', mr: 2, objectFit: 'contain' }} />
                                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 600 }}>Bank Transfer</Typography>
                                        </Box>
                                        {isSlipUploaded && (
                                            <Typography sx={{ color: '#2e7d32', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                                                ✓ Attached
                                            </Typography>
                                        )}
                                    </Box>
                                    {paymentMethod === 'bank' && <BankDetail onUpload={() => setIsSlipUploaded(true)} />}
                                </Box>
                            </Box>

                            {/* Option 3: Cash on Delivery */}
                            <Box
                                onClick={() => setPaymentMethod('cod')}
                                sx={{
                                    display: 'flex', alignItems: 'flex-start', p: 2, cursor: 'pointer',
                                    bgcolor: paymentMethod === 'cod' ? 'rgba(0,0,0,0.02)' : 'transparent'
                                }}
                            >
                                <Radio
                                    checked={paymentMethod === 'cod'}
                                    sx={{ p: { xs: 0.5, sm: 1 }, mt: 0.5, color: paymentMethod === 'cod' ? '#F66A74' : 'rgba(0,0,0,0.5)', '&.Mui-checked': { color: '#F66A74' } }}
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column', ml: { xs: 0, sm: 1 }, width: '100%' }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                            <Box component="img" src={cashOnDeliveryImg} alt="Cash on Delivery" sx={{ width: '43px', height: '42px', mr: 2, objectFit: 'contain' }} />
                                            <Typography sx={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 600 }}>Cash on Delivery</Typography>
                                        </Box>
                                        {isSlipUploaded && (
                                            <Typography sx={{ color: '#2e7d32', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 600, display: 'flex', alignItems: 'center' }}>
                                                ✓ Attached
                                            </Typography>
                                        )}
                                    </Box>
                                    {paymentMethod === 'cod' && <CashOnDeliveryDetail onUpload={() => setIsSlipUploaded(true)} />}
                                </Box>
                            </Box>
                        </Box>

                        {/* Ship To Section */}
                        <Box sx={{ border: '1px solid rgba(0,0,0,0.1)', p: { xs: 2, md: 4 } }}>
                            <Typography sx={{ fontWeight: 700, fontFamily: 'Poppins', fontSize: '18px', mb: 3 }}>
                                Ship to
                            </Typography>

                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                                gap: 4,
                                width: '100%'
                            }}>
                                <Box>
                                    <Typography sx={{ fontSize: '14px', fontFamily: 'Poppins', fontWeight: 500, mb: 1, color: '#000' }}>First Name</Typography>
                                    <TextField
                                        fullWidth
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        error={!!errors.firstName}
                                        helperText={errors.firstName}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            '& .MuiOutlinedInput-root': { height: '35px', borderRadius: '4px', bgcolor: '#fff' },
                                            '& .MuiFormHelperText-root': { fontFamily: 'Poppins', ml: 0 }
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: '14px', fontFamily: 'Poppins', fontWeight: 500, mb: 1, color: '#000' }}>Last Name</Typography>
                                    <TextField
                                        fullWidth
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        error={!!errors.lastName}
                                        helperText={errors.lastName}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            '& .MuiOutlinedInput-root': { height: '35px', borderRadius: '4px', bgcolor: '#fff' },
                                            '& .MuiFormHelperText-root': { fontFamily: 'Poppins', ml: 0 }
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: '14px', fontFamily: 'Poppins', fontWeight: 500, mb: 1, color: '#000' }}>Contact Number</Typography>
                                    <TextField
                                        fullWidth
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        error={!!errors.phone}
                                        helperText={errors.phone}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            '& .MuiOutlinedInput-root': { height: '35px', borderRadius: '4px', bgcolor: '#fff' },
                                            '& .MuiFormHelperText-root': { fontFamily: 'Poppins', ml: 0 }
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: '14px', fontFamily: 'Poppins', fontWeight: 500, mb: 1, color: '#000' }}>Email</Typography>
                                    <TextField
                                        fullWidth
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        error={!!errors.email}
                                        helperText={errors.email}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            '& .MuiOutlinedInput-root': { height: '35px', borderRadius: '4px', bgcolor: '#fff' },
                                            '& .MuiFormHelperText-root': { fontFamily: 'Poppins', ml: 0 }
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                        <Typography sx={{ fontSize: '14px', fontFamily: 'Poppins', fontWeight: 500, color: '#000' }}>Shipping Address</Typography>
                                        <Typography sx={{ fontSize: '11px', fontFamily: 'Poppins', color: '#666', textDecoration: 'underline', cursor: 'pointer' }}>Set as default address</Typography>
                                    </Box>
                                    <TextField
                                        fullWidth
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        error={!!errors.address}
                                        helperText={errors.address}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            '& .MuiOutlinedInput-root': { height: '35px', borderRadius: '4px', bgcolor: '#fff' },
                                            '& .MuiFormHelperText-root': { fontFamily: 'Poppins', ml: 0 }
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: '14px', fontFamily: 'Poppins', fontWeight: 500, mb: 1, color: '#000' }}>Nearest City</Typography>
                                    <TextField
                                        fullWidth
                                        name="city"
                                        value={formData.city}
                                        onChange={handleInputChange}
                                        error={!!errors.city}
                                        helperText={errors.city}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            '& .MuiOutlinedInput-root': { height: '35px', borderRadius: '4px', bgcolor: '#fff' },
                                            '& .MuiFormHelperText-root': { fontFamily: 'Poppins', ml: 0 }
                                        }}
                                    />
                                </Box>

                                <Box>
                                    <Typography sx={{ fontSize: '14px', fontFamily: 'Poppins', fontWeight: 500, mb: 1, color: '#000' }}>District</Typography>
                                    <TextField
                                        fullWidth
                                        name="district"
                                        value={formData.district}
                                        onChange={handleInputChange}
                                        error={!!errors.district}
                                        helperText={errors.district}
                                        variant="outlined"
                                        size="small"
                                        sx={{
                                            '& .MuiOutlinedInput-root': { height: '35px', borderRadius: '4px', bgcolor: '#fff' },
                                            '& .MuiFormHelperText-root': { fontFamily: 'Poppins', ml: 0 }
                                        }}
                                    />
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-start', gap: 2, pb: 0.2 }}>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            flex: 1,
                                            height: '35px',
                                            borderColor: '#F66A74',
                                            color: '#F66A74',
                                            textTransform: 'none',
                                            fontSize: '14px',
                                            fontFamily: 'Poppins',
                                            fontWeight: 600,
                                            borderRadius: '4px',
                                            '&:hover': { borderColor: '#e55a64', bgcolor: 'rgba(246, 106, 116, 0.04)' }
                                        }}
                                    >
                                        CANCEL
                                    </Button>
                                    <Button
                                        variant="contained"
                                        onClick={() => validateForm()}
                                        sx={{
                                            flex: 1,
                                            height: '35px',
                                            bgcolor: '#F66A74',
                                            color: '#fff',
                                            textTransform: 'none',
                                            fontSize: '14px',
                                            fontFamily: 'Poppins',
                                            fontWeight: 600,
                                            borderRadius: '4px',
                                            boxShadow: 'none',
                                            '&:hover': { bgcolor: '#e55a64', boxShadow: 'none' }
                                        }}
                                    >
                                        SAVE
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>

                    {/* Right Column - Order Total Sidebar */}
                    <Box sx={{ flex: { xs: '1 1 100%', lg: '0 0 auto' }, width: '100%', maxWidth: '384px' }}>
                        <Box sx={{
                            border: '1px solid rgba(0,0,0,0.1)',
                            borderRadius: '5px',
                            p: { xs: 3, md: 4 },
                            width: '100%',
                            boxSizing: 'border-box',
                            position: { lg: 'sticky' },
                            top: '100px'
                        }}>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                                <Typography sx={{ fontFamily: 'Poppins', fontSize: '15px' }}>Items(3)</Typography>
                                <Typography sx={{ fontWeight: 600, fontFamily: 'Poppins', fontSize: '15px' }}>LKR 350000.00</Typography>
                            </Box>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
                                <Typography sx={{ fontWeight: 700, fontFamily: 'Poppins', fontSize: '16px' }}>Order total</Typography>
                                <Typography sx={{ fontWeight: 700, fontFamily: 'Poppins', fontSize: '16px' }}>LKR 353500.00</Typography>
                            </Box>

                            <Button
                                variant="contained"
                                fullWidth
                                onClick={handleConfirmAndPay}
                                sx={{
                                    bgcolor: '#F66A74',
                                    color: '#fff',
                                    height: '41px',
                                    borderRadius: '5px',
                                    fontSize: '15px',
                                    fontWeight: 700,
                                    textTransform: 'none',
                                    fontFamily: 'Poppins',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: 1,
                                    transition: 'all 0.3s ease',
                                    boxShadow: 'none',
                                    '&:hover': { bgcolor: '#e55a64', transform: 'translateY(-2px)', boxShadow: '0 4px 12px rgba(246, 106, 116, 0.3)' }
                                }}
                            >
                                <Box
                                    component="img"
                                    src={card3}
                                    alt="card icon"
                                    sx={{ width: '20px', height: '14px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                                />
                                Confirm and pay
                            </Button>
                        </Box>
                    </Box>

                </Box>
            </Container>

            <Footer />
        </Box>
    );
};

export default Checkout;
