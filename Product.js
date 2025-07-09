import React, { useState, useEffect } from 'react';
import './Product.css';

function Product() {
  const [count, setCount] = useState(1);
  const [showTimer, setShowTimer] = useState(false);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    setShowTimer(true);
    setSeconds(600); // 10 minutes
  };

  useEffect(() => {
    let interval = null;
    if (showTimer && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
    } else if (seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [showTimer, seconds]);

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="product-container">
      <div className="left-column">
        <img
          src="https://m.media-amazon.com/images/I/51QyvuxA8jL._UY1100_.jpg"
          alt="Jewellery Set"
          className="product-image"
        />
      </div>

      <div className="middle-column">
        <h2>Shining Diva Traditional Necklace Jewellery Set</h2>
        <p className="description">
          Description: A latest stylish design necklace set with traditional look suitable for weddings, birthdays,
          and other celebrations. High-quality finish and gold plated.
        </p>
        <div className="details">
          <strong>Product Details:</strong>
          <ul>
            <li><strong>Clasp type:</strong> Lobster Clasp</li>
            <li><strong>Material type:</strong> Metal</li>
            <li><strong>Gem type:</strong> No Gemstone</li>
            <li><strong>Occasion type:</strong> Wedding, Birthday</li>
            <li><strong>Item type name:</strong> Jewelry Set</li>
            <li><strong>Country of Origin:</strong> India</li>
          </ul>
        </div>
        <p className="ratings">⭐ 3.7 | 12 Ratings</p>

         <div style={{ marginBottom: '10px', textDecoration: 'line-through', color: '#999' }}>M.R.P: ₹599/-</div>

        <div className="offer-box">
          <span className="offer-price">🔥 Offer Price: ₹399/-</span>
          <span className="offer-tag">33% OFF</span>
        </div>

        <div className="quantity-box">
          <strong>Quantity:</strong>
          <button onClick={() => setCount(count > 1 ? count - 1 : 1)} className="quantity-btn">-</button>
          <span>{count}</span>
          <button onClick={() => setCount(count + 1)} className="quantity-btn">+</button>
        </div>
      </div>

      <div className="right-column">
        <div className="box">
          <p className="offer-highlight">🎯 Shop within 10 minutes to claim this offer</p>
          
          {/* Hide Claim Now if timer is showing */}
          {!showTimer && (
            <button className="claim-now" onClick={startTimer}>Claim Now</button>
          )}

          {/* Show timer and Buy Now only when showTimer is true */}
          {showTimer && (
            <>
              <div className="timer">⏱️ {formatTime(seconds)}</div>
              <button className="buy-now">Buy Now</button>
            </>
          )}
        </div>

        <div className="box">
          <p className="regular-price">Regular Price: ₹599/-</p>
          <p className="delivery">🚚 Faster and Free Delivery! by <strong>Tomorrow, 9PM</strong></p>
          <button className="buy-now">Buy Now</button> 
      
        
        </div>
          <div>
           <label>
          <input type="checkbox" name="terms" required />
          I agree to the terms and conditions
           </label>
        </div>

        <div>
           <label>
          <input type="checkbox" name="terms" required />
           Add Gift packing to the address
           </label>
        </div>
      </div>
    </div>
  );
}

export default Product;
