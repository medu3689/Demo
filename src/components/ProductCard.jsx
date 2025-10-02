// src/components/ProductCard.jsx
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

function ProductCard({ product, cart, setCart }) {
  const addToCart = () => setCart([...cart, product]);

  return (
    <Card sx={{ maxWidth: 250, m: 1 }}>
      <CardMedia component="img" height="140" image={product.image} alt={product.title} />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography>${product.price}</Typography>
        <Button variant="contained" onClick={addToCart} fullWidth>Add to Cart</Button>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
