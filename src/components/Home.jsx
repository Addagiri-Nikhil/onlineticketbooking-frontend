import { Link, useNavigate } from "react-router-dom";
import "../styles/Home.css";
import React, { useEffect, useState, useRef } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const recommendRef = useRef(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const scrollToMovies = () => {
    recommendRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const movies = [
    {
      title: "Sankranthi Vasthuman",
      poster: "https://preview.redd.it/sankranti-ki-vastunnam-rant-v0-ep7nwwpzmebe1.png?auto=webp&s=715a92dc32f3ef742cc413cfd52e69a999838858",
      rating: "8.9/10",
      votes: "82.3K",
    },
    {
      title: "Game Changer",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb3QTdATlkGmBZg0eQh8BQsDxdTQiK8QgX9w&s",
      rating: "7.4/10",
      votes: "90.4K",
    },
    {
      title: "Daaku Maharaj",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjqs25iDd-hOuXQtbTViX0DoJpdsh8Qcv-A&s",
      rating: "8.8/10",
      votes: "107.1K",
    },
    {
      title: "Marco",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4tPoNEe-kH_WSmu83AQ9-jHbo_24Yj-now&s",
      rating: "8.5/10",
      votes: "76K",
    },
    {
      title: "Madha Gaja Raja (Telugu)",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ptZHd0KJJqyXqPgDgA4_EU1dw1kZw2-o6Q&s",
      rating: "8.3/10",
      votes: "40K",
    },
    {
      title: "Sky Force",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTI7yPS1vXeKdkOCSgd_3Vr7Jka_OsXw78Mg&s",
      rating: "8.9/10",
      votes: "42.4K",
    },
    {
      title: "Return of the Dragon",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbN2KQHlOLhwPavaaLER1GtwnsdgqY508G7g&s",
      rating: "10/10",
      votes: "43.7K",
    },
    {
      title: "RRR",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnaa6GC-6TQWlAD2nuHBWz5QdE5fk34SYnDA&s",
      rating: "9.9/10",
      votes: "100K+",
    },
    {
      title: "END GAME",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX0f8PpJZc6jRg5q1zq7-44Z5lkk8KVAt-HQ&s",
      rating: "8.2/10",
      votes: "27.6K",
    },
    {
      title: "CHHAAVA",
      poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEy9db_CAZjcWBh3vyVg3QJuDy1XUqRbqkDQ&s",
      rating: "9.6/10",
      votes: "33.6K",
    },
  ];

  return (
    <div className="home-container">
      {/* Header Section */}
      <header className="header">
        <div className="logo-search">
          <img src="/images/image.png" alt="MAKE MY SHOW" className="logo" />
          <input
            type="text"
            placeholder="Search for movies or concerts"
            className="search-bar"
          />
          <div className="auth-buttons">
            {user ? (
              <>
                <span style={{ marginRight: "10px" }}>Welcome, {user.fullName}</span>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <Link to="/login"><button>Login</button></Link>
                <Link to="/signup"><button>Signup</button></Link>
              </>
            )}
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="nav-bar">
          <button onClick={scrollToMovies} className="nav-button">Movies</button>
          <Link to="/stream" className="nav-button">Stream</Link>
          <Link to="/events" className="nav-button">Events</Link>
          <a href="#activities" className="nav-button">Activities</a>
          <a href="#offers" className="nav-button">Offers</a>
          <a href="#gift-cards" className="nav-button">Gift Cards</a>
        </nav>
      </header>

      {/* Advertisement Section */}
      <section className="advertisement-section">
        <h2 className="advertisement-title">Advertisement Section 📢</h2>
        <div className="advertisement-card samsung">
          <a href="https://www.samsung.com" target="_blank" rel="noopener noreferrer">Samsung</a>
        </div>
        <div className="advertisement-card apple">
          <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer">Apple</a>
        </div>
        <div className="advertisement-card mi">
          <a href="https://www.mi.com" target="_blank" rel="noopener noreferrer">MI</a>
        </div>
      </section>

      {/* Recommended Movies Section */}
      <section className="recommend-section" ref={recommendRef}>
        <h2>Recommend Movies</h2>
        <div className="movies-container">
          {movies.map((movie, index) => (
            <div key={index} className="movie-card">
              <Link to="/theatrelist">
                <img src={movie.poster} alt={movie.title} className="movie-poster" />
              </Link>
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>Rating: {movie.rating} ({movie.votes} Votes)</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Host Login */}
      <div className="contactus">
        For Host
        <Link to="/host/login"><button>Host Login</button></Link>
      </div>
    </div>
  );
}
