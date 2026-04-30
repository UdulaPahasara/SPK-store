import React, { useState } from 'react';
import {
    Box, Typography, Grid, Checkbox, FormControlLabel,
    FormGroup, IconButton, Drawer, Divider
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import OthersCard from './OthersCard';
import otherHero from '../../assets/Others/Otherero.webp';

import o1 from '../../assets/Others/Rectangle 850.webp';
import o2 from '../../assets/Others/Rectangle 851.webp';
import o3 from '../../assets/Others/Rectangle 852.webp';
import o4 from '../../assets/Others/Rectangle 853.webp';
import o5 from '../../assets/Others/Rectangle 854.webp';
import o6 from '../../assets/Others/Rectangle 855.webp';
import o7 from '../../assets/Others/Rectangle 856.webp';
import o8 from '../../assets/Others/Rectangle 858.webp';
import o9 from '../../assets/Others/Rectangle 859.webp';

const filterSections = [
    { title: 'BRANDS', options: ['Drone accessories', 'Mobile phone accessories', 'Smart Devices', 'Computer Accessories', 'Storage Devices'] },
    { title: 'AVAILABILITY', options: ['In Stock', 'Pre Order'] },
    { title: 'OFFERS', options: ['Hot Deals'] },
];

const FilterContent = ({ onClose }) => (
    <Box sx={{ p: onClose ? 3 : 0, width: onClose ? 270 : '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
            <Typography sx={{ fontSize: '20px', fontWeight: 700, fontFamily: 'Poppins', color: '#000' }}>FILTERS</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography sx={{ fontSize: '13px', fontWeight: 500, fontFamily: 'Poppins', color: '#F66A74', cursor: 'pointer' }}>Clear All</Typography>
                {onClose && (
                    <IconButton size="small" onClick={onClose} sx={{ color: '#555' }}>
                        <CloseIcon fontSize="small" />
                    </IconButton>
                )}
            </Box>
        </Box>
        {filterSections.map((section, idx) => (
            <Box key={idx} sx={{ mb: 2.5 }}>
                <Typography sx={{ fontSize: '13px', fontWeight: 700, fontFamily: 'Poppins', color: '#000', mb: 1, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {section.title}
                </Typography>
                <FormGroup sx={{ gap: 0.25 }}>
                    {section.options.map((opt, i) => (
                        <FormControlLabel
                            key={i}
                            control={<Checkbox size="small" sx={{ color: '#ccc', padding: '3px', '&.Mui-checked': { color: '#F66A74' } }} />}
                            label={<Typography sx={{ fontSize: '13px', color: 'rgba(0,0,0,0.6)', fontFamily: 'Poppins' }}>{opt}</Typography>}
                            sx={{ ml: 0, margin: 0 }}
                        />
                    ))}
                </FormGroup>
                {idx < filterSections.length - 1 && <Divider sx={{ mt: 2 }} />}
            </Box>
        ))}
    </Box>
);

const FilterSidebar = () => (
    <Box sx={{
        width: { md: '220px', lg: '250px' },
        flexShrink: 0,
        display: { xs: 'none', md: 'block' },
        pr: { md: 2, lg: 4 },
        borderRight: '1px solid rgba(224,224,224,0.8)',
        mr: { md: 3, lg: 4 },
        textAlign: 'left',
    }}>
        <FilterContent />
    </Box>
);

const OthersPagination = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: { xs: 1.5, md: 3 }, mt: 6, mb: 4 }}>
        <IconButton sx={{ width: 38, height: 38, bgcolor: '#F5F5F5', '&:hover': { bgcolor: '#EBEBEB' } }}>
            <KeyboardArrowLeftIcon />
        </IconButton>
        <Box sx={{ width: 38, height: 38, bgcolor: '#F66A74', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Poppins', fontWeight: 600, fontSize: '13px', cursor: 'pointer', boxShadow: '0 4px 10px rgba(246,106,116,0.3)' }}>01</Box>
        {['02', '03'].map(n => (
            <Typography key={n} sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '13px', color: '#000', cursor: 'pointer' }}>{n}</Typography>
        ))}
        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '13px', color: '#000' }}>...</Typography>
        <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '13px', color: '#000', cursor: 'pointer' }}>05</Typography>
        <IconButton sx={{ width: 38, height: 38, bgcolor: '#FFEBF0', color: '#888', '&:hover': { bgcolor: '#FFD6DA', color: '#F66A74' } }}>
            <KeyboardArrowRightIcon />
        </IconButton>
    </Box>
);

