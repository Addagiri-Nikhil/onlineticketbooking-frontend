import React from "react";
import "../styles/Events.css";
import { useNavigate } from "react-router-dom";

export default function Events() {
  const navigate = useNavigate();

  const events = [
    {
      id: 1,
      title: "Tech Summit 2025",
      description: "Annual gathering of tech leaders and innovators.",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      date: "June 15, 2025",
      location: "Hyderabad",
    },
    {
      id: 2,
      title: "Startup Expo",
      description: "Showcase of India’s top emerging startups.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
      date: "July 1, 2025",
      location: "Bangalore",
    },
    {
      id: 3,
      title: "Developer Hackfest",
      description: "48-hour hackathon for coders and builders.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKx_8lCtBZR0xBzxBqgHCuojtA8YH0mQ5cFQ&s",
      date: "August 5, 2025",
      location: "Chennai",
    },
    {
      id: 4,
      title: "AI & ML Conference",
      description: "Explore the future of AI and machine learning.",
      image: "https://kindcongress.com/wp-content/uploads/2024/11/International-Conference-on-Artificial-Intelligence-and-Machine-Learning-ICAML-2025.jpg",
      date: "September 10, 2025",
      location: "Delhi",
    },
  ];

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="events-container">
      <header className="events-header">
        <h1>Upcoming Tech Events</h1>
        <button onClick={handleBack} className="back-button">← Back to Home</button>
      </header>

      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-info">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
