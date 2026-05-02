import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const CashOnDeliveryDetail = () => {
    return (
        <Box sx={{
            maxWidth: '714px',
            width: '100%',
            mt: 2,
            mb: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            position: 'relative'
        }}>
            <Typography sx={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 500, mb: 1 }}>
                Lorem ipsum dolor sit amet consectetur rem ipsum dolor sit amet consectetur.
            </Typography>

            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: { xs: 2, sm: 4 },
                alignItems: { xs: 'flex-start', sm: 'flex-end' },
                width: '100%'
            }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, width: { xs: '100%', sm: 'auto' } }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ width: { xs: '85px', sm: '150px' }, fontFamily: 'Poppins', fontSize: '14px', sm: '16px', fontWeight: 600 }}>Name</Typography>
                        <Typography sx={{ mr: 2, fontWeight: 600 }}>:</Typography>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', sm: '16px', color: '#666' }}>Sahan</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ width: { xs: '85px', sm: '150px' }, fontFamily: 'Poppins', fontSize: '14px', sm: '16px', fontWeight: 600 }}>Account Number</Typography>
                        <Typography sx={{ mr: 2, fontWeight: 600 }}>:</Typography>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', sm: '16px', color: '#666' }}>123435432345</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography sx={{ width: { xs: '85px', sm: '150px' }, fontFamily: 'Poppins', fontSize: '14px', sm: '16px', fontWeight: 600 }}>Branch</Typography>
                        <Typography sx={{ mr: 2, fontWeight: 600 }}>:</Typography>
                        <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', sm: '16px', color: '#666' }}>Kurunagala</Typography>
                    </Box>
                </Box>

                <Button
                    variant="contained"
                    sx={{
                        bgcolor: '#F66A74',
                        color: '#fff',
                        textTransform: 'none',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        px: 3,
                        py: 1,
                        borderRadius: '8px',
                        fontSize: '14px',
                        boxShadow: 'none',
                        ml: { sm: 'auto' },
                        width: { xs: '100%', sm: 'auto' },
                        mt: { xs: 1, sm: 0 },
                        '&:hover': { bgcolor: '#e55a64', boxShadow: 'none' }
                    }}
                >
                    Upload your slip
                </Button>
            </Box>
        </Box>
    );
};

export default CashOnDeliveryDetail;
