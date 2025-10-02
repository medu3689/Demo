// src/pages/Home.jsx
import { Typography, Box, Button } from '@mui/material';
import banner from '../assets/banner.jpg';

function Home() {
  return (
    <Box 
      sx={{ 
        textAlign: 'center', 
        padding: '40px 20px', 
        backgroundColor: '#f5f5f5',
        minHeight: '80vh'
      }}
    >
      <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
        Welcome to Mini E-commerce Demo!
      </Typography>

      <Typography variant="h6" sx={{ mb: 4 }}>
        Check our products and add them to your cart.
      </Typography>

      {/* Banner image */}
      <Box
        component="img"
        src={banner}
        alt="E-commerce Banner"
        sx={{
          width: '100%',
          maxWidth: 1000,
          borderRadius: 2,
          mb: 4,
          boxShadow: 3
        }}
      />

      <Button 
        variant="contained" 
        color="primary" 
        href="/products"
        sx={{ fontSize: '18px', padding: '10px 30px' }}
      >
        View Products
      </Button>
    </Box>
  );
}

export default Home;
