import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, TextField, InputAdornment } from '@mui/material';
import NavBar from '../NavBar/NavBar';
import mainItem from '../../assets/ItemDetail/mainItem.webp';
import leftside1 from '../../assets/ItemDetail/leftside1.webp';
import rightside1 from '../../assets/ItemDetail/rightside1.webp';
import rightside2 from '../../assets/ItemDetail/rightside2.webp';
import rightside3 from '../../assets/ItemDetail/rightside3.webp';
import banner from '../../assets/ItemDetail/banner.webp';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DroneCard from '../Drone/droneCard';
import d1 from '../../assets/Drone/Drones/Rectangle 609.webp';
import d2 from '../../assets/Drone/Drones/Rectangle 609 (1).webp';
import d3 from '../../assets/Drone/Drones/Rectangle 609 (2).webp';
import d4 from '../../assets/Drone/Drones/Rectangle 609 (3).webp';
import Footer from '../Footer/Footer';

const ItemDetail = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (type) => {
        if (type === 'inc') setQuantity(prev => prev + 1);
        if (type === 'dec' && quantity > 1) setQuantity(prev => prev - 1);
    };

    return (
        <Box sx={{ bgcolor: '#FDFDFD', minHeight: '100vh', pb: 10 }}>
            <NavBar />

            <Box sx={{
                maxWidth: '1440px',
                mx: 'auto',
                px: { xs: 2, sm: 5, md: 8, lg: 12 },
                pt: { xs: 4, md: 10 },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 4, md: 8 },
                alignItems: { xs: 'center', md: 'flex-start' }
            }}>
                {/* Left Side: Images */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 3,
                    width: { xs: '100%', md: 'auto' },
                    justifyContent: { xs: 'center', md: 'flex-start' }
                }}>
                    {/* Thumbnails */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2,
                        pt: 0
                    }}>
                        {[leftside1, leftside1, leftside1, leftside1].map((img, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: 100,
                                    height: 100,
                                    borderRadius: '5px',
                                    border: index === 0 ? '2px solid #F66A74' : '1px solid #E0E0E0',
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    cursor: 'pointer'
                                }}
                            />
                        ))}
                    </Box>

                    {/* Main Image */}
                    <Box sx={{
                        width: { xs: '100%', sm: 495 },
                        height: { xs: 'auto', sm: 441 },
                        aspectRatio: { xs: '495/441', sm: 'auto' },
                        borderRadius: '10px',
                        backgroundImage: `url(${mainItem})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        boxShadow: '0px 4px 20px rgba(0,0,0,0.05)'
                    }} />
                </Box>

                {/* Right Side: Details */}
                <Box sx={{ flex: 1, maxWidth: { xs: '100%', md: '600px' } }}>
                    <Box sx={{
                        bgcolor: '#E8F5E9',
                        color: '#2E7D32',
                        px: 1.5, py: 0.5,
                        borderRadius: '4px',
                        display: 'inline-block',
                        mb: 2
                    }}>
                        <Typography sx={{ fontSize: '12px', fontWeight: 600 }}>In Stock</Typography>
                    </Box>

                    <Typography variant="h4" sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 700,
                        mb: 1,
                        fontSize: { xs: '1.5rem', md: '2.125rem' }
                    }}>
                        DJI Mavic 3 Pro Fly More Combo (DJI RC)
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 3 }}>
                        <Typography variant="h5" sx={{ fontWeight: 700, color: '#000' }}>
                            LKR 269,000.00
                        </Typography>
                        <Typography sx={{ textDecoration: 'line-through', color: '#9E9E9E', fontSize: '14px' }}>
                            LKR 299,000.00
                        </Typography>
                    </Box>

                    <Typography sx={{ fontWeight: 700, mb: 1, fontSize: '14px' }}>Short Description</Typography>
                    <Typography sx={{ color: '#757575', fontSize: '14px', lineHeight: 1.6, mb: 3 }}>
                        1080P Resolution<br />
                        Enclosed Optical Path<br />
                        Four-Way Electronic Ladder Correction<br />
                        3w Dual Speakers
                    </Typography>

                    {/* Secondary Image Selection */}
                    <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
                        {[rightside1, rightside2, rightside3].map((img, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: 100,
                                    height: 93,
                                    borderRadius: '5px',
                                    border: '1px solid #E0E0E0',
                                    backgroundImage: `url(${img})`,
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    cursor: 'pointer',
                                    p: 1
                                }}
                            />
                        ))}
                    </Box>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
                        <Box>
                            <Typography sx={{ fontWeight: 600, mb: 1, fontSize: '14px' }}>Quantity</Typography>
                            <Box sx={{
                                display: 'flex',
                                alignItems: 'center',
                                bgcolor: '#F5F5F5',
                                borderRadius: '4px',
                                width: 'fit-content'
                            }}>
                                <Button onClick={() => handleQuantityChange('dec')} sx={{ minWidth: 40, color: '#757575' }}>-</Button>
                                <Typography sx={{ px: 2, fontWeight: 600 }}>{quantity.toString().padStart(2, '0')}</Typography>
                                <Button onClick={() => handleQuantityChange('inc')} sx={{ minWidth: 40, color: '#757575' }}>+</Button>
                            </Box>
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#000' }}>
                            <Typography sx={{ fontSize: '13px', fontWeight: 600 }}>6 Months Warranty</Typography>
                            <ShieldOutlinedIcon sx={{ fontSize: 18, color: '#F66A74' }} />
                        </Box>
                    </Box>

                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            bgcolor: '#F66A74',
                            color: 'white',
                            py: 2,
                            borderRadius: '8px',
                            fontWeight: 700,
                            textTransform: 'none',
                            fontSize: '16px',
                            '&:hover': { bgcolor: '#e55d67' }
                        }}
                    >
                        Buy Now
                    </Button>
                </Box>
            </Box>

            {/* Technical Specifications Section */}
            <Box sx={{
                maxWidth: '1440px',
                mx: 'auto',
                px: { xs: 2, sm: 5, md: 8, lg: 12 },
                mt: 10
            }}>
                <Box sx={{
                    bgcolor: '#F5F5F5',
                    borderRadius: '12px',
                    p: { xs: 3, md: 6 },
                    mb: 8
                }}>
                    <Typography sx={{ fontSize: '14px', fontWeight: 700, opacity: 0.7, mb: 4 }}>
                        Technical specifications
                    </Typography>

                    <Typography variant="h4" sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 700,
                        mb: 4,
                        fontSize: { xs: '1.5rem', md: '2.5rem' }
                    }}>
                        WANBO T2 Max Android 9.0 Native 1080P 250ANSI Lumens
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                        {[...Array(8)].map((_, i) => (
                            <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                <Box sx={{
                                    width: 7,
                                    height: 7,
                                    borderRadius: '50%',
                                    bgcolor: '#000',
                                    mt: 1.2,
                                    flexShrink: 0
                                }} />
                                <Typography sx={{
                                    fontSize: '16px',
                                    color: '#000',
                                    fontWeight: 500,
                                    lineHeight: 1.4,
                                    fontFamily: 'Poppins'
                                }}>
                                    Lorem ipsum dolor sit amet consectetur. Ultrices ultrices pharetra ullamcorper etiam erat id.
                                    {i % 2 === 1 && " Lorem ipsum dolor sit amet consectetur. Ultrices ultrices pharetra ullamcorper etiam erat id."}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* About Item Section */}
                <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 700, mb: 4 }}>
                    About Item
                </Typography>

                <Box sx={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: 1150,
                    mx: 'auto',
                    mb: 8
                }}>
                    {/* Navigation Arrows */}
                    <IconButton sx={{
                        position: 'absolute', left: { xs: 5, md: -25 }, top: '50%', transform: 'translateY(-50%)',
                        bgcolor: 'white', color: 'black',
                        boxShadow: '0px 4px 10px rgba(0,0,0,0.15)',
                        zIndex: 10,
                        width: 45, height: 45,
                        '&:hover': { bgcolor: '#F5F5F5' }
                    }}>
                        <ArrowBackIosNewIcon sx={{ fontSize: 18 }} />
                    </IconButton>

                    <IconButton sx={{
                        position: 'absolute', right: { xs: 5, md: -25 }, top: '50%', transform: 'translateY(-50%)',
                        bgcolor: 'white', color: 'black',
                        boxShadow: '0px 4px 10px rgba(0,0,0,0.15)',
                        zIndex: 10,
                        width: 45, height: 45,
                        '&:hover': { bgcolor: '#F5F5F5' }
                    }}>
                        <ArrowForwardIosIcon sx={{ fontSize: 18 }} />
                    </IconButton>

                    <Box sx={{
                        position: 'relative',
                        width: '100%',
                        height: { xs: 300, sm: 400, md: 556 },
                        borderRadius: '10px',
                        backgroundImage: `url(${banner})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        textAlign: 'center',
                        overflow: 'hidden'
                    }}>
                        {/* Banner Overlay Text */}
                        <Box sx={{ maxWidth: '80%', px: 2 }}>
                            <Typography sx={{ fontSize: '14px', fontWeight: 600, opacity: 0.9, letterSpacing: 1, mb: 1 }}>
                                New
                            </Typography>
                            <Typography variant="h3" sx={{
                                fontFamily: 'Poppins', fontWeight: 700,
                                fontSize: { xs: '2rem', md: '3.5rem' },
                                textTransform: 'uppercase', mb: 1
                            }}>
                                DJI MINI 2
                            </Typography>
                            <Typography sx={{ fontSize: '18px', fontWeight: 500, mb: 3 }}>
                                Make Your Moments Fly
                            </Typography>
                            <Button
                                variant="outlined"
                                sx={{
                                    color: 'white',
                                    borderColor: 'white',
                                    borderRadius: '20px',
                                    px: 3, py: 1,
                                    textTransform: 'none',
                                    fontSize: '14px',
                                    borderWeight: '1.5px',
                                    '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', borderColor: 'white' }
                                }}
                            >
                                Learn More &gt;
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Related Products Section */}
            <Box sx={{
                maxWidth: '1440px',
                mx: 'auto',
                px: { xs: 2, sm: 5, md: 8, lg: 12 },
                mt: 10,
                pb: 10
            }}>
                <Typography variant="h5" sx={{ fontFamily: 'Poppins', fontWeight: 700, mb: 4 }}>
                    Related Products
                </Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: 'repeat(1, 273px)',
                        sm: 'repeat(2, 273px)',
                        md: 'repeat(2, 273px)',
                        lg: 'repeat(4, 273px)',
                    },
                    gap: { xs: '24px', sm: '35px', md: '42px' },
                    justifyContent: 'center',
                    mx: 'auto',
                }}>
                    {[
                        { name: 'DJI Mavic Pro Drone with 3 Battery', price: 379500, oldPx: 399500, img: d1 },
                        { name: 'DJI Mavic Mini Drone - White', price: 88000, oldPx: null, img: d2 },
                        { name: 'DJI Mavic 3 Enterprise RTK', price: 379500, oldPx: 399500, img: d3 },
                        { name: 'DJI FPV Drone Combo with Googles', price: 360000, oldPx: 399500, img: d1 }, // Reusing d1 if d4 is missing, but d4 should be there
                    ].map((product, index) => (
                        <DroneCard
                            key={index}
                            image={product.img}
                            name={product.name}
                            price={product.price}
                            originalPrice={product.oldPx}
                        />
                    ))}
                </Box>
            </Box>
            <Footer />
        </Box>
    );
};

export default ItemDetail;