const Others = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const othersList = [
        { id: 1, name: 'DJI Gimbal lorem ipsum lorem', px: 36500, oldPx: 39500, img: o1 },
        { id: 2, name: 'DJI Gimbal lorem ipsum lorem', px: 36500, oldPx: 39500, img: o2 },
        { id: 3, name: 'DJI Gimbal lorem ipsum lorem', px: 36500, oldPx: 39500, img: o3 },
        { id: 4, name: 'DJI Gimbal lorem ipsum lorem', px: 36500, oldPx: 39500, img: o4 },
        { id: 5, name: 'DJI Gimbal lorem ipsum lorem', px: 36500, oldPx: 39500, img: o5 },
        { id: 6, name: 'DJI Gimbal lorem ipsum lorem', px: 36500, oldPx: 39500, img: o6 },
        { id: 7, name: 'DJI Gimbal lorem ipsum lorem', px: 38500, oldPx: 40500, img: o7 },
        { id: 8, name: 'DJI Gimbal lorem ipsum lorem', px: 36500, oldPx: 39500, img: o8 },
        { id: 9, name: 'DJI Gimbal lorem ipsum lorem', px: 36500, oldPx: 39500, img: o9 },
    ];

    return (
        <Box sx={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <NavBar />

            <Box component="main" sx={{ flex: 1, pt: { xs: 2, md: 4 } }}>
                {/* Hero */}
                <Box sx={{ width: '100%', overflow: 'hidden', mt: { xs: '-80px', sm: '-90px', md: '-118px' } }}>
                    <Box sx={{
                        width: '100%', maxWidth: '1440px', mx: 'auto',
                        height: { xs: '220px', sm: '300px', md: '416px' },
                        mt: { xs: '70px', sm: '80px', md: '86px' },
                        position: 'relative', overflow: 'hidden', bgcolor: '#EEEFF1',
                    }}>
                        {/* Coral left */}
                        <Box sx={{
                            position: 'absolute', top: 0, left: 0,
                            width: { xs: '65%', sm: '58%', md: '50%', lg: '640px' },
                            height: '100%',
                            bgcolor: 'rgba(246,106,116,0.85)',
                            clipPath: 'polygon(0 0, 100% 0, 84% 100%, 0 100%)',
                            zIndex: 2, display: 'flex', alignItems: 'center',
                            pl: { xs: 3, sm: 5, md: 7, lg: 10 },
                        }}>
                            <Typography variant="h1" sx={{
                                fontFamily: "'Poppins', sans-serif", fontWeight: 700,
                                fontSize: { xs: '2.2rem', sm: '3rem', md: '4.5rem', lg: '6rem' },
                                color: 'white', lineHeight: 1, userSelect: 'none',
                            }}>
                                Other
                            </Typography>
                        </Box>
                        {/* Hero image right */}
                        <Box sx={{
                            position: 'absolute', top: 0, right: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${otherHero})`,
                            backgroundSize: 'cover', backgroundPosition: 'center',
                            zIndex: 1,


                        }} />
                    </Box>
                </Box>

                {/* Content */}
                <Box sx={{
                    maxWidth: '1440px', mx: 'auto',
                    px: { xs: 2, sm: 3, md: 5, lg: 8 },
                    pt: { xs: 4, md: 6 }, pb: { xs: 4, md: 8 },
                }}>
                    {/* Filter button — tablet & mobile */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', mb: 3 }}>
                        <IconButton
                            onClick={() => setDrawerOpen(true)}
                            sx={{ border: '1.5px solid #F66A74', borderRadius: '8px', color: '#F66A74', px: 1.5, py: 0.75, gap: 0.75, '&:hover': { bgcolor: 'rgba(246,106,116,0.06)' } }}
                        >
                            <FilterListIcon sx={{ fontSize: 18 }} />
                            <Typography sx={{ fontSize: '13px', fontWeight: 600, fontFamily: 'Poppins', color: '#F66A74' }}>Filters</Typography>
                        </IconButton>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'stretch', md: 'flex-start' } }}>
                        <FilterSidebar />
                        <Box sx={{ flex: 1, minWidth: 0 }}>
                            <Box sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '273px',
                                    sm: 'repeat(2, 273px)',
                                    md: 'repeat(2, 273px)',
                                    lg: 'repeat(3, 273px)',
                                },
                                gap: { xs: '24px', sm: '35px', md: '42px' },
                                ml: { md: '110px', lg: '-15%' },
                                justifyContent: 'center',
                                mx: 'auto',
                            }}>
                                {othersList.map((product) => (
                                    <OthersCard
                                        key={product.id}
                                        image={product.img}
                                        name={product.name}
                                        price={product.px}
                                        originalPrice={product.oldPx}
                                    />
                                ))}
                            </Box>
                            <OthersPagination />
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
                PaperProps={{ sx: { width: 290, borderRadius: '0 16px 16px 0', boxShadow: '4px 0 24px rgba(0,0,0,0.12)' } }}
            >
                <FilterContent onClose={() => setDrawerOpen(false)} />
            </Drawer>

            <Footer />
        </Box>
    );
};

export default Others;
