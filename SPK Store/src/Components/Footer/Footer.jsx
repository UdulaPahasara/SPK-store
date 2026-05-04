import React from 'react';
import { Box, Grid, Typography, List, ListItem, ListItemIcon, ListItemText, Link } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

import fbIcon from '../../assets/Footer/fb.webp';
import instaIcon from '../../assets/Footer/insta.webp';
import tiktokIcon from '../../assets/Footer/tiktok.webp';
import instaVector from '../../assets/Footer/Vector.webp';

const Footer = () => {
    return (
        <Box component="footer" sx={{
            width: '100%',
            boxSizing: 'border-box',
            position: 'relative',
            zIndex: 2,
            bgcolor: '#000',
            color: '#fff',
            py: { xs: 8, md: 10 },
            px: { xs: 4, md: 8, lg: 12 },
            fontFamily: 'Poppins, sans-serif'
        }}>
            <Grid container spacing={{ xs: 6, md: 4 }} sx={{ maxWidth: '1440px', mx: 'auto', justifyContent: 'space-between' }}>
                {/* Column 1: SPK STORES */}
                <Grid item xs={12} md={5}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, fontSize: '0.85rem', textTransform: 'uppercase', fontFamily: 'Poppins' }}>
                        SPK STORES
                    </Typography>
                    <Typography sx={{ fontSize: '0.75rem', mb: 4, color: '#A0A0A0', lineHeight: 1.8, fontFamily: 'Poppins', pr: { md: 4 } }}>
                        Established in 2021, SPK Store has quickly emerged as a<br />trusted retailer<br />specializing in cutting-edge technology products.
                    </Typography>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '190px 1fr' }, gap: { xs: 1, sm: 1.5 }, fontSize: '0.75rem', color: '#A0A0A0', fontFamily: 'Poppins' }}>
                        <Typography sx={{ fontSize: 'inherit', fontWeight: 600 }}>Company Registration No</Typography>
                        <Typography sx={{ fontSize: 'inherit' }}>12/1730</Typography>

                        <Typography sx={{ fontSize: 'inherit', fontWeight: 600 }}>Bankers of the Company</Typography>
                        <Typography sx={{ fontSize: 'inherit' }}>Sampath Bank</Typography>

                        <Typography sx={{ fontSize: 'inherit', fontWeight: 600 }}>Company authorized Brand</Typography>
                        <Typography sx={{ fontSize: 'inherit' }}>Otensic / Hohem / FIMI /AOCHUAN</Typography>
                    </Box>
                </Grid>

                {/* Column 2: USEFUL LINKS */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, fontSize: '0.85rem', textTransform: 'uppercase', fontFamily: 'Poppins' }}>
                        USEFUL LINKS
                    </Typography>
                    <List sx={{ p: 0 }}>
                        {['Home', 'Drones', 'Gimbals', 'Smart Watches', 'Other Accessories'].map((link, index) => (
                            <ListItem key={index} sx={{ p: 0, mb: 1.5 }}>
                                <Link href="#" underline="hover" sx={{ color: '#A0A0A0', fontSize: '0.75rem', fontFamily: 'Poppins' }}>
                                    {link}
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </Grid>

                {/* Column 3: CONTACTS */}
                <Grid item xs={12} sm={6} md={3}>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 3, fontSize: '0.85rem', textTransform: 'uppercase', fontFamily: 'Poppins' }}>
                        CONTACTS
                    </Typography>

                    <List sx={{ p: 0, mb: 4 }}>
                        <ListItem
                            component="a"
                            href="https://maps.google.com/?q=22/1/A,+Kurunegala,+Kandy"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ px: 0, py: 0.5, alignItems: 'flex-start', mb: 1, textDecoration: 'none', color: 'inherit' }}
                        >
                            <ListItemIcon sx={{ minWidth: '30px', mt: '2px' }}>
                                <LocationOnIcon sx={{ fontSize: '18px', color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText
                                primary={<>No. 22/1/A, Kurunagala,<br />kandy</>}
                                primaryTypographyProps={{ fontSize: '0.75rem', color: '#A0A0A0', fontFamily: 'Poppins', lineHeight: 1.6 }}
                                sx={{ m: 0 }}
                            />
                        </ListItem>

                        <ListItem
                            component="a"
                            href="tel:+94761233454"
                            sx={{ px: 0, py: 0.5, mb: 1, textDecoration: 'none', color: 'inherit' }}
                        >
                            <ListItemIcon sx={{ minWidth: '30px' }}>
                                <PhoneIcon sx={{ fontSize: '18px', color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="076 1233454"
                                primaryTypographyProps={{ fontSize: '0.75rem', color: '#A0A0A0', fontFamily: 'Poppins' }}
                                sx={{ m: 0 }}
                            />
                        </ListItem>

                        <ListItem
                            component="a"
                            href="mailto:spkstore@gmail.com"
                            sx={{ px: 0, py: 0.5, mb: 1, textDecoration: 'none', color: 'inherit' }}
                        >
                            <ListItemIcon sx={{ minWidth: '30px' }}>
                                <EmailIcon sx={{ fontSize: '18px', color: '#fff' }} />
                            </ListItemIcon>
                            <ListItemText
                                primary="spkstore@gmail.com"
                                primaryTypographyProps={{ fontSize: '0.75rem', color: '#A0A0A0', fontFamily: 'Poppins' }}
                                sx={{ m: 0 }}
                            />
                        </ListItem>
                    </List>

                    {/* Social Media Icons */}
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {[
                            { icon: fbIcon, isVector: false },
                            { icon: tiktokIcon, isVector: false },
                            { icon: instaVector, isVector: true, bg: instaIcon }
                        ].map((item, idx) => (
                            <Link key={idx} href="#" sx={{
                                display: 'flex',
                                alignItems: 'center',
                                position: 'relative',
                                transition: 'transform 0.2s',
                                '&:hover': { transform: 'scale(1.1)' }
                            }}>
                                {item.isVector ? (
                                    <>
                                        <Box component="img" src={item.bg} alt="social circle" sx={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                                        <Box component="img" src={item.icon} alt="social icon" sx={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            width: '20px',
                                            height: '20px',
                                            objectFit: 'contain'
                                        }} />
                                    </>
                                ) : (
                                    <Box component="img" src={item.icon} alt="social" sx={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                                )}
                            </Link>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;
