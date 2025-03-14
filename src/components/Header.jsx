import { AppBar, Toolbar, Typography} from '@mui/material';

function Header() {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#FFAE42', padding: 2 }}>
            <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Main Title: 'Restaurant' */}
                <Typography 
                    variant="h3" 
                    sx={{ flexGrow: 1, textAlign: 'center',fontFamily: "'Pacifico', cursive",fontWeight:'bold' }}
                >
                    Restaurant
                </Typography>

                {/* Subtitle: 'FOOD MENU' */}
                <Typography 
                    variant="h4" 
                    sx={{ textAlign: 'center', marginTop: 1,marginBottom:2,color: '#000', letterSpacing: 2,fontFamily:'-moz-initial', fontWeight:'bolder' }}
                >
                    FOOD MENU
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
