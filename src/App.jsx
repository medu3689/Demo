// src/App.jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <nav style={{ padding: '16px', borderBottom: '1px solid gray' }}>
          <Link to="/" style={{ marginBlock: 50 }}>Home</Link>
          <Link to="/products" style={{ marginLeft: 50 }}>Products</Link>
          <Link to="/cart"style={{ marginLeft: 50}}>Cart ({cart.length})</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
