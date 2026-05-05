import React, { useState } from 'react';
import { Box, Typography, TextField } from '@mui/material';

const CardDetail = () => {
    const [cardData, setCardData] = useState({
        number: '',
        name: '',
        exp: '',
        cvv: ''
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCardData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

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
                    name="number"
                    value={cardData.number}
                    onChange={handleInputChange}
                    error={!!errors.number}
                    helperText={errors.number}
                    variant="outlined"
                    size="small"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            bgcolor: '#E0E0E0',
                            borderRadius: '8px',
                            '& fieldset': { border: 'none' }
                        },
                        '& .MuiInputBase-input': { height: '25px', py: 1 },
                        '& .MuiFormHelperText-root': { fontFamily: 'Poppins', ml: 0 }
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
                    name="name"
                    value={cardData.name}
                    onChange={handleInputChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    variant="outlined"
                    size="small"
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            bgcolor: '#E0E0E0',
                            borderRadius: '8px',
                            '& fieldset': { border: 'none' }
                        },
                        '& .MuiInputBase-input': { height: '25px', py: 1 },
                        '& .MuiFormHelperText-root': { fontFamily: 'Poppins', ml: 0 }
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
                        name="exp"
                        value={cardData.exp}
                        onChange={handleInputChange}
                        error={!!errors.exp}
                        helperText={errors.exp}
                        placeholder="MM/YY"
                        variant="outlined"
                        size="small"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                bgcolor: '#E0E0E0',
                                borderRadius: '8px',
                                '& fieldset': { border: 'none' }
                            },
                            '& .MuiInputBase-input': { height: '25px', py: 1 },
                            '& .MuiFormHelperText-root': { fontFamily: 'Poppins', ml: 0 }
                        }}
                    />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { sm: 'center' }, flex: 1, gap: { xs: 1, sm: 2 } }}>
                    <Typography sx={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: '16px', color: '#000' }}>
                        CVV
                    </Typography>
                    <TextField
                        fullWidth
                        name="cvv"
                        value={cardData.cvv}
                        onChange={handleInputChange}
                        error={!!errors.cvv}
                        helperText={errors.cvv}
                        variant="outlined"
                        size="small"
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                bgcolor: '#E0E0E0',
                                borderRadius: '8px',
                                '& fieldset': { border: 'none' }
                            },
                            '& .MuiInputBase-input': { height: '25px', py: 1 },
                            '& .MuiFormHelperText-root': { fontFamily: 'Poppins', ml: 0 }
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default CardDetail;
