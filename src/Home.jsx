import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../src/Home.css';

const Home = () => {
  const [productInput, setProductInput] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setProductInput(e.target.value);
  };

  const handleSubmit = () => {
    if (productInput.trim()) {
      // Navigate to the rating page with the product as state or parameter
      navigate('/rating', { state: { productInput } });
    } else {
      alert('Please enter a product name or link.');
    }
  };

  return (
    <div className="home-container">
      <h1>Welcome to Eco Rate!</h1>
      <p>Enter a product name or link below to see how eco-friendly it is.</p>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter product name or link"
          value={productInput}
          onChange={handleInputChange}
          className="product-input"
        />
        <button onClick={handleSubmit} className="submit-button">Analyze Product</button>
      </div>
    </div>
  );
};

export default Home;
