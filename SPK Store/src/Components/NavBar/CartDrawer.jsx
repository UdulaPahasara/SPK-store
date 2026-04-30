import React, { useState } from 'react';
import {
    Box, Drawer, Typography, IconButton, Button,
    Divider, Checkbox, Stack
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

import item1 from '../../assets/SmartWatch/Item1.webp';
import item2 from '../../assets/SmartWatch/Item2.webp';
import item3 from '../../assets/SmartWatch/Item3.webp';

const CartItem = ({ item, onToggle, onUpdateQuantity, onDelete }) => (
    <Box sx={{
        width: 210,
        height: 285,
        bgcolor: '#FBFBFB',
        borderRadius: '10px',
        p: 1.5,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
        flexShrink: 0
    }}>
        <Checkbox
            checked={item.checked}
            onChange={() => onToggle(item.id)}
            sx={{
                position: 'absolute', top: 5, left: 5, p: 0.5,
                color: '#E0E0E0',
                '&.Mui-checked': { color: '#F66A74' }
            }}
        />

        <Box sx={{
            width: 139,
            height: 181,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 1
        }}>
            <Box component="img" src={item.image} sx={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </Box>

        <Typography sx={{
            fontSize: '11px', fontWeight: 600, fontFamily: 'Poppins',
            textAlign: 'left', width: '100%', mb: 0.5,
            height: '32px', overflow: 'hidden', display: '-webkit-box',
            WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'
        }}>
            {item.name}
        </Typography>

        <Box sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            width: '100%', mt: 'auto'
        }}>
            <Typography sx={{ fontSize: '11px', fontWeight: 700, fontFamily: 'Poppins' }}>
                Rs {item.price.toLocaleString()}
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <Box sx={{
                    display: 'flex', alignItems: 'center', bgcolor: '#fff',
                    border: '1px solid #EAEAEA', borderRadius: '4px', px: 0.2
                }}>
                    <IconButton size="small" onClick={() => onUpdateQuantity(item.id, -1)} sx={{ p: 0.1 }}>
                        <RemoveIcon sx={{ fontSize: 10 }} />
                    </IconButton>
                    <Typography sx={{ fontSize: '10px', px: 0.5, minWidth: '12px', textAlign: 'center' }}>
                        {item.quantity}
                    </Typography>
                    <IconButton size="small" onClick={() => onUpdateQuantity(item.id, 1)} sx={{ p: 0.1 }}>
                        <AddIcon sx={{ fontSize: 10 }} />
                    </IconButton>
                </Box>
                <IconButton size="small" onClick={() => onDelete(item.id)} sx={{ p: 0.5, color: '#000' }}>
                    <DeleteOutlinedIcon sx={{ fontSize: 14 }} />
                </IconButton>
            </Box>
        </Box>
    </Box>
);

const CartDrawer = ({ open, onClose }) => {
    const [items, setItems] = useState([
        { id: 1, image: item1, name: 'DJI Mavic Pro Drone with 3 Battery', price: 379500, checked: false, quantity: 1 },
        { id: 2, image: item2, name: 'DJI Mavic Pro Drone with 3 Battery', price: 379500, checked: true, quantity: 1 },
        { id: 3, image: item3, name: 'DJI Mavic Pro Drone with 3 Battery', price: 379500, checked: true, quantity: 1 },
    ]);

    const toggleItem = (id) => {
        setItems(items.map(i => i.id === id ? { ...i, checked: !i.checked } : i));
    };

    const updateQuantity = (id, delta) => {
        setItems(items.map(i =>
            i.id === id ? { ...i, quantity: Math.max(1, i.quantity + delta) } : i
        ));
    };

    const deleteItem = (id) => {
        setItems(items.filter(i => i.id !== id));
    };

    const subtotal = items
        .filter(i => i.checked)
        .reduce((sum, i) => sum + (i.price * i.quantity), 0);

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            sx={{
                '& .MuiDrawer-paper': {
                    width: { xs: 'min(92%, 350px)', sm: 330, md: 350 },
                    p: { xs: 2.2, sm: 3 },
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5,
                    bgcolor: '#FFFFFF'
                }
            }}
        >
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'center', position: 'relative', pt: 1 }}>
                <Typography sx={{ fontSize: '14px', fontWeight: 700, color: '#1a1a1a', fontFamily: 'Poppins' }}>
                    Subtotal
                </Typography>
                <IconButton
                    onClick={onClose}
                    sx={{ position: 'absolute', right: -5, top: -5, color: '#999' }}
                >
                    <CloseIcon sx={{ fontSize: 20 }} />
                </IconButton>
            </Box>

            <Typography sx={{
                fontSize: { xs: '18px', sm: '22px' },
                fontWeight: 800,
                textAlign: 'center',
                mb: 1.5,
                fontFamily: 'Poppins'
            }}>
                LKR {subtotal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </Typography>

            <Box>
                <Button
                    fullWidth
                    variant="contained"
                    disableElevation
                    sx={{
                        bgcolor: '#F66A74', color: '#fff', py: 1.6,
                        borderRadius: '10px', fontWeight: 700, textTransform: 'none',
                        fontSize: '14px',
                        mb: 2.5,
                        '&:hover': { bgcolor: '#e55d67' }
                    }}
                >
                    Checkout
                </Button>
                <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                        borderColor: '#F66A74', color: '#F66A74', py: 1.6,
                        borderRadius: '10px', fontWeight: 700, textTransform: 'none',
                        fontSize: '14px',
                        borderWidth: '1.5px',
                        '&:hover': { borderColor: '#e55d67', bgcolor: 'transparent', borderWidth: '1.5px' }
                    }}
                >
                    Go To Cart
                </Button>
            </Box>

            <Divider sx={{ my: 2, borderColor: 'rgba(0,0,0,0.08)' }} />

            {/* Scrollable Item List */}
            <Box sx={{
                flex: 1, overflowY: 'auto',
                display: 'flex', flexDirection: 'column', gap: 3,
                alignItems: 'center',
                px: 1,
                /* Custom scrollbar */
                '&::-webkit-scrollbar': { width: '4px' },
                '&::-webkit-scrollbar-thumb': { bgcolor: '#E0E0E0', borderRadius: '10px' }
            }}>
                {items.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        onToggle={toggleItem}
                        onUpdateQuantity={updateQuantity}
                        onDelete={deleteItem}
                    />
                ))}
            </Box>
        </Drawer>
    );
};

export default CartDrawer;
