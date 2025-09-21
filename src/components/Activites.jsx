import React from "react";
import "./Activities.css";

const activities = [
  {
    date: "Fri, 20 Jun",
    title: "SPACETECH FESTIVAL 4.0",
    venue: "Palm Bliss Resort & Spa...",
    type: "Parties",
    price: "₹ 3000 onwards",
    image: "/images/spacetech.jpg",
  },
  {
    date: "Sun, 11 May onwards",
    title: "BANANA RIDES@Amaravati",
    venue: "Amaravati Boating Club...",
    type: "Water Sports",
    price: "₹ 400 onwards",
    image: "/images/banana.jpg",
  },
  {
    date: "Sun, 11 May onwards",
    title: "Salar Jung Museum Visit",
    venue: "Salar Jung Museum...",
    type: "Museums",
    price: "₹ 20 onwards",
    image: "/images/salarjung.jpg",
  },
  {
    date: "Sun, 11 May onwards",
    title: "Kadapa Wonderla Amusement Park",
    venue: "Kadapa Wonderla...",
    type: "Theme parks",
    price: "₹ 399 onwards",
    image: "/images/wonderla.jpg",
  },
];

const tags = [
  "Adventure",
  "Amusement Parks",
  "Tourist Attractions",
  "Antiques, Heritage, Museums",
  "Parties",
];

const Activities = () => {
  return (
    <div className="activities-container">
      <h1 className="activities-heading">Activities In Guntur</h1>
      <div className="activity-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag-pill">{tag}</span>
        ))}
      </div>

      <div className="activities-grid">
        {activities.map((act, index) => (
          <div key={index} className="activity-card">
            <img src={act.image} alt={act.title} className="activity-image" />
            <div className="activity-date">{act.date}</div>
            <div className="activity-details">
              <h2>{act.title}</h2>
              <p>{act.venue}</p>
              <p className="activity-type">{act.type}</p>
              <p className="activity-price">{act.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
