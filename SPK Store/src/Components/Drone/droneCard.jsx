import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const DroneCard = ({ image, name, price, originalPrice }) => {
    return (
        <Box sx={{
            /* ── Exact Figma dimensions ── */
            width: '273px',
            height: '310px',
            flexShrink: 0,          /* Never shrink inside a flex/grid cell */
            bgcolor: '#FBFBFB',
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            transition: 'box-shadow 0.3s ease',
            '&:hover': {
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)'
            }
        }}>
            {/* ── Drone image — Figma: w213 h120 top50 left31 ── */}
            <Box sx={{
                position: 'absolute',
                top: '50px',
                left: '31px',
                width: '213px',
                height: '120px',
            }}>
                <Box
                    component="img"
                    src={image}
                    alt={name}
                    sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                />
            </Box>

            {/* ── Cart icon ── */}
            <IconButton sx={{
                position: 'absolute',
                bottom: '88px',           /* above the details area */
                right: '14px',
                width: '32px',
                height: '32px',
                bgcolor: '#fff',
                border: '1px solid #EAEAEA',
                color: '#F66A74',
                padding: 0,
                zIndex: 2,
                boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                '&:hover': { bgcolor: '#F66A74', color: '#fff', borderColor: '#F66A74' }
            }}>
                <ShoppingCartOutlinedIcon sx={{ fontSize: '15px' }} />
            </IconButton>

            {/* ── Product Details — sits at the bottom ── */}
            <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                px: '14px',
                pt: '10px',
                pb: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
            }}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontWeight: 600,
                    fontSize: '13px',
                    lineHeight: '20px',
                    color: '#1a1a1a',
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    textAlign: 'left',
                    minHeight: '40px',
                }}>
                    {name}
                </Typography>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '6px',
                }}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontWeight: 700,
                        fontSize: '13px',
                        color: 'rgba(0,0,0,0.75)'
                    }}>
                        Rs {price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </Typography>
                    {originalPrice && (
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 400,
                            fontSize: '11px',
                            color: 'rgba(0,0,0,0.3)',
                            textDecoration: 'line-through'
                        }}>
                            Rs {originalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </Typography>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default DroneCard;
