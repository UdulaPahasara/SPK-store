import React from 'react';
import { Box, Typography, Rating, IconButton } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const ProductCard = ({ product, containerSx = {} }) => {
    return (
        <Box sx={{
            width: { xs: '210px', md: '273px' },
            height: { xs: '320px', md: '380px' },
            bgcolor: '#F5F5F5',
            borderRadius: '16px',
            padding: { xs: '12px', md: '20px' },
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            flexShrink: 0,
            ...containerSx
        }}>
            {/* Image Container */}
            <Box sx={{
                width: '100%',
                height: { xs: '150px', md: '156px' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 2,
                mx: 'auto',
                position: 'relative',
                mt: { xs: '50px', md: '80px' }
            }}>
                <Box
                    component="img"
                    src={product.img}
                    alt={product.title}
                    sx={{
                        maxWidth: '90%',
                        maxHeight: '90%',
                        objectFit: 'contain'
                    }}
                />
                <IconButton size="small" sx={{
                    position: 'absolute',
                    bottom: '-5px',
                    right: '-5px',
                    bgcolor: '#fff',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    '&:hover': { bgcolor: '#f0f0f0' }
                }}>
                    <ShoppingCartOutlinedIcon fontSize="small" sx={{ color: '#000' }} />
                </IconButton>
            </Box>

            {/* Title */}
            <Typography sx={{
                mt: { xs: 4, md: 'auto' },
                mb: { xs: 1, md: 0 },
                fontWeight: 700,
                fontSize: { xs: '0.9rem', md: '1.05rem' },
                lineHeight: 1.3,
                fontFamily: 'Poppins, sans-serif',
                color: '#000',
                overflow: 'hidden',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                textOverflow: 'ellipsis',
                height: { xs: '36px', md: '44px' }
            }}>
                {product.title}
            </Typography>

            {/* Price & Rating */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 'auto'
            }}>
                <Typography sx={{
                    fontWeight: 700,
                    fontSize: { xs: '0.75rem', md: '0.85rem' },
                    color: '#333',
                    fontFamily: 'Poppins'
                }}>
                    {product.price}
                </Typography>
                <Rating
                    value={product.rating}
                    precision={0.5}
                    size="small"
                    readOnly
                    sx={{ fontSize: { xs: '0.7rem', md: '0.8rem' } }}
                />
            </Box>
        </Box>
    );
};

export default ProductCard;
