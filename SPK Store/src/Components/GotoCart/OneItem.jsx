import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const OneItem = ({ item }) => {
    const [quantity, setQuantity] = useState(item.quantity || 1);

    const handleQuantity = (type) => {
        if (type === 'inc') setQuantity(prev => prev + 1);
        if (type === 'dec' && quantity > 1) setQuantity(prev => prev - 1);
    };

    return (
        <Box sx={{
            width: { xs: '100%', sm: '100%', lg: '736px' },
            height: { xs: 'auto', lg: '141px' },
            bgcolor: '#F5F5F5',
            borderRadius: '5px',
            display: 'flex',
            alignItems: 'center',
            padding: { xs: '15px', sm: '20px' },
            gap: { xs: 2, sm: 4 },
            transition: 'all 0.3s ease',
            '&:hover': {
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }
        }}>
            {/* Item Image */}
            <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                    width: { xs: '70px', sm: '97px' },
                    height: { xs: '90px', sm: '130px' },
                    objectFit: 'contain',
                    flexShrink: 0
                }}
            />

            {/* Item Details */}
            <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography sx={{
                    fontWeight: 600,
                    fontSize: { xs: '14px', sm: '18px' },
                    fontFamily: 'Poppins',
                    color: '#000',
                    mb: 1,
                    overflow: 'hidden',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                }}>
                    {item.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Typography sx={{
                        fontWeight: 700,
                        fontSize: { xs: '15px', sm: '17.5px' },
                        fontFamily: 'Poppins',
                        color: '#000'
                    }}>
                        LKR {item.price?.toLocaleString()}
                    </Typography>
                    {item.oldPrice && (
                        <Typography sx={{
                            fontSize: { xs: '12px', sm: '14px' },
                            color: 'rgba(0,0,0,0.4)',
                            textDecoration: 'line-through',
                            fontFamily: 'Poppins'
                        }}>
                            LKR {item.oldPrice?.toLocaleString()}
                        </Typography>
                    )}
                </Box>
            </Box>

            {/* Quantity Controls & Remove */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1.5,
                flexShrink: 0
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    bgcolor: '#fff',
                    borderRadius: '4px',
                    height: '28px',
                    border: '1px solid #EAEAEA',
                    overflow: 'hidden'
                }}>
                    <Button
                        onClick={() => handleQuantity('dec')}
                        sx={{
                            minWidth: '28px',
                            width: '28px',
                            height: '100%',
                            padding: 0,
                            color: '#888',
                            fontSize: '18px',
                            '&:hover': { bgcolor: 'transparent', color: '#000' }
                        }}
                    >
                        -
                    </Button>
                    <Typography sx={{
                        width: '32px',
                        textAlign: 'center',
                        fontSize: '13px',
                        fontWeight: 600,
                        fontFamily: 'Poppins'
                    }}>
                        {quantity.toString().padStart(2, '0')}
                    </Typography>
                    <Button
                        onClick={() => handleQuantity('inc')}
                        sx={{
                            minWidth: '28px',
                            width: '28px',
                            height: '100%',
                            padding: 0,
                            color: '#888',
                            fontSize: '18px',
                            '&:hover': { bgcolor: 'transparent', color: '#000' }
                        }}
                    >
                        +
                    </Button>
                </Box>
                <Typography
                    sx={{
                        color: '#F66A74',
                        fontSize: '12px',
                        fontWeight: 600,
                        fontFamily: 'Poppins',
                        cursor: 'pointer',
                        textTransform: 'capitalize',
                        '&:hover': { opacity: 0.8 }
                    }}
                >
                    Remove
                </Typography>
            </Box>
        </Box>
    );
};

export default OneItem;
