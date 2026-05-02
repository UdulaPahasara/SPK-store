import React, { useState, useRef } from 'react';
import { Box, Typography, Button, Dialog, DialogContent, IconButton } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

const Slip = ({ open, handleClose, onUpload }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleUploadClick = () => {
        if (selectedFile) {
            if (onUpload) onUpload(selectedFile);
            handleResetAndClose();
        } else {
            alert('Please select a file first');
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
        }
    };

    const handleBoxClick = () => {
        fileInputRef.current.click();
    };

    const handleResetAndClose = () => {
        setSelectedFile(null);
        handleClose();
    };

    return (
        <Dialog
            open={open}
            onClose={handleResetAndClose}
            maxWidth="sm"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: '15px',
                    p: 1,
                    maxWidth: '550px'
                }
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <IconButton onClick={handleResetAndClose} sx={{ color: 'rgba(0,0,0,0.5)' }}>
                    <CloseIcon />
                </IconButton>
            </Box>
            <DialogContent sx={{ mt: -2 }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3,
                    alignItems: 'center',
                    pb: 2
                }}>
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: '18px',
                        fontWeight: 600,
                        color: '#000',
                        textAlign: 'center'
                    }}>
                        Upload Your Bank Slip here
                    </Typography>

                    <input
                        type="file"
                        accept="image/*,.pdf"
                        style={{ display: 'none' }}
                        ref={fileInputRef}
                        onChange={handleFileChange}
                    />

                    {/* Dashed Upload Box */}
                    <Box
                        onClick={handleBoxClick}
                        sx={{
                            width: '100%',
                            maxWidth: '457px',
                            minHeight: '120px',
                            borderRadius: '10px',
                            border: '2px dashed rgba(246, 106, 116, 0.3)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            bgcolor: selectedFile ? 'rgba(246, 106, 116, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            p: 2,
                            position: 'relative',
                            '&:hover': {
                                bgcolor: 'rgba(246, 106, 116, 0.05)',
                                borderColor: '#F66A74'
                            }
                        }}
                    >
                        {selectedFile && (
                            <IconButton
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedFile(null);
                                    if (fileInputRef.current) fileInputRef.current.value = '';
                                }}
                                sx={{
                                    position: 'absolute',
                                    top: 8,
                                    right: 8,
                                    bgcolor: 'rgba(246, 106, 116, 0.1)',
                                    '&:hover': { bgcolor: 'rgba(246, 106, 116, 0.2)' }
                                }}
                                size="small"
                            >
                                <CloseIcon sx={{ fontSize: '18px', color: '#F66A74' }} />
                            </IconButton>
                        )}

                        {selectedFile ? (
                            <>
                                <InsertDriveFileIcon sx={{ fontSize: '40px', color: '#F66A74', mb: 1 }} />
                                <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', color: '#333', textAlign: 'center', wordBreak: 'break-all' }}>
                                    {selectedFile.name}
                                </Typography>
                                <Typography sx={{ fontFamily: 'Poppins', fontSize: '12px', color: '#666', mt: 0.5 }}>
                                    Click to change file
                                </Typography>
                            </>
                        ) : (
                            <>
                                <CloudUploadIcon sx={{ fontSize: '50px', color: 'rgba(0, 0, 0, 0.3)' }} />
                                <Typography sx={{ fontFamily: 'Poppins', fontSize: '14px', color: 'rgba(0, 0, 0, 0.5)', mt: 1 }}>
                                    Click to select bank slip
                                </Typography>
                            </>
                        )}
                    </Box>

                    {/* Upload Button */}
                    <Button
                        variant="contained"
                        onClick={handleUploadClick}
                        disabled={!selectedFile}
                        sx={{
                            width: '120px',
                            height: '40px',
                            bgcolor: '#F66A74',
                            color: '#fff',
                            textTransform: 'none',
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            fontSize: '14px',
                            borderRadius: '5px',
                            boxShadow: 'none',
                            '&:hover': { bgcolor: '#e55a64', boxShadow: 'none' },
                            '&.Mui-disabled': { bgcolor: 'rgba(0,0,0,0.1)', color: 'rgba(0,0,0,0.3)' }
                        }}
                    >
                        Upload
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default Slip;
