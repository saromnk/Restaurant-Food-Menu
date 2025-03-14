import { Box, Typography } from '@mui/material';
import { Grid } from '@mui/system';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';

function Footer() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',  
                textAlign: 'center',
                width: '100%',     
                padding: '20px 0'   ,
                gap:  5  
            }}
        >
            {/* Grid Container for Content */}
            <Grid 
                container 
                spacing={12}    
                sx={{ 
                    justifyContent:'center',
                    maxWidth: '800px', 
                    width: '100%' ,
                    ml:'5'
                }} 
            >
                {/* Left Column - Food Images */}
                <Grid 
                    item 
                    xs={12} 
                    md={6} 
                    sx={{ display: 'flex', justifyContent: 'center' }}
                >
                    <Box 
                        sx={{ 
                            display: 'flex', 
                            position: 'relative' 
                        }}
                    >
                        {/* Left Image */}
                        <Box 
                            component="img" 
                            src="/Restaurant-Food-Menu/src/assets/burger.jpg"
                            alt="Food 1"
                            sx={{ 
                                width: 120, 
                                height: 120, 
                                borderRadius: '50%', 
                                border: '4px solid #FFAE42' 
                            }}
                        />

                        {/* Right Image */}
                        <Box 
                            component="img" 
                            src="/Restaurant-Food-Menu/src/assets/shish-kebab.jpg"
                            alt="Food 2"
                            sx={{ 
                                width: 120, 
                                height: 120, 
                                borderRadius: '50%', 
                                border: '4px solid #FFAE42'
                            }}
                        />

                        {/* Offer Badge */}
                        <Box 
                            sx={{ 
                                position: 'absolute', 
                                top: '50%', 
                                left: '50%', 
                                transform: 'translate(-50%, -50%)', 
                                backgroundColor: '#fff', 
                                color: '#f4b400',
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                display: 'flex', 
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: '3px solid #FFAE42',
                                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            <Typography variant="h5" sx={{ fontWeight: 'bolder', color: "black" }}>15%</Typography>
                            <Typography variant="caption" sx={{ fontWeight: 'bold' }}>OFFER</Typography>
                        </Box>
                    </Box>
                </Grid>

                {/* Right Column - Delivery Info */}
                <Grid 
                    item 
                    xs={12} 
                    md={6} 
                    sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        justifyContent:'center',
                        flexWrap: 'wrap',        
                        gap: 2  
                    }}
                >
                    {/* TwoWheeler Icon */}
                    <TwoWheelerIcon 
                        sx={{ 
                            fontSize: 100, 
                            color: '#FFAE42', 
                            ml:2,mr:2
                        }} 
                    />
                    <Grid 
                    item 
                    sx={{ 
                        display: 'flex', 
                        flexDirection: 'column',
                        alignItems: 'center'  
                    }}
                >

                    {/* Delivery Info */}
                    <Typography variant="h6">Free Home Delivery</Typography>
                    <Typography 
                        variant="h6" 
                        sx={{ color: '#FFAE42'}}  
                    >
                        (+0123) 0123 456
                    </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;
