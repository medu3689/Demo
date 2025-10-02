// src/pages/Products.jsx
import { useQuery } from '@tanstack/react-query';
import ProductCard from '../components/ProductCard';

function Products({ cart, setCart }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['products'],
    queryFn: () => fetch('https://fakestoreapi.com/products').then(res => res.json())
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '20px' }}>
      {data.map(product => (
        <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
}

export default Products;
