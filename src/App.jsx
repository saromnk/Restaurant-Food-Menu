import Header from './components/Header';
import Footer from './components/Footer';
import FoodList from './components/FoodList';
import CircularFoodSection from './components/CircularFoodSection';
import { Box } from '@mui/material';

function App() {
    return (
        <Box 
            sx={{ 
                backgroundColor: '#121212', 
                minHeight: '100vh',       
                color: '#fff',  
                width: '100vw'  
            }}
        >
            <Header />
            <CircularFoodSection />
            <FoodList />
            <Footer />
        </Box>
    );
}

export default App;
