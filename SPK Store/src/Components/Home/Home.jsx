import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, Grid, Rating, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

// Assets - Hero
import heroImg from '../../assets/Home/hero.webp';

// Assets - Categories
import cat1 from '../../assets/Home/Caegory/category1.webp';
import cat2 from '../../assets/Home/Caegory/category2.webp';
import cat3 from '../../assets/Home/Caegory/category3.webp';
import cat4 from '../../assets/Home/Caegory/category4.webp';

// Assets - Vectors (Shipping Icons)
import shpin from '../../assets/Home/Vector/shpin.webp';
import oneToOne from '../../assets/Home/Vector/OneToOne.webp';
import easyPayment from '../../assets/Home/Vector/EasyPayment.webp';
import support from '../../assets/Home/Vector/OnlineSupport.webp';

// Assets - Hot Deals
import mainDeal from '../../assets/Home/HotDeal/mainDeal.webp';
import deal1 from '../../assets/Home/HotDeal/deal1.webp';
import deal2 from '../../assets/Home/HotDeal/deal2.webp';
import deal3 from '../../assets/Home/HotDeal/deal3.webp';

// Assets - Popular Products
import pop1 from '../../assets/Home/Popular Product/popular1.webp';
import pop2 from '../../assets/Home/Popular Product/popular2.webp';
import pop3 from '../../assets/Home/Popular Product/popular3.webp';
import pop4 from '../../assets/Home/Popular Product/popular4.webp';

// Assets - Promo Banner
import handImg from '../../assets/Home/hand.webp';
import spkLogoShort from '../../assets/Home/bannerLogo.webp';

// Assets - Our Brands
import b1 from '../../assets/Home/Our Brand/b1.webp';
import b2 from '../../assets/Home/Our Brand/b2.webp';
import b3 from '../../assets/Home/Our Brand/b3.webp';
import b4 from '../../assets/Home/Our Brand/b4.webp';
import b5 from '../../assets/Home/Our Brand/b5.webp';
import b6 from '../../assets/Home/Our Brand/b6.webp';

// Assets - Profiles
import profile1 from '../../assets/Home/Profile/profile1.webp';
import profile2 from '../../assets/Home/Profile/profile2.webp';
import profile3 from '../../assets/Home/Profile/profile3.webp';

// Assets - Last Banner
import lastBanner from '../../assets/Home/lastBanner.webp';

import ProductCard from '../ProductCard/ProductCard';

