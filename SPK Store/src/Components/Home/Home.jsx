import React from 'react';
import { Box, Typography, Button, Grid, Rating, IconButton } from '@mui/material';
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

    const brands = [b1, b2, b3, b4, b5, b6];

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
                maxWidth: '1443px',
                height: { xs: '400px', md: '496px' },
                margin: { xs: '60px auto 0', md: '86px auto 0' },
                bgcolor: '#000',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                mt: { xs: -5, md: -1 }
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
                    padding: { xs: '0 5%', md: '0 10%' },
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
                mt: { xs: '40px', md: '62px' },
                mb: { xs: '40px', md: '62px' },
                px: { xs: 2, md: 0 }
            }}>
                <Box sx={{
                    width: 'auto',
                    minWidth: { xs: '95%', md: '1008px' },
                    maxWidth: '1200px',
                    bgcolor: '#F4F4F4',
                    borderRadius: '8px',
                    padding: { xs: '20px', md: '15px 40px' },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: { xs: 2.5, md: 5 },
                    textAlign: 'center'
                }}>
                    <Typography sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 500,
                        fontSize: { xs: '14px', sm: '16px', md: '20px' },
                        lineHeight: { xs: 1.4, md: '100%' },
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
                            padding: { xs: '10px 30px', md: '10px 24px' },
                            fontSize: { xs: '0.85rem', md: '0.95rem' },
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
                px: { xs: 2, md: 0 },
                mb: { xs: '60px', md: '80px' },
                textAlign: 'center'
            }}>
                <Typography variant="h3" sx={{
                    fontSize: { xs: '1.5rem', md: '1.8rem' },
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

                <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
                    {categories.map((cat, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box
                                onClick={() => navigate(cat.path)}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    width: '290px',
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
                                    mb: 1.5,
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
                maxWidth: '1240px',
                bgcolor: '#F2F2F2',
                borderRadius: '10px',
                padding: { xs: '30px', md: '40px' },
                mb: { xs: '60px', md: '80px' },
                mx: { xs: 2, md: 0 }
            }}>
                <Grid container spacing={7} sx={{ width: '100%', margin: 0 }}>
                    {shippingInfo.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            paddingLeft: '0 !important'
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
                            <Box sx={{ textAlign: 'left' }}>
                                <Typography sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: '0.9rem', md: '0.95rem' },
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
                px: { xs: 2, md: 0 },
                mb: { xs: '60px', md: '100px' },
                overflow: 'hidden'
            }}>
                <Typography variant="h3" sx={{
                    fontSize: { xs: '1.5rem', md: '1.8rem' },
                    fontWeight: 700,
                    mb: 4,
                    textAlign: 'left',
                    fontFamily: 'Poppins, sans-serif'
                }}>
                    Hot Deals
                </Typography>

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' },
                    gap: { xs: 4, lg: 3 },
                    alignItems: { xs: 'center', lg: 'flex-start' }
                }}>
                    {/* Main Deal Card: 520x413 */}
                    <Box sx={{
                        width: { xs: '100%', sm: '520px' },
                        height: '413px',
                        position: 'relative',
                        borderRadius: '16px',
                        overflow: 'hidden',
                        flexShrink: 0
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
                        {hotDeals.map((deal, index) => (
                            <ProductCard key={index} product={deal} />
                        ))}
                    </Box>
                </Box>
            </Box>

            {/* Popular Products Section */}
            <Box component="section" sx={{
                width: '100%',
                maxWidth: '1240px',
                px: { xs: 2, md: 0 },
                mb: { xs: '60px', md: '100px' },
                textAlign: 'left'
            }}>
                <Typography variant="h3" sx={{
                    fontSize: { xs: '1.5rem', md: '1.8rem' },
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
                        <ProductCard key={index} product={product} />
                    ))}
                </Box>
            </Box>

            {/* Promo Banner Section */}
            <Box component="section" sx={{
                width: '100%',
                maxWidth: '1241px',
                mb: { xs: '60px', md: '100px' },
                mt: { xs: '40px', md: '60px' },
                px: { xs: 2, sm: 3, md: 5 }
            }}>
                {/* MOBILE / TABLET layout (xs, sm) — clean coral card, no overlapping imagery */}
                <Box sx={{
                    display: { xs: 'flex', md: 'none' },
                    flexDirection: 'column',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    bgcolor: '#F66A74',
                }}>
                    <Box sx={{
                        bgcolor: '#F66A74',
                        color: '#fff',
                        textAlign: 'center',
                        px: { xs: 3, sm: 5 },
                        py: { xs: 4, sm: 5 },
                    }}>
                        <Typography variant="h3" sx={{
                            fontSize: { xs: '1.6rem', sm: '2.2rem' },
                            fontWeight: 700,
                            fontFamily: 'Poppins, sans-serif',
                            lineHeight: 1.2,
                            mb: 2
                        }}>
                            Score Big Savings on Sports Gear
                        </Typography>
                        <Typography sx={{
                            fontSize: { xs: '0.82rem', sm: '0.9rem' },
                            mb: 3,
                            opacity: 0.9,
                            lineHeight: 1.6,
                            maxWidth: '400px',
                            mx: 'auto'
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor rem ipsum dolor sit amet.
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                            <Typography sx={{ fontSize: { xs: '2.8rem', sm: '3.5rem' }, fontWeight: 700, fontFamily: 'Poppins' }}>
                                20 %
                            </Typography>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderColor: '#fff',
                                    color: '#fff',
                                    borderRadius: '10px',
                                    padding: { xs: '10px 28px', sm: '12px 35px' },
                                    fontWeight: 700,
                                    fontSize: { xs: '0.9rem', sm: '1rem' },
                                    textTransform: 'none',
                                    '&:hover': { bgcolor: 'rgba(255,255,255,0.15)', borderColor: '#fff' }
                                }}
                            >
                                SHOP NOW
                            </Button>
                        </Box>
                    </Box>
                </Box>

                {/* DESKTOP layout (md+) — responsive overlapping design */}
                <Box sx={{
                    display: { xs: 'none', md: 'flex' },
                    width: '100%',
                    height: { md: '450px', lg: '550px' },
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                }}>
                    <Box sx={{
                        width: '100%',
                        height: { md: '280px', lg: '343px' },
                        bgcolor: '#F66A74',
                        borderRadius: '20px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        padding: { md: '0 40px', lg: '0 80px' },
                        overflow: 'visible',
                    }}>
                        {/* White Semi-Circle */}
                        <Box sx={{
                            position: 'absolute',
                            width: { md: '200px', lg: '250px' },
                            height: { md: '400px', lg: '480px' },
                            bgcolor: '#fff',
                            borderRadius: '0 250px 250px 0',
                            left: { md: '-50px', lg: '-70px' },
                            top: { md: '-40%', lg: '-40%' },
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
                                width: { md: '400px', lg: '536px' },
                                height: 'auto',
                                position: 'absolute',
                                left: { md: '20px', lg: '38px' },
                                bottom: { md: '-10px', lg: '-20px' },
                                zIndex: 2,
                                pointerEvents: 'none'
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
                                top: { md: '110px', lg: '145px' },
                                zIndex: 3
                            }}
                        />
                        {/* Text Content */}
                        <Box sx={{ width: { md: '400px', lg: '550px' }, color: '#fff', textAlign: 'left', zIndex: 4 }}>
                            <Typography variant="h3" sx={{
                                fontSize: { md: '2rem', lg: '2.8rem' },
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
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                                <Typography sx={{ fontSize: { md: '4rem', lg: '5.5rem' }, fontWeight: 700, fontFamily: 'Poppins' }}>
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
            </Box>




            {/* Our Brands Section */}
            <Box component="section" sx={{
                width: '100%',
                maxWidth: '1241px',
                px: { xs: 2, md: 0 },
                mb: { xs: '60px', md: '100px' },
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start'
            }}>
                <Typography variant="h3" sx={{
                    fontSize: { xs: '1.2rem', md: '1.4rem' },
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
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    minHeight: '119px',
                    overflowX: 'auto',
                    gap: { xs: 4, md: 0 },
                    px: { xs: 2, md: 3 },
                    '&::-webkit-scrollbar': { display: 'none' },
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                }}>
                    {brands.map((brand, index) => (
                        <Box
                            key={index}
                            component="img"
                            src={brand}
                            alt={`Brand ${index + 1}`}
                            sx={{
                                height: { xs: '25px', sm: '35px', md: '45px' },
                                width: 'auto',
                                objectFit: 'contain',
                                flexShrink: 0
                            }}
                        />
                    ))}
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
                mb: { xs: '60px', md: '100px' },
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                alignItems: { xs: 'center', lg: 'flex-start' },
                justifyContent: 'space-between',
                gap: { xs: 5, lg: 3 }
            }}>
                <Box sx={{ width: { xs: '100%', lg: '320px' }, flexShrink: 0, textAlign: { xs: 'center', lg: 'left' }, pr: { lg: 2 } }}>
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
                    gap: { xs: 3, lg: '24px' },
                    justifyContent: { xs: 'flex-start', lg: 'space-between' },
                    pb: { xs: 2, lg: 0 },
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
                maxWidth: '1447px',
                height: { xs: '300px', md: '496px' },
                mt: { xs: '60px', md: '80px' },
                mb: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                mt: '-55px'
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

