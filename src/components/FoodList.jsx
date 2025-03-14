import menuData from '../data/menuData';
import FoodItem from './FoodItem';
import { Typography } from '@mui/material';
import { Grid } from '@mui/system';

function FoodList() {
    return (
        <Grid
        container 
        spacing={12} 
        sx={{ 
            display: 'flex', 
            justifyContent: 'center',  
            textAlign: 'center'        
        }}
        >
            
            {/* Burger Column */}
            <Grid item xs={6}>
                <Typography
                    variant="h4"
                    sx={{
                        color: '#f4b400',
                        fontFamily: '-moz-initial', fontWeight: 'bolder',
                        ml: 5, mt: 1, mb: 1,
                        textAlign: 'left',
                        padding: '3px',
                        borderBottom: '1px gray solid'
                    }}
                >
                    BURGER
                </Typography>
                {menuData.burger.map((item, index) => (
                    <FoodItem key={index} item={item} />
                ))}
            </Grid>

            {/* Kebab Column */}
            <Grid item xs={6}>
                <Typography
                    variant="h4"
                    sx={{
                        color: '#f4b400', fontFamily: '-moz-initial', fontWeight: 'bolder',
                        ml: 5, mt: 1, mb: 1,
                        textAlign: 'left',
                        padding: '3px',
                        borderBottom: '1px gray solid'
                    }}
                >
                    KEBAB
                </Typography>
                {menuData.kebab.map((item, index) => (
                    <FoodItem key={index} item={item} />
                ))}
            </Grid>
        </Grid>
    );
}

export default FoodList;


