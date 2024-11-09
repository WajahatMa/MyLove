import React from 'react';

const Rating = () => {
  // Placeholder data
  const productInput = "Your Product"; // Placeholder for the product name
  const starRating = 4; // Example: 4 out of 5 stars
  const badges = ["Eco-Friendly", "Low CO2", "Sustainable"]; // Placeholder badges

  return (
    <div className="rating-page">
      {/* Top Section */}
      <div className="top-section">
        <h1 className="product-title">{productInput}</h1>

        {/* Star Rating */}
        <div className="rating-stars">
          {Array(starRating).fill().map((_, index) => (
            <i key={index} className="fas fa-star"></i>
          ))}
        </div>

        {/* Alternative Choices */}
        <div className="other-choices">
          <p>Other Choices</p>
        </div>
      </div>

      {/* Middle Section: Placeholder Description */}
      <div className="description-section">
        <p>Product description will go here. This is placeholder text to visualize the layout.</p>
      </div>

      {/* Bottom Section: Badges */}
      <div className="badges-section">
        {badges.map((badge, index) => (
          <span key={index} className="badge">{badge}</span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
