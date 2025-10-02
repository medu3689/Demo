// src/pages/Cart.jsx
import { Typography, List, ListItem, ListItemText } from '@mui/material';

function Cart({ cart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4">Your Cart</Typography>
      <List>
        {cart.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.title} secondary={`$${item.price}`} />
          </ListItem>
        ))}
      </List>
      <Typography variant="h6">Total: ${total.toFixed(2)}</Typography>
    </div>
  );
}

export default Cart;
