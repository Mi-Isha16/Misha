// BeautyParlourDashboard.jsx
import React from "react";
import "./BeautyParlourDashboard.css";

function BeautyParlourDashboard({ offer, appointment, highlight, services }) {
  return (
    <div className="beauty-container">
      <div className="heading">Angelic Beauty Parlour</div>

      {/* Top Section */}
      <div className="top-section">
        <div className="box offer">
          <h3>Today's Offer</h3>
          <p>{offer}</p>
          <button className="btn">View Offer</button>
        </div>
        <div className="box appointment">
          <h3>Your Appointment</h3>
          <p>{appointment}</p>
          <button className="btn">Reschedule</button>
        </div>
      </div>

      {/* Middle Section */}
      <div className="middle-section">
        <div className="box highlight">
          <h2>{highlight.title}</h2>
          <p>{highlight.desc}</p>
          <button className="btn">Know More</button>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        {services.map((service, index) => (
          <div className="box service" key={index}>
            <h4>{service.title}</h4>
            <p>{service.detail}</p>
            <button className="btn">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BeautyParlourDashboard;