const Home = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    useEffect(() => {
        if (!isMobile) return;
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollRef.current.scrollBy({ left: 260, behavior: 'smooth' });
                }
            }
        }, 3000);
        return () => clearInterval(interval);
    }, [isMobile]);

    const categories = [
        { name: 'Gimbal', img: cat1, path: '/gimbals' },
        { name: 'Drone & Accessories', img: cat2, path: '/drones' },
        { name: 'Mobile Lens', img: cat3, path: '/lenses' },
        { name: 'Other Accessories', img: cat4, path: '/accessories' },
    ];

    const shippingInfo = [
        { title: 'Free Shipping', desc: 'Free shipping for All fully Payment Item', icon: shpin },
        { title: 'One to One Warranty', desc: 'Within 30 days for an exchange', icon: oneToOne },
        { title: 'Easy Payment', desc: 'Pay with Multiple Credit Cards', icon: easyPayment },
        { title: 'Online Support', desc: '24/7 Support', icon: support }
    ];

    const hotDeals = [
        {
            title: 'DJI Mavic Mini Fly More Combo',
            price: 'LKR 700, 000',
            rating: 4,
            img: deal1
        },
        {
            title: 'DJI Avata 2 FPV Drone with 3-Battery',
            price: 'LKR 379,500',
            rating: 4,
            img: deal2
        },
        {
            title: 'DJI Mavic Pro 3 Combo',
            price: 'LKR 939,500',
            rating: 4,
            img: deal3
        }
    ];

    const popularProducts = [
        {
            title: 'Camera Tripod Versatile Mini Flexible',
            price: 'LKR 195,00',
            rating: 4,
            img: pop1
        },
        {
            title: 'Go Pro Hero 11 Camera',
            price: 'LKR 150,000',
            rating: 4,
            img: pop2
        },
        {
            title: 'DJI Mavic 3 Pro Fly More Combo (DJI RC)',
            price: 'LKR 939,500',
            rating: 4,
            img: pop3
        },
        {
            title: 'DJI Remote Controller for Spark Quadcopter',
            price: 'LKR 38500',
            rating: 4,
            img: pop4
        }
    ];

    const brands = [b1, b2, b3, b4, b5, b6, b1, b2, b3, b4, b5, b6];

    const testimonials = [
        {
            img: profile1,
            text: `"Customer service was top-notch. They promptly answered all my questions and helped me choose the right drone for my needs."`
        },
        {
            img: profile2,
            text: `"I am extremely impressed with the gimbal's stability and smoothness. It has taken my videography to the next level."`
        },
        {
            img: profile3,
            text: `"The drone I purchased from this site is fantastic! The build quality is excellent, and it performs just as described. Highly recommend!"`
        }
    ];

    return (
        <Box sx={{
            width: '100%',
            fontFamily: 'Poppins, sans-serif',
            overflowX: 'hidden',
            bgcolor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <NavBar />
            {/* Hero Section */}
            <Box component="section" sx={{
                position: 'relative',
                width: '100%',
                height: { xs: '240px', sm: '320px', md: '420px', lg: '496px' },
                mt: '78px',
                mb: 0,
                mx: 'auto',
                bgcolor: '#000',
                overflow: 'hidden',
                display: 'flex',
                mt: '-45px',
                alignItems: 'center'
            }}>
                <Box
                    component="img"
                    src={heroImg}
                    alt="DJI Avata 2 Drone"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        zIndex: 1
                    }}
                />
                <Box sx={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    padding: '0 10%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                }}>
                    <Box sx={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '10px'
                    }}>
                        {[0, 1, 2].map((i) => (
                            <Box
                                key={i}
                                sx={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    bgcolor: i === 1 ? '#fff' : 'rgba(255, 255, 255, 0.5)',
                                    cursor: 'pointer'
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* Info Banner Section */}
            <Box component="section" sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                mt: '62px',
                mb: '62px',
                px: { xs: 2, md: 0 }
            }}>
                <Box sx={{
                    width: '100%',
                    maxWidth: '1200px',
                    bgcolor: '#F4F4F4',
                    borderRadius: '8px',
                    padding: { xs: '16px', md: '24px 40px' },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: { xs: 2, md: 5 },
                    textAlign: 'center'
                }}>
                    <Typography sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 500,
                        fontSize: { xs: '14px', sm: '18px', md: '20px' },
                        lineHeight: '100%',
                        textTransform: 'uppercase',
                        color: 'rgba(0, 0, 0, 1)',
                        whiteSpace: { xs: 'normal', md: 'nowrap' },
                        flex: 1,
                        textAlign: { xs: 'center', md: 'left' }
                    }}>
                        HIGH-QUALITY DRONES : RELIABLE, DURABLE, INNOVATIVE—BUY TODAY FOR UNMATCHED PERFORMANCE
                    </Typography>
                    <Button
                        variant="outlined"
                        sx={{
                            color: '#ff0000',
                            borderColor: '#ff0000',
                            padding: '10px 24px',
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            borderRadius: '4px',
                            whiteSpace: 'nowrap',
                            textTransform: 'uppercase',
                            '&:hover': {
                                bgcolor: '#ff0000',
                                color: '#fff',
                                borderColor: '#ff0000'
                            }
                        }}
                    >
                        SHOP NOW
                    </Button>
                </Box>
            </Box>

            {/* Categories Section */}
            <Box component="section" sx={{
                width: '100%',
                maxWidth: '1240px',
                px: 0,
                mb: '80px',
                textAlign: 'center'
            }}>
                <Typography variant="h3" sx={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    mb: 0.5,
                    fontFamily: 'Poppins, sans-serif'
                }}>
                    Our Categories
                </Typography>
                <Typography sx={{
                    color: 'rgba(0, 0, 0, 0.5)',
                    mb: 6,
                    fontSize: '0.9rem'
                }}>
                    Explore our main categories on the go
                </Typography>

                <Grid container spacing={3} sx={{ justifyContent: 'center', flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
                    {categories.map((cat, index) => (
                        <Grid item xs={12} sm={3} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box
                                onClick={() => navigate(cat.path)}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    width: '100%',
                                    maxWidth: '290px',
                                    zoom: { md: 0.75, lg: 1 },
                                    '&:hover img': {
                                        transform: 'scale(1.05)',
                                        transition: 'transform 150ms ease-out'
                                    }
                                }}
                            >
                                <Box sx={{
                                    width: '290px',
                                    height: '240px',
                                    bgcolor: '#F2F2F2',
                                    borderRadius: '15px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    mb: '10px',
                                    overflow: 'hidden'
                                }}>
                                    <Box
                                        component="img"
                                        src={cat.img}
                                        alt={cat.name}
                                        sx={{
                                            width: '162px',
                                            height: 'auto',
                                            maxHeight: '177px',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </Box>
                                <Typography sx={{
                                    fontWeight: 700,
                                    fontSize: '1rem',
                                    fontFamily: 'Poppins, sans-serif'
                                }}>
                                    {cat.name}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Shipping Info Section */}
            <Box component="section" sx={{
                width: '100%',
                maxWidth: { xs: '240px', sm: '700px', md: '960px', lg: '1200px' },
                bgcolor: '#F2F2F2',
                borderRadius: '10px',
                padding: '20px',
                mb: '60px',
                mx: 'auto'
            }}>
                <Grid container spacing={{ xs: 2, md: 3, lg: 16 }} sx={{ width: '100%', justifyContent: 'center' }}>
                    {shippingInfo.map((item, index) => (
                        <Grid item xs={12} md={3} key={index} sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: { xs: 2, md: 1 },
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}>
                            <Box sx={{
                                width: '78px',
                                height: '68px',
                                bgcolor: 'rgba(246, 106, 116, 0.2)',
                                borderRadius: '10px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexShrink: 0
                            }}>
                                <Box component="img" src={item.icon} sx={{ width: '40px', height: 'auto' }} />
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography sx={{
                                    fontWeight: 700,
                                    fontSize: '0.95rem',
                                    fontFamily: 'Poppins, sans-serif',
                                    lineHeight: 1.2
                                }}>
                                    {item.title}
                                </Typography>
                                <Typography sx={{ fontSize: '0.7rem', color: 'rgba(0, 0, 0, 0.6)', mt: 0.5 }}>
                                    {item.desc}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Hot Deals Section */}
            <Box component="section" sx={{
                width: '100%',
                maxWidth: '1240px',
                px: { xs: 2, md: 2 },
                mb: { xs: '50px', md: '100px' },
                overflow: 'hidden',
                mx: 'auto'
            }}>
                <Typography variant="h3" sx={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    mb: 4,
                    textAlign: 'left',
                    fontFamily: 'Poppins'
                }}>
                    Hot Deals
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 3,
                    alignItems: 'flex-start'
                }}>
                    {/* Main Deal Card */}
                    <Box sx={{
                        width: '520px',
                        height: '413px',
                        position: 'relative',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        flexShrink: 0,
                        display: { xs: 'none', md: 'block' }
                    }}>
                        <Box
                            component="img"
                            src={mainDeal}
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />
                        <Box sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '50%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            padding: '30px',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)'
                        }}>
                            <Typography sx={{
                                color: '#fff',
                                fontSize: '1.3rem',
                                fontWeight: 700,
                                mb: 2.5,
                                fontFamily: 'Poppins'
                            }}>
                                DJI Mavic Pro 3
                            </Typography>
                            <Button
                                variant="contained"
                                sx={{
                                    bgcolor: '#fff',
                                    color: '#000',
                                    textTransform: 'uppercase',
                                    borderRadius: '8px',
                                    padding: '12px 40px',
                                    fontSize: '0.9rem',
                                    fontWeight: 700,
                                    fontFamily: 'Poppins',
                                    '&:hover': { bgcolor: '#f0f0f0' }
                                }}
                            >
                                SHOP NOW
                            </Button>
                        </Box>
                    </Box>

                    {/* Secondary Deal Cards Wrapper: Swipeable */}
                    <Box
                        ref={scrollRef}
                        sx={{
                            display: 'flex',
                            gap: 3,
                            flexWrap: 'nowrap',
                            overflowX: 'auto',
                            width: '100%',
                            pb: 1,
                            cursor: 'grab',
                            '&::-webkit-scrollbar': { display: 'none' },
                            msOverflowStyle: 'none',
                            scrollbarWidth: 'none',
                            scrollSnapType: isMobile ? 'x mandatory' : 'none',
                            '& > *': {
                                scrollSnapAlign: isMobile ? 'center' : 'none'
                            }
                        }}>
                        {hotDeals.map((deal, index) => (
                            <ProductCard
                                key={index}
                                product={deal}
                                containerSx={{
                                    width: { xs: '240px', md: '273px' },
                                    height: { xs: '290px', md: '380px' },
                                    padding: { xs: '10px', md: '20px' }
                                }}
                            />
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* Popular Products Section */}
            <Box component="section" sx={{
                width: '100%',
                maxWidth: '1240px',
                px: { xs: 2, md: 2 },
                mb: { xs: '50px', md: '100px' },
                mx: 'auto'
            }}>
                <Typography variant="h3" sx={{
                    fontSize: '1.8rem',
                    fontWeight: 700,
                    mb: 4,
                    fontFamily: 'Poppins, sans-serif'
                }}>
                    Popular Products
                </Typography>

                <Box sx={{
                    display: 'flex',
                    gap: 3,
                    flexWrap: 'nowrap',
                    overflowX: 'auto',
                    width: '100%',
                    pb: 1,
                    cursor: 'grab',
                    '&::-webkit-scrollbar': { display: 'none' },
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                }}>
                    {popularProducts.map((product, index) => (
                        <ProductCard
                            key={index}
                            product={product}
                            containerSx={{
                                width: { xs: '240px', md: '273px' },
                                height: { xs: '320px', md: '380px' },
                                padding: { xs: '15px', md: '20px' },
                                left: { xs: '20px', md: '20px' }
                            }}
                        />
                    ))}
                </Box>
            </Box>

            {/* Promo Banner Section */}
            <Box component="section" sx={{
                width: '100%',
                maxWidth: { md: '1000px', lg: '1400px' },
                mb: { xs: '50px', md: '10px' },
                mt: { xs: '30px', md: '60px' },
                px: { xs: 2, md: 5 }
            }}>
                {/* Desktop Promo Banner */}
                <Box sx={{
                    display: { xs: 'none', md: 'flex' },
                    width: '100%',
                    height: '550px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                }}>
                    <Box sx={{
                        width: '100%',
                        height: '343px',
                        bgcolor: '#F66A74',
                        borderRadius: '20px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        padding: { md: '0 30px', lg: '0 80px' },
                        overflow: 'visible',
                    }}>
                        {/* White Semi-Circle */}
                        <Box sx={{
                            position: 'absolute',
                            width: '250px',
                            height: '480px',
                            bgcolor: '#fff',
                            borderRadius: '0 250px 250px 0',
                            left: '-70px',
                            top: '-40%',
                            transform: 'translateY(-50%)',
                            zIndex: 1,
                            rotate: '90deg',
                        }} />
                        {/* Hand Holding Drone */}
                        <Box
                            component="img"
                            src={handImg}
                            alt="Hand holding drone"
                            sx={{
                                width: { md: '440px', lg: '536px' },
                                height: 'auto',
                                position: 'absolute',
                                left: { md: '0px', lg: '38px' },
                                bottom: '0px',
                                zIndex: 2,
                                pointerEvents: 'none',
                            }}
                        />
                        {/* SPK Logo */}
                        <Box
                            component="img"
                            src={spkLogoShort}
                            alt="SPK Logo"
                            sx={{
                                width: { md: '70px', lg: '88px' },
                                height: 'auto',
                                position: 'absolute',
                                left: { md: '280px', lg: '340px' },
                                top: { md: '165px', lg: '145px' },
                                zIndex: 3
                            }}
                        />
                        {/* Text Content */}
                        <Box sx={{ width: { md: '440px', lg: '550px' }, color: '#fff', textAlign: 'left', zIndex: 4 }}>
                            <Typography variant="h3" sx={{
                                fontSize: { md: '2.1rem', lg: '2.8rem' },
                                fontWeight: 700,
                                fontFamily: 'Poppins, sans-serif',
                                lineHeight: 1.2,
                                mb: 2
                            }}>
                                Score Big Savings on Sports Gear
                            </Typography>
                            <Typography sx={{ fontSize: '0.9rem', mb: 4, opacity: 0.9, maxWidth: '450px' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor rem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: { md: 2, lg: 4 } }}>
                                <Typography sx={{ fontSize: { md: '4.5rem', lg: '5.5rem' }, fontWeight: 700, fontFamily: 'Poppins' }}>
                                    20 %
                                </Typography>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderColor: '#fff',
                                        color: '#fff',
                                        borderRadius: '10px',
                                        padding: '12px 35px',
                                        fontWeight: 700,
                                        fontSize: '1rem',
                                        textTransform: 'none',
                                        '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', borderColor: '#fff' }
                                    }}
                                >
                                    SHOP NOW
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Mobile Promo Banner */}
                <Box sx={{
                    display: { xs: 'flex', md: 'none' },
                    width: '90%',
                    maxWidth: { xs: '260px', sm: '680px' },
                    mx: 'auto',
                    bgcolor: '#F66A74',
                    borderRadius: '20px',
                    p: { xs: 3, sm: 5 },
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: '#fff',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Decorative Circle for Mobile */}
                    <Box sx={{
                        position: 'absolute',
                        width: '150px',
                        height: '150px',
                        bgcolor: 'rgba(255,255,255,0.1)',
                        borderRadius: '50%',
                        top: '-50px',
                        right: '-50px',
                        zIndex: 1
                    }} />

                    <Typography variant="h3" sx={{
                        fontSize: { xs: '1.6rem', sm: '2.2rem' },
                        fontWeight: 700,
                        fontFamily: 'Poppins, sans-serif',
                        lineHeight: 1.2,
                        mb: 2,
                        zIndex: 2
                    }}>
                        Score Big Savings on Sports Gear
                    </Typography>
                    <Typography sx={{
                        fontSize: { xs: '0.8rem', sm: '0.95rem' },
                        mb: 4,
                        opacity: 0.9,
                        zIndex: 2,
                        maxWidth: '280px',
                        lineHeight: 1.5
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor rem ipsum dolor sit amet.
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: 1.5,
                        zIndex: 2
                    }}>
                        <Typography sx={{
                            fontSize: { xs: '3.5rem', sm: '4.5rem' },
                            fontWeight: 700,
                            fontFamily: 'Poppins',
                            lineHeight: 1
                        }}>
                            20 %
                        </Typography>
                        <Button
                            variant="outlined"
                            sx={{
                                borderColor: '#fff',
                                color: '#fff',
                                borderRadius: '10px',
                                padding: '10px 30px',
                                fontWeight: 700,
                                fontSize: '0.9rem',
                                textTransform: 'none',
                                mt: 1,
                                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', borderColor: '#fff' }
                            }}
                        >
                            SHOP NOW
                        </Button>
                    </Box>
                </Box>
            </Box>




            {/* Our Brands Section */}
            <Box component="section" sx={{
                width: '100%',
                maxWidth: '1241px',
                px: { xs: 2, md: 0 },
                mb: { xs: '50px', md: '100px' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                mx: 'auto'
            }}>
                <Typography variant="h3" sx={{
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    mb: 4,
                    fontFamily: 'Poppins, sans-serif',
                    color: '#000'
                }}>
                    Our Brands
                </Typography>

                <Box sx={{
                    width: '100%',
                    height: '5px',
                    bgcolor: '#F5F5F5',
                }} />

                <Box sx={{
                    width: '100%',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    position: 'relative',
                    minHeight: '119px',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: { xs: 8, md: 15 },
                        width: 'max-content',
                        animation: 'scroll 30s linear infinite',
                        '@keyframes scroll': {
                            '0%': { transform: 'translateX(0)' },
                            '100%': { transform: 'translateX(-50%)' }
                        },
                        '&:hover': {
                            animationPlayState: 'paused'
                        }
                    }}>
                        {brands.map((brand, index) => (
                            <Box
                                key={index}
                                component="img"
                                src={brand}
                                alt={`Brand ${index + 1}`}
                                sx={{
                                    height: { xs: '24px', sm: '35px', md: '45px' },
                                    width: 'auto',
                                    objectFit: 'contain',
                                    flexShrink: 0
                                }}
                            />
                        ))}
                    </Box>
                </Box>

                <Box sx={{
                    width: '100%',
                    height: '5px',
                    bgcolor: '#F5F5F5',
                }} />
            </Box>

            {/* Testimonials Section */}
            <Box component="section" sx={{
                width: '100%',
                maxWidth: '1241px',
                px: { xs: 2, md: 0 },
                mb: { xs: '50px', md: '100px' },
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                alignItems: { xs: 'center', lg: 'flex-start' },
                justifyContent: 'space-between',
                mx: 'auto',
                gap: 3
            }}>
                <Box sx={{ width: { xs: '100%', lg: '320px' }, flexShrink: 0, textAlign: { xs: 'center', lg: 'left' }, pr: { xs: 0, lg: 2 } }}>
                    <Typography sx={{ fontSize: '1.2rem', fontWeight: 600, color: '#777', fontFamily: 'Poppins' }}>
                        Why shop with
                    </Typography>
                    <Typography variant="h2" sx={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'Poppins', mb: 2 }}>
                        SPK <span style={{ color: '#F66A74' }}>STORE</span>
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', color: '#777', lineHeight: 1.6, fontFamily: 'Poppins' }}>
                        Established in 2021, SPK Store has quickly emerged as a trusted retailer specializing in cutting-edge technology products. We pride ourselves on offering a diverse range of items including gimbals, drones, cameras, and various electronic devices. Our commitment to exceptional customer service and robust warranty support distinguishes us as a preferred choice among tech enthusiasts.
                    </Typography>
                </Box>

                <Box sx={{
                    flex: 1,
                    display: 'flex',
                    overflowX: 'auto',
                    gap: '24px',
                    justifyContent: 'space-between',
                    pb: 0,
                    '&::-webkit-scrollbar': { display: 'none' },
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                }}>
                    {testimonials.map((t, idx) => (
                        <Box key={idx} sx={{
                            width: '289px',
                            minWidth: '289px',
                            height: '362px',
                            bgcolor: '#FFF5F6',
                            borderRadius: '10px',
                            pt: '30px',
                            px: '24px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            flexShrink: 0
                        }}>
                            <Box
                                component="img"
                                src={t.img}
                                sx={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    border: '2px solid #fff',
                                    objectFit: 'cover',
                                    mb: '30px'
                                }}
                            />
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '20px',
                                color: '#777',
                                textAlign: 'left',
                                width: '100%'
                            }}>
                                {t.text}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* Last Banner Section */}
            <Box component="section" sx={{
                width: '100%',
                height: { xs: '200px', sm: '280px', md: '400px', lg: '496px' },
                mt: 0,
                mb: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                mx: 'auto'
            }}>
                <Box
                    component="img"
                    src={lastBanner}
                    alt="Latest Offer"
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </Box>

            <Box sx={{ width: '100%' }}>
                <Footer />
            </Box>

        </Box >
    );
};

export default Home;

