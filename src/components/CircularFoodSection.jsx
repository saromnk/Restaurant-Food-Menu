import { Box } from '@mui/material';

function SemiCircleDesign() {
    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',        
                maxWidth: '300px',      
                aspectRatio: '2 / 1',    
                backgroundColor: '#FFAE42',
                borderBottomLeftRadius: '150px',
                borderBottomRightRadius: '150px',
                borderTop: 'none',
                margin: '0 auto',        
                border: '3px solid #FFAE42',

              
                '@media (max-width: 600px)': {
                    maxWidth: '150px'
                }
            }}
        >
            <Box
                component="img"
                src={`${import.meta.env.BASE_URL}assets/kebab.jpg`} 
                alt="Food Item"
                sx={{
                    width: '100%',             
                    height: '100%',            
                    objectFit: 'cover',        
                    borderBottomLeftRadius: '150px',
                    borderBottomRightRadius: '150px',
                }}
            />
            {/* Center Circle  */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: '#000',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    border: '10px solid #FFAE42'
                }}
            />
        </Box>
    );
}

export default SemiCircleDesign;
