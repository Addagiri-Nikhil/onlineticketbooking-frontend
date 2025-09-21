import React from "react";
import "../styles/Stream.css";

const premieres = [
  {
    title: "Hit 3",
    poster: "https://cdn.123telugu.com/content/wp-content/uploads/2025/04/hit3-1.jpg",
    rating: "9.0/10",
    votes: "12.3K",
  },
  {
    title: "Arjun S/O Yjayanthi",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMWD7EfxsEQomGTT9s1NrgqmeF16SvYQmkQ&s",
    rating: "8.8/10",
    votes: "8.5K",
  },
  {
    title: "# Single",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49IN9vlhCK8sg3frXvGtbj42m7CE8H0PKmg&s",
    rating: "9.1/10",
    votes: "10.2K",
  },
  {
    title: " MAD sqaure",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshCvQzyJNrUF_5oSbZVs9BGKATPUfw9SbFg&s",
    rating: "8.5/10",
    votes: "7.6K",
  },
  {
    title: "Minecraft",
    poster: "https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2025/02/minecraft_the_movie_ver7_xxlg.jpg",
    rating: "8.9/10",
    votes: "9.4K",
  },
];

const newStreams = [
  {
    title: "CHHAAVA",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEy9db_CAZjcWBh3vyVg3QJuDy1XUqRbqkDQ&s",
    rating: "9.6/10",
    votes: "33.6K",
  },
  {
    title: "Mission impossible",
    poster: "https://upload.wikimedia.org/wikipedia/en/1/1f/Mission_Impossible_%E2%80%93_The_Final_Reckoning_Poster.jpg",
    rating: "8.2/10",
    votes: "22.1K",
  },
  {
    title: "Shinchan",
    poster: "https://m.media-amazon.com/images/M/MV5BMjIyMTlmOTctMWJlNy00NzViLThkZTctNmM2ODUyZGYwNTRjXkEyXkFqcGc@.V1.jpg",
    rating: "8.8/10",
    votes: "18.9K",
  },
  {
    title: "Pushpa2",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQIEB9hii5syqmGI4CKb6N1KRlUYFtV4WyA&s",
    rating: "9.0/10",
    votes: "19.5K",
  },
  {
    title: "Marco",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4tPoNEe-kH_WSmu83AQ9-jHbo_24Yj-now&s",
    rating: "8.7/10",
    votes: "21.0K",
  },
];

export default function Stream() {
  return (
    <div className="stream-container">
      <section className="stream-section">
        <h2 className="section-title">Premiere of the week</h2>
        <div className="stream-carousel">
          {premieres.map((item, index) => (
            <div className="stream-card" key={index}>
              <img src={item.poster} alt={item.title} />
              <div className="tag">PREMIERE</div>
              <div className="card-info">
                <h4>{item.title}</h4>
                <p>{item.rating} • {item.votes} votes</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="stream-section">
        <div className="section-header">
          <h2 className="section-title">New on Stream</h2>
          <a href="#" className="see-all">See All ›</a>
        </div>
        <div className="stream-carousel">
          {newStreams.map((item, index) => (
            <div className="stream-card" key={index}>
              <img src={item.poster} alt={item.title} />
              <div className="card-info">
                <h4>{item.title}</h4>
                <p>{item.rating} • {item.votes} votes</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
