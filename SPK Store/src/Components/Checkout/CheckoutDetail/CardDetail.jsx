import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

const CardDetail = () => {
    return (
        <Box sx={{
            maxWidth: '707px',
            width: '100%',
            mt: 2,
            mb: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
        }}>
            {/* Card Number Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { sm: 'center' }, gap: { xs: 1, sm: 2 } }}>
                <Typography sx={{ minWidth: { sm: '150px' }, fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', color: '#000' }}>
                    Card Number
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            bgcolor: '#F5F5F5',
                            borderRadius: '8px',
                            '& fieldset': { border: 'none' }
                        },
                        '& .MuiInputBase-input': { height: '25px', py: 1 }
                    }}
                />
            </Box>

            {/* Name Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { sm: 'center' }, gap: { xs: 1, sm: 2 } }}>
                <Typography sx={{ minWidth: { sm: '150px' }, fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', color: '#000' }}>
                    Name on Card
                </Typography>
                <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            bgcolor: '#F5F5F5',
                            borderRadius: '8px',
                            '& fieldset': { border: 'none' }
                        },
                        '& .MuiInputBase-input': { height: '25px', py: 1 }
                    }}
                />
            </Box>

            {/* Exp & CVV Row */}
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 2, sm: 4 } }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { sm: 'center' }, flex: 1.2, gap: { xs: 1, sm: 2 } }}>
                    <Typography sx={{ minWidth: { sm: '150px' }, fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', color: '#000', whiteSpace: 'nowrap' }}>
                        Expiration Date
                    </Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                bgcolor: '#F5F5F5',
                                borderRadius: '8px',
                                '& fieldset': { border: 'none' }
                            },
                            '& .MuiInputBase-input': { height: '25px', py: 1 }
                        }}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { sm: 'center' }, flex: 1, gap: { xs: 1, sm: 2 } }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', color: '#000' }}>
                        CVV
                    </Typography>
                    <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                bgcolor: '#F5F5F5',
                                borderRadius: '8px',
                                '& fieldset': { border: 'none' }
                            },
                            '& .MuiInputBase-input': { height: '25px', py: 1 }
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default CardDetail;
