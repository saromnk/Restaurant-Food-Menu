import { Box, Typography } from '@mui/material';

function FoodItem({ item }) {
    return (
        <Box 
            sx={{  
                color: '#fff', 
                padding: '10px 15px', 
                ml:3
            
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography 
                    variant="h6" 
                >
                    {item.price}
                </Typography>
            </Box>

            <Typography variant="body2" >
                {item.description}
            </Typography>
        </Box>
    );
}

export default FoodItem;

